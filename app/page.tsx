import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UVP from "@/components/UVP";
import Workflow from "@/components/Workflow";
import Benchmarking from "@/components/Benchmarking";
import Challenge from "@/components/Challenge";
import Demo from "@/components/Demo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <UVP />
      <Workflow />
      <Benchmarking />
      <Challenge />
      <Demo />
      <CTA />
      <Footer />
    </main>
  );
}
