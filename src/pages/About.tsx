export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h1 className="text-[22px] font-semibold text-[#16163F] mb-2">
            Problem Solvers for a Digital World
          </h1>
          <h2 className="text-[56px] font-semibold text-[#16163F] leading-tight mb-8">
            About Us
          </h2>
        </div>
      </section>

      {/* Joint Venture Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-[#16163F] mb-6">
                Who We Are
              </h3>
              <p className="text-base text-[#16163F] leading-relaxed mb-6">
                MetaPhase EDG is an SBA certified 8(a), EDWOSB, WOSB, Small Business
                Joint Venture comprised of{' '}
                <strong>MetaPhase Consulting, LLC</strong> and{' '}
                <strong>SharpEDG, LLC</strong>.
              </p>
              <p className="text-base text-[#16163F] leading-relaxed mb-6">
                MetaPhase Consulting is a team of Federally-focused digital transformation
                experts who apply proven people, process, technology, and data methodologies
                to solve problems and get results for their customers.
              </p>
              <p className="text-base text-[#16163F] leading-relaxed mb-6">
                Their enterprise combines cutting-edge technology and strategic management
                consulting for government entities, with a team that includes former Federal
                Senior Executives, expert technologists, and industry-recognized management
                consultants.
              </p>
            </div>
            <div>
              <img
                src="/images/jv-icons.png"
                alt="MetaPhase EDG Joint Venture"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SharpEDG Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-[#16163F] mb-6">
                SharpEDG
              </h3>
              <p className="text-base text-[#16163F] leading-relaxed mb-6">
                SharpEDG was born to solve the challenges and frustrations of working
                with Government. As an 8(a), EDWOSB, and SWAM certified firm, SharpEDG
                brings specialized expertise in government contracting and technology
                solutions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#16163F] mb-6">
                MetaPhase Consulting
              </h3>
              <p className="text-base text-[#16163F] leading-relaxed mb-6">
                MetaPhase Consulting has a strong track record of supporting over 20
                federal agencies. The team of experts works closely with clients to
                understand their challenges and deliver tailored solutions that drive
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h3 className="text-2xl font-semibold text-[#16163F] text-center mb-8">
            Certifications & Set-Asides
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'SBA 8(a)',
              'EDWOSB',
              'WOSB',
              'Small Business',
            ].map((cert) => (
              <div
                key={cert}
                className="bg-[#F5F5F5] rounded-lg px-8 py-4 text-center"
              >
                <span className="text-lg font-semibold text-[#16163F]">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="section-container">
          <h3 className="text-2xl font-semibold text-[#16163F] text-center mb-8">
            Our Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'IT Modernization',
              'Cybersecurity',
              'Strategic Planning',
              'Program Management',
              'Data Analytics',
              'Cloud Engineering',
              'Digital Transformation',
              'Change Management',
              'Experience Design',
            ].map((capability) => (
              <div
                key={capability}
                className="bg-white rounded-lg px-6 py-4 text-center shadow-sm"
              >
                <span className="text-base text-[#16163F]">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
