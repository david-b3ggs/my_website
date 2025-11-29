import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="md:ml-24 lg:ml-32">
        <AboutSection />
        <Footer />
      </main>
    </>
  );
}
