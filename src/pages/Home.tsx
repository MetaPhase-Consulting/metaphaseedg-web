import { Link } from 'react-router-dom';
import { Shield, Cloud, BarChart3, Users, Monitor, Lightbulb } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-white">
        <div className="section-container w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-base text-[#16163F] leading-relaxed max-w-xl">
                MetaPhase EDG is a solution integrator – bringing cutting-edge technology and
                strategic management consulting to provide holistic solutions for the Federal mission.
                We aim to be exceptionally easy to access and provide effortless collaboration.
              </p>
            </div>
            <div className="animate-fade-in-up">
              <img
                src="/images/jv-icons.png"
                alt="MetaPhase EDG Joint Venture Illustration"
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="section-container">
          <h2 className="text-3xl font-semibold text-[#16163F] text-center mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-[#16163F] text-center max-w-3xl mx-auto mb-12">
            We offer a wide range of solutions to help government agencies achieve their goals,
            from IT modernization and cybersecurity to strategic planning and program management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Lightbulb size={40} />}
              title="Advisory Solutions"
              description="Expert advisory services that help federal leaders navigate complex challenges, launch critical initiatives, and drive enterprise transformation."
            />
            <ServiceCard
              icon={<Monitor size={40} />}
              title="Digital Platform Modernization"
              description="Modernize legacy systems and implement scalable digital platforms tailored to federal mission needs."
            />
            <ServiceCard
              icon={<BarChart3 size={40} />}
              title="Data Analytics"
              description="Transform raw data into actionable insights that inform better decision-making across your organization."
            />
            <ServiceCard
              icon={<Cloud size={40} />}
              title="Cloud Engineering"
              description="Design, deploy, and manage cloud environments that are secure, scalable, and built for mission needs."
            />
            <ServiceCard
              icon={<Shield size={40} />}
              title="Cybersecurity"
              description="Embed cybersecurity early and often—from risk assessments and FedRAMP readiness to zero trust architecture."
            />
            <ServiceCard
              icon={<Users size={40} />}
              title="Experience Design"
              description="Elevate the user experience by designing inclusive, intuitive, and outcome-driven digital services."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-semibold text-[#16163F] mb-6">
            Ready to Transform Your Mission?
          </h2>
          <p className="text-lg text-[#16163F] max-w-2xl mx-auto mb-8">
            At MetaPhase EDG, our focus is on providing government agencies with innovative
            solutions to meet their unique needs.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#36A6ED] text-white text-lg font-semibold rounded-full hover:bg-[#2B8AC7] transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="text-[#36A6ED] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#16163F] mb-3">{title}</h3>
      <p className="text-base text-[#16163F] leading-relaxed">{description}</p>
    </div>
  );
}
