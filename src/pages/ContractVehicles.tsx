import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import { faqLd, breadcrumbLd } from '../lib/jsonld';

const pathways: { name: string; desc: string }[] = [
  {
    name: 'MetaPhase SBIR Phase III',
    desc: 'A pre-competed, direct-award path with no dollar or time limits — awards can be executed in days and have never been successfully protested.',
  },
  {
    name: '8(a) Sole Source',
    desc: 'As an SBA 8(a) certified Small Business Joint Venture, MetaPhase EDG is eligible for streamlined 8(a) sole-source awards.',
  },
  {
    name: 'Commercial Solutions Opening (CSO)',
    desc: 'A streamlined path for innovative commercial solutions outside traditional FAR processes, with commercial-style evaluation and award.',
  },
  {
    name: 'Justification & Approval (J&A)',
    desc: 'A compliant route to a directed award when the acquisition strategy supports a sole-source approach.',
  },
];

export default function ContractVehicles() {
  return (
    <div>
      <Seo
        title="Contract Vehicles"
        description="Contract with MetaPhase EDG via GSA MAS 47QTCA26D002G (SINs 541611, 54151S) and NASA SEWP VI GWAC 80TECH26D1903, with 8(a)/EDWOSB/WOSB set-asides, a Top Secret Facility Clearance, and acquisition pathways including SBIR Phase III and 8(a) sole source."
        path="/contract-vehicles"
        jsonLd={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Contract Vehicles', path: '/contract-vehicles' },
          ]),
          faqLd([
            {
              q: 'What is MetaPhase EDG’s GSA Schedule contract number?',
              a: 'MetaPhase EDG holds GSA Multiple Award Schedule contract 47QTCA26D002G with SINs 541611 and 54151S.',
            },
            {
              q: 'Is MetaPhase EDG on NASA SEWP VI?',
              a: 'Yes. MetaPhase EDG holds NASA SEWP VI Government-Wide Acquisition Contract (GWAC) 80TECH26D1903, available to all federal executive agencies for IT products and standalone IT services under Categories B and C.',
            },
            {
              q: 'Does MetaPhase EDG have a facility clearance?',
              a: 'Yes. MetaPhase EDG holds a Top Secret (TS) Facility Clearance and can support classified federal missions.',
            },
            {
              q: 'Can MetaPhase EDG receive sole-source awards?',
              a: 'Yes. As an SBA 8(a) certified Small Business Joint Venture, and through acquisition pathways such as SBIR Phase III, MetaPhase EDG is eligible for streamlined and sole-source awards.',
            },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="py-12 bg-white">
        <div className="section-container text-center">
          <h1 className="text-[40px] sm:text-[56px] font-semibold text-mp-ink leading-tight mb-2">
            Contract Vehicles
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-mp-edg-blue mb-6">
            How to put MetaPhase EDG on contract
          </h2>
          <p className="text-base text-mp-ink leading-relaxed max-w-3xl mx-auto">
            MetaPhase EDG is an SBA-certified 8(a), EDWOSB, and WOSB Small Business Joint
            Venture. Below are our contract vehicles, set-aside designations, facility clearance,
            and the acquisition pathways available to your contracting team.
          </p>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="h-[2px] bg-gradient-to-r from-mp-orange to-mp-edg-blue" />

      {/* Set-aside designations */}
      <section className="py-10 bg-white">
        <div className="section-container">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-mp-edg-blue text-center mb-5">
            Set-Aside Designations
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {['SBA 8(a)', 'EDWOSB', 'WOSB', 'Small Business Joint Venture'].map((cert) => (
              <li key={cert} className="flex items-center gap-2 text-lg font-semibold text-mp-ink">
                <CheckCircle2 size={20} className="text-mp-orange" aria-hidden="true" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contract vehicles */}
      <section className="py-12 bg-[#F5F5F5]">
        <div className="section-container">
          <h2 className="text-2xl font-semibold text-mp-ink text-center mb-8">
            Contract Vehicles
          </h2>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                name: 'GSA Multiple Award Schedule (MAS)',
                logo: {
                  src: '/images/gsa-logo.png',
                  alt: 'U.S. General Services Administration',
                  className: 'h-10 sm:h-12',
                },
                details: [
                  { label: 'Contract Number', value: '47QTCA26D002G' },
                  { label: 'Period of Performance', value: '12/18/2025 – 12/17/2030' },
                  { label: 'SINs', value: '541611, 54151S' },
                ],
              },
              {
                name: 'NASA Solutions for Enterprise-Wide Procurement (SEWP) VI',
                logo: {
                  src: '/images/sewp-vi-logo.png',
                  alt: 'NASA SEWP VI',
                  className: 'h-20 sm:h-24',
                },
                details: [
                  { label: 'Contract Number', value: '80TECH26D1903' },
                  { label: 'Period of Performance', value: '11/01/2026 – 10/31/2036' },
                  {
                    label: 'Categories',
                    value:
                      'Category B (Enterprise-wide IT Service Solutions), Category C (IT Mission-Based Services)',
                  },
                ],
              },
            ].map((vehicle) => (
              <div
                key={vehicle.name}
                className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
              >
                <div className="mb-4 flex min-h-24 items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-mp-ink">{vehicle.name}</h3>
                  <img
                    src={vehicle.logo.src}
                    alt={vehicle.logo.alt}
                    className={`${vehicle.logo.className} w-auto shrink-0`}
                  />
                </div>
                <dl className="space-y-2 text-sm">
                  {vehicle.details.map((d) => (
                    <div key={d.label}>
                      <dt className="font-semibold text-mp-edg-blue">{d.label}</dt>
                      <dd className="text-mp-ink">{d.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility clearance */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-mp-edg-blue/20 bg-gradient-to-br from-mp-edg-blue/5 to-mp-orange/5 p-8 text-center sm:flex-row sm:text-left">
            <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-mp-edg-blue to-mp-orange shadow-lg">
              <ShieldCheck size={48} className="text-white" aria-hidden="true" strokeWidth={1.75} />
              <span className="absolute -bottom-1 rounded bg-mp-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                Top Secret
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-mp-ink mb-2">
                Top Secret Facility Clearance
              </h2>
              <p className="text-base text-mp-ink leading-relaxed">
                MetaPhase EDG holds a Top Secret (TS) Facility Clearance and is cleared to support
                classified federal missions up to the Top Secret level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional acquisition pathways */}
      <section className="py-12 bg-[#F5F5F5]">
        <div className="section-container">
          <h2 className="text-2xl font-semibold text-mp-ink text-center mb-3">
            Additional Acquisition Pathways
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-base text-mp-ink leading-relaxed">
            Beyond traditional vehicles, several pathways let agencies put MetaPhase EDG on
            contract quickly and compliantly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pathways.map((p) => (
              <div
                key={p.name}
                className="flex gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mp-orange/10">
                  <Zap size={20} className="text-mp-orange" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mp-ink mb-1">{p.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center">
            <a
              href="https://metaphase.tech/acquisitions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-mp-edg-blue hover:text-mp-orange underline"
            >
              Explore acquisition pathways on MetaPhase.tech
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>

      {/* NAICS */}
      <section className="py-12 bg-white">
        <div className="section-container text-center">
          <h2 className="text-2xl font-semibold text-mp-ink mb-6">NAICS Codes</h2>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg text-mp-ink">
            {[
              '541611', '541519', '541512', '541511',
              '541330', '541990', '541618', '611430', '611420',
            ].map((code) => (
              <li key={code}>{code}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#F5F5F5]">
        <div className="section-container text-center">
          <h2 className="text-2xl font-semibold text-mp-ink mb-4">
            Ready to get started?
          </h2>
          <p className="text-base text-mp-ink mb-6 max-w-2xl mx-auto">
            Tell us about your mission and we&rsquo;ll help you find the fastest path to award.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-3 bg-mp-orange text-white font-semibold rounded-full hover:bg-mp-orange-dark transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
