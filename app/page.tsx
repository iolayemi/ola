import { TerminalHero } from '@/components/TerminalHero';
import { Skills } from '@/components/Skills';
// Commented out ProjectsCarousel as requested - to be added in the future
// import { ProjectsCarousel } from '@/components/ProjectsCarousel';
import { Companies } from '@/components/Companies';
// Commented out CaseStudies as requested - to be added in the future
// import { CaseStudies } from '@/components/CaseStudies';
import { Testimonials } from '@/components/Testimonials';
import { BlogStrip } from '@/components/BlogStrip';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <TerminalHero />
      <Skills />
      {/* <ProjectsCarousel /> */}
      <Companies />
      {/* <CaseStudies /> */}
      <Testimonials />
      <BlogStrip />
      <Contact />
    </main>
  );
}
