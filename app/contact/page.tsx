import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="md:ml-24 lg:ml-32">
        <section id="contact" className="min-h-screen px-6 md:px-24 py-24 bg-secondary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Contact
            </h2>
            <p className="text-xl text-secondary mb-12">
              Let's connect and discuss opportunities, collaborations, or just talk tech.
            </p>
            <div className="space-y-6">
              <a
                href="mailto:david.beggs96@gmail.com"
                className="inline-block text-2xl font-display font-bold text-tertiary hover:underline transition-smooth"
              >
                david.beggs96@gmail.com
              </a>
              <div className="flex gap-8 justify-center pt-8">
                <a
                  href="https://www.linkedin.com/in/david-w-beggs-v-337004180/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-accent hover:text-tertiary transition-smooth font-bold"
                >
                  LinkedIn
                </a>
                {/* <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-accent hover:text-tertiary transition-smooth font-bold"
                >
                  GitHub
                </a> */}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
