import LandingMenu from './LandingMenu';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-display text-tertiary mb-4">
            David W. Beggs V
          </h2>
          <p className="text-base md:text-lg text-secondary max-w-2xl">
            Placeholder text about David. This section can include a brief introduction,
            current role, or a compelling statement about your professional focus and expertise.
          </p>
        </div>

        <div>
          <LandingMenu />
        </div>
      </div>
    </section>
  );
}
