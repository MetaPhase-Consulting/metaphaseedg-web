// Contact form delivery is isolated here so the provider can be swapped in one place
// (e.g. if the site moves off Netlify). Today: Netlify Forms, with a mailto fallback.
import { ORG } from './site';

export const FORM_NAME = 'contact';

export type ContactFields = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

function encode(data: Record<string, string>): string {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&');
}

function openMailto(fields: ContactFields) {
  const subject = encodeURIComponent(`Contact from ${fields.firstName} ${fields.lastName}`);
  const body = encodeURIComponent(
    `Name: ${fields.firstName} ${fields.lastName}\nEmail: ${fields.email}\n\n${fields.message}`
  );
  window.location.href = `mailto:${ORG.email}?subject=${subject}&body=${body}`;
}

export type SubmitResult = 'sent' | 'mailto';

export async function submitContact(fields: ContactFields): Promise<SubmitResult> {
  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': FORM_NAME, ...fields }),
    });
    if (!res.ok) throw new Error(`Form POST failed: ${res.status}`);
    return 'sent';
  } catch {
    // Network/host can't accept the post — fall back to the visitor's mail client.
    openMailto(fields);
    return 'mailto';
  }
}
