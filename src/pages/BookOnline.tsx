import { Calendar, Clock, User } from 'lucide-react';

export default function BookOnline() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h1 className="text-[22px] font-semibold text-[#16163F] mb-2">
            Problem Solvers for a Digital World
          </h1>
          <h2 className="text-[56px] font-semibold text-[#16163F] leading-tight mb-8">
            Book Online
          </h2>
          <p className="text-lg font-light text-[#16163F] mb-12">
            Schedule a consultation with our team to discuss how MetaPhase EDG can
            help your agency achieve its mission goals.
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <BookingCard
              icon={<User size={36} />}
              title="Introduction Call"
              duration="30 minutes"
              description="Get to know MetaPhase EDG and learn how we can support your mission."
            />
            <BookingCard
              icon={<Calendar size={36} />}
              title="Capabilities Briefing"
              duration="45 minutes"
              description="A detailed overview of our solutions, past performance, and approach."
            />
            <BookingCard
              icon={<Clock size={36} />}
              title="Strategy Session"
              duration="60 minutes"
              description="Deep dive into your specific challenges and explore tailored solutions."
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-[#16163F] mb-4">
              To schedule a meeting, please contact us directly:
            </p>
            <a
              href="mailto:info@metaphaseedg.com?subject=Meeting Request"
              className="inline-block px-10 py-4 bg-[#36A6ED] text-white text-lg font-semibold rounded-full hover:bg-[#2B8AC7] transition-colors duration-300"
            >
              Email Us to Schedule
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function BookingCard({
  icon,
  title,
  duration,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  duration: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm text-center">
      <div className="text-[#36A6ED] mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-[#16163F] mb-2">{title}</h3>
      <p className="text-sm text-[#9E3FFD] font-medium mb-3">{duration}</p>
      <p className="text-base text-[#16163F] leading-relaxed">{description}</p>
    </div>
  );
}
