import Navigation from '@/components/Navigation';
import WorkSection from '@/components/WorkSection';
import LeadershipSection from '@/components/LeadershipSection';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main className="md:ml-24 lg:ml-32">
        <WorkSection />
        <LeadershipSection />
        <SkillsSection />
        <Footer />
      </main>
    </>
  );
}
