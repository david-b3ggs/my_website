import Navigation from '@/components/Navigation';
import ResumeSection from '@/components/ResumeSection';
import Footer from '@/components/Footer';

export default function ResumePage() {
  return (
    <>
      <Navigation />
      <main className="md:ml-24 lg:ml-32">
        <ResumeSection />
        <Footer />
      </main>
    </>
  );
}
