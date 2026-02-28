import Hero from "@/components/Hero";
import BrandSection from "@/components/BrandSection";
import Projects from "@/components/Projects";
import DesignApproach from "@/components/DesignApproach";
import Testimonials from "@/components/Testimonials";
import PreFooter from "@/components/PreFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BrandSection />
      <Projects />
      <DesignApproach />
      <PreFooter />
      <Testimonials />
    </main>
  );
}
