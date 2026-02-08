import { Navbar } from "@/components/Navbar";
import { HeroSequence } from "@/components/HeroSequence";
import { IntroSection } from "@/components/IntroSection";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSequence />
      <IntroSection />
      <Services />
      <Gallery />
      <ContactForm />
      <Footer />
    </main>
  );
}
