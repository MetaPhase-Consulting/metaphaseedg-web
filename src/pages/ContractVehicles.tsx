import { Link } from 'react-router-dom';
import { FileText, ShieldCheck, Lightbulb, Award } from 'lucide-react';
import Seo from '../components/Seo';
import { faqLd, breadcrumbLd } from '../lib/jsonld';

type Vehicle = {
  name: string;
  icon: typeof FileText;
  details: { label: string; value: string }[];
  note?: string;
};

const vehicles: Vehicle[] = [
  {
    name: 'GSA Multiple Award Schedule (MAS)',
    icon: FileText,
    details: [
      { label: 'Contract Number', value: '47QTCA26D002G' },
      { label: 'Period of Performance', value: '12/18/2025 – 12/17/2030' },
      { label: 'SINs', value: '541611, 54151S' },
    ],
  },
  {
    name: 'MetaPhase SBIR',
    icon: Lightbulb,
    details: [
      { label: 'Authority', value: 'SBIR Phase III Direct Award' },
      { label: 'Originating Agency', value: 'U.S. Air Force' },
      { label: 'Topic', value: 'AF98-124' },
    ],
    note: 'Accessible through MetaPhase’s SBIR Phase III eligibility — a streamlined path to sole-source award.',
  },
  {
    name: 'Top Secret Facility Clearance',
    icon: ShieldCheck,
    details: [{ label: 'Facility Clearance Level', value: 'Top Secret (TS)' }],
    note: 'Cleared to support classified federal missions up to the Top Secret level.',
  },
];

export default function ContractVehicles() {
  return (
    <div>
      <Seo
        title="Contract Vehicles"
        description="Put MetaPhase EDG on contract: GSA MAS 47QTCA26D002G (SINs 541611, 54151S), MetaPhase SBIR Phase III, Top Secret Facility Clearance, and 8(a)/EDWOSB/WOSB set-asides."
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
              q: 'Does MetaPhase EDG have a facility clearance?',
              a: 'Yes. MetaPhase EDG holds a Top Secret (TS) Facility Clearance and can support classified federal missions.',
            },
            {
              q: 'Can MetaPhase EDG receive sole-source awards?',
              a: 'Yes. As an SBA 8(a) certified Small Business Joint Venture and through MetaPhase SBIR Phase III authority, MetaPhase EDG is eligible for streamlined and sole-source awards.',
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
            Easy ways to put MetaPhase EDG on contract
          </h2>
          <p className="text-base text-mp-ink leading-relaxed max-w-3xl mx-auto">
            MetaPhase EDG is an SBA-certified 8(a), EDWOSB, and WOSB Small Business Joint
            Venture. Below are the vehicles and credentials your contracting team can use to
            access our technology and management consulting services.
          </p>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="h-[2px] bg-gradient-to-r from-mp-orange to-mp-edg-blue" />

      {/* Set-aside designations */}
      <section className="py-10 bg-white">
        <div className="section-container">
          <h2 className="sr-only">Set-aside designations</h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {['SBA 8(a)', 'EDWOSB', 'WOSB', 'Small Business Joint Venture'].map((cert) => (
              <li
                key={cert}
                className="flex items-center gap-2 rounded-full border border-mp-edg-blue/30 bg-mp-edg-blue/5 px-4 py-2 text-sm font-semibold text-mp-ink"
              >
                <Award size={16} className="text-mp-orange" aria-hidden="true" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-12 bg-[#F5F5F5]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.name}
                  className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-mp-orange/10">
                    <Icon size={26} className="text-mp-orange" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-mp-ink mb-4">{v.name}</h3>
                  <dl className="space-y-2 text-sm">
                    {v.details.map((d) => (
                      <div key={d.label}>
                        <dt className="font-semibold text-mp-edg-blue">{d.label}</dt>
                        <dd className="text-mp-ink">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                  {v.note && (
                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">{v.note}</p>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-base text-mp-ink">
            MetaPhase EDG can also leverage MetaPhase&rsquo;s broader portfolio of GWAC, IDIQ,
            BPA, and agency-specific vehicles.{' '}
            <a
              href="https://metaphase.tech/contract-vehicles"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-mp-edg-blue hover:text-mp-orange underline"
            >
              View the full list
            </a>
            .
          </p>
        </div>
      </section>

      {/* NAICS */}
      <section className="py-12 bg-white">
        <div className="section-container text-center">
          <h2 className="text-2xl font-semibold text-mp-ink mb-6">NAICS Codes</h2>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg text-mp-ink">
            {[
              '541611', '541519', '541512', '541511', '541880',
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
