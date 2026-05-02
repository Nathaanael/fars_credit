import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Comparison from "@/components/Comparison";
import Target from "@/components/Target";
import Demo from "@/components/Demo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <Comparison />
      <Target />
      <Demo />
      <CTA />
      <Footer />
    </main>
  );
}
