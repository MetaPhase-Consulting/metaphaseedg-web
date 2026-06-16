import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <div>
      <Seo
        title="Page Not Found"
        description="The page you’re looking for doesn’t exist."
        path="/404"
        noindex
      />
      <section className="py-24 bg-white">
        <div className="section-container text-center max-w-2xl mx-auto">
          <p className="text-[64px] sm:text-[88px] font-semibold leading-none">
            <span className="text-mp-orange">4</span>
            <span className="text-mp-edg-blue">0</span>
            <span className="text-mp-orange">4</span>
          </p>
          <h1 className="mt-4 text-2xl sm:text-3xl font-semibold text-mp-ink">
            Page not found
          </h1>
          <p className="mt-4 text-base text-mp-ink leading-relaxed">
            Sorry, we couldn’t find the page you were looking for. It may have moved,
            or the link may be out of date.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-mp-orange text-white font-semibold rounded-full hover:bg-mp-orange-dark transition-colors duration-300"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border border-mp-edg-blue text-mp-edg-blue font-semibold rounded-full hover:bg-mp-edg-blue hover:text-white transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
