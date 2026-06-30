import Seo from '../components/Seo';
import { faqLd } from '../lib/jsonld';

export default function Home() {
  return (
    <div>
      <Seo
        title="MetaPhase EDG | Solutions Integrator"
        description="MetaPhase EDG is an SBA-certified 8(a), EDWOSB, WOSB Small Business Joint Venture delivering cutting-edge technology and strategic management consulting for the Federal mission."
        path="/"
        jsonLd={[
          faqLd([
            {
              q: 'What is MetaPhase EDG?',
              a: 'MetaPhase EDG is a Solutions Integrator and SBA-certified 8(a), EDWOSB, WOSB Small Business Joint Venture between MetaPhase Consulting, LLC and SharpEDG, LLC, providing technology and management consulting solutions for the U.S. Federal government.',
            },
            {
              q: 'What certifications does MetaPhase EDG hold?',
              a: 'MetaPhase EDG is an SBA-certified 8(a), Economically Disadvantaged Woman-Owned Small Business (EDWOSB), and Woman-Owned Small Business (WOSB) Joint Venture, and holds a Top Secret Facility Clearance.',
            },
            {
              q: 'How can agencies contract with MetaPhase EDG?',
              a: 'Agencies can reach MetaPhase EDG through its GSA Multiple Award Schedule (contract 47QTCA26D002G, SINs 541611 and 54151S), NASA SEWP VI GWAC (contract 80TECH26D1903), MetaPhase SBIR Phase III authority, and as an 8(a) sole-source eligible joint venture.',
            },
          ]),
        ]}
      />
      {/* Hero text section */}
      <section className="py-12 bg-white">
        <div className="section-container text-center max-w-3xl mx-auto">
          <p className="text-base text-[#16163F] leading-relaxed">
            MetaPhase EDG is a solution integrator - bringing cutting-edge technology and
            strategic management consulting to provide holistic solutions for the Federal mission.
            We aim to be exceptionally easy to access and provide effortless collaboration.
          </p>
        </div>
      </section>

      {/* Full-width background image */}
      <section className="relative">
        <img
          src="/images/hero-bg.jpg"
          alt="Team collaboration in a modern office"
          className="w-full h-[384px] object-cover"
        />
      </section>

      {/* Three column section with images */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Focus */}
            <div className="text-center">
              <img
                src="/images/home-img1.jpg"
                alt="Consulting professionals"
                className="w-full h-56 object-cover rounded mb-6"
              />
              <h3 className="text-xl font-semibold text-[#16163F] mb-3">Our Focus</h3>
              <p className="text-base text-[#16163F] leading-relaxed">
                At MetaPhase EDG, our focus is on providing government agencies with innovative
                solutions to meet their unique needs. Our team of experts works closely with our
                clients to understand their challenges and deliver tailored solutions that drive success.
              </p>
            </div>

            {/* Our Leadership */}
            <div className="text-center">
              <img
                src="/images/home-img2.jpg"
                alt="Business leadership meeting"
                className="w-full h-56 object-cover rounded mb-6"
              />
              <h3 className="text-xl font-semibold text-[#16163F] mb-3">Our Leadership</h3>
              <p className="text-base text-[#16163F] leading-relaxed">
                Our team is comprised of experienced consultants with a deep understanding of
                government operations and the latest technological advancements. We pride ourselves
                on delivering high-quality solutions and building lasting relationships with our clients.
              </p>
            </div>

            {/* Our Solutions */}
            <div className="text-center">
              <img
                src="/images/home-img3.jpg"
                alt="Technology solutions"
                className="w-full h-56 object-cover rounded mb-6"
              />
              <h3 className="text-xl font-semibold text-[#16163F] mb-3">Our Solutions</h3>
              <p className="text-base text-[#16163F] leading-relaxed">
                We offer a wide range of solutions to help government agencies achieve their goals,
                from IT modernization and cybersecurity to strategic planning and program management.
                Our experts work closely with clients to design and implement solutions that address
                their unique challenges and drive success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
