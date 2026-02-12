import { Linkedin } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="section-container text-center">
          <h1 className="text-[56px] font-semibold text-[#16163F] leading-tight mb-2">
            About Us
          </h1>
          <h2 className="text-2xl font-semibold text-[#9E3FFD] mb-8">
            Government Solutions Reimagined
          </h2>
          <p className="text-base text-[#16163F] leading-relaxed max-w-4xl mx-auto">
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
      <div className="h-[2px] bg-gradient-to-r from-[#36A6ED] to-[#9E3FFD]" />

      {/* Meet The Team */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-semibold text-[#9E3FFD] text-center mb-12">
            Meet The Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <TeamMember
              image="/images/sophia-edwards.png"
              name="Sophia Edwards"
              title="Founder & CEO, SharpEDG"
            />
            <TeamMember
              image="/images/fred-costa.jpg"
              name="Fred Costa"
              title="CEO & President, MetaPhase Consulting"
            />
            <TeamMember
              image="/images/brett-mclaren.jpg"
              name="Brett Mclaren"
              title="Chief Strategy Officer, MetaPhase Consulting"
            />
          </div>
        </div>
      </section>

      {/* Certification Statement */}
      <section className="py-12 bg-white">
        <div className="section-container text-center max-w-3xl mx-auto">
          <p className="text-lg text-[#16163F] leading-relaxed">
            MetaPhase EDG is an SBA certified 8(a), EDWOSB, WOSB, Small Business Joint
            Venture comprised of MetaPhase Consulting, LLC and SharpEDG, LLC.
          </p>
        </div>
      </section>

      {/* Company Descriptions */}
      <section className="py-12 bg-[#F5F5F5]">
        <div className="section-container space-y-16">
          {/* MetaPhase Consulting — logo left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/images/metaphase-logo.png"
                alt="MetaPhase Consulting logo"
                className="max-h-40 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#16163F] mb-4">
                MetaPhase Consulting
              </h3>
              <p className="text-base text-[#16163F] leading-relaxed mb-6">
                MetaPhase Consulting is a team of Federally-focused digital transformation
                experts. We apply proven people, process, technology, and data methodologies
                to solve problems and get results for our customers.
              </p>
              <a
                href="https://metaphaseconsulting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#9E3FFD] text-white font-semibold rounded-full hover:bg-[#8332D4] transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* SharpEDG — text left, logo right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#16163F] mb-4">
                SharpEDG
              </h3>
              <p className="text-base text-[#16163F] leading-relaxed mb-6">
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
                className="inline-block px-8 py-3 bg-[#9E3FFD] text-white font-semibold rounded-full hover:bg-[#8332D4] transition-colors duration-300"
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
        alt={name}
        className="w-72 h-72 object-cover rounded mx-auto mb-4"
      />
      <div className="flex items-center justify-center gap-2">
        <h3 className="text-lg font-semibold text-[#16163F]">{name}</h3>
        <Linkedin size={18} className="text-[#0077B5]" />
      </div>
      <p className="text-sm text-[#16163F]">{title}</p>
    </div>
  );
}
