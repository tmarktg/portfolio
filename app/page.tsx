import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { InterestsSection } from "@/components/sections/InterestsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <InterestsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
