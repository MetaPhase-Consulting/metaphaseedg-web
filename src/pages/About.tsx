import { Linkedin } from 'lucide-react';
import Seo from '../components/Seo';
import { breadcrumbLd } from '../lib/jsonld';

export default function About() {
  return (
    <div>
      <Seo
        title="About Us"
        description="MetaPhase EDG is a joint venture of MetaPhase, LLC and SharpEDG, LLC — former Federal Senior Executives, expert technologists, and management consultants delivering government solutions."
        path="/about-us"
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about-us' },
        ])}
      />
      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="section-container text-center">
          <h1 className="text-[40px] sm:text-[56px] font-semibold text-mp-ink leading-tight mb-2">
            About Us
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-mp-edg-blue mb-8">
            Government Solutions Reimagined
          </h2>
          <p className="text-base text-mp-ink leading-relaxed max-w-4xl mx-auto">
            At the heart of our enterprise lies a transformative alliance between cutting-edge
            technology and strategic management consulting, catering specifically to the unique
            needs of government entities. Our cooperative endeavor reflects a dedication to
            introducing cutting-edge solutions crafted with precision by incorporating the
            expertise of our team, which comprises former Federal Senior Executives, expert
            technologists, and industry recognized management consultants. We are dedicated to
            pioneering innovative solutions meticulously crafted and rigorously secured for
            governmental operations.
          </p>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="h-[2px] bg-gradient-to-r from-mp-orange to-mp-edg-blue" />

      {/* Meet The Team */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-semibold text-mp-edg-blue text-center mb-12">
            Meet The Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <TeamMember
              image="/images/sophia-edwards.jpg"
              name="Sophia Edwards"
              title="Founder & CEO, SharpEDG"
            />
            <TeamMember
              image="/images/fred-costa.jpg"
              name="Fred Costa"
              title="CEO & President, MetaPhase"
            />
          </div>
        </div>
      </section>

      {/* Certification Statement */}
      <section className="py-12 bg-white">
        <div className="section-container text-center max-w-3xl mx-auto">
          {/* NOTE: "MetaPhase, LLC" per request to drop "Consulting" everywhere; confirm exact legal entity name with the team. */}
          <p className="text-lg text-mp-ink leading-relaxed">
            MetaPhase EDG is an SBA certified 8(a), EDWOSB, WOSB, Small Business Joint
            Venture comprised of MetaPhase, LLC and SharpEDG, LLC.
          </p>
        </div>
      </section>

      {/* Company Descriptions */}
      <section className="py-12 bg-[#F5F5F5]">
        <div className="section-container space-y-16">
          {/* MetaPhase — logo left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/images/metaphase-logo.png"
                alt="MetaPhase logo"
                className="max-h-28 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-mp-ink mb-4">
                MetaPhase
              </h3>
              <p className="text-base text-mp-ink leading-relaxed mb-6">
                MetaPhase is a team of Federally-focused digital transformation
                experts. We apply proven people, process, technology, and data methodologies
                to solve problems and get results for our customers.
              </p>
              <a
                href="https://metaphase.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-mp-orange text-white font-semibold rounded-full hover:bg-mp-orange-dark transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* SharpEDG — text left, logo right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-mp-ink mb-4">
                SharpEDG
              </h3>
              <p className="text-base text-mp-ink leading-relaxed mb-6">
                SharpEDG was born to solve the challenges and frustrations of working with
                Government Consultants observed from 20 years of Federal Service in the
                executive ranks. With easy access as an economically disadvantaged woman-owned
                (EDWOSB) and 8(a) small business - SharpEDG provides program management,
                training, and technology implementation support for numerous Federal Agencies.
              </p>
              <a
                href="https://www.sharpedg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-mp-edg-blue text-white font-semibold rounded-full hover:bg-mp-edg-blue-dark transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/sharpedg-logo.png"
                alt="SharpEDG logo"
                className="max-h-40 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamMember({
  image,
  name,
  title,
}: {
  image: string;
  name: string;
  title: string;
}) {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={`${name}, ${title}`}
        className="w-72 h-72 object-cover object-top rounded mx-auto mb-4"
      />
      <div className="flex items-center justify-center gap-2">
        <h3 className="text-lg font-semibold text-mp-ink">{name}</h3>
        <Linkedin size={18} className="text-[#0077B5]" aria-hidden="true" />
      </div>
      <p className="text-sm text-mp-ink">{title}</p>
    </div>
  );
}
