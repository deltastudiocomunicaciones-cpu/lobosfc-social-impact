import OfficialAllies from "@/sections/OfficialAllies";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Manifesto from "@/sections/Manifesto";
import Impact from "@/sections/Impact";
import Programs from "@/sections/Programs";
import Transparency from "@/sections/Transparency";
import Donations from "@/sections/Donations";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Manifesto />
      <Impact />
      <Programs />
      <Transparency />
      <Donations />
      <OfficialAllies />
      <Footer />
    </main>
  );
}