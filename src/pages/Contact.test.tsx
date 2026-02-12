import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Contact from './Contact';

function renderWithRouter() {
  return render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
}

describe('Contact', () => {
  it('renders the Contact Us heading', () => {
    renderWithRouter();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    renderWithRouter();
    expect(screen.getByText('Want to learn more about MetaPhase EDG?')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    renderWithRouter();
    expect(screen.getByText(/11911 Freedom Dr/)).toBeInTheDocument();
    expect(screen.getByText('info@metaphaseedg.com')).toBeInTheDocument();
    expect(screen.getByText('301-537-3719')).toBeInTheDocument();
  });

  it('renders the contact form fields', () => {
    renderWithRouter();
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
  });

  it('renders the Send button', () => {
    renderWithRouter();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });
});
