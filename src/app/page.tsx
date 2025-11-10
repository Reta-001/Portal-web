import Header from './components/Header';
import Hero from './components/Hero';
import ServiciosSection from './components/ServiciosSection';
import CortesSection from './components/CortesSection';
import NosotrosSection from './components/NosotrosSection';
import ReservasSection from './components/ReservasSection';
import ContactoSection from './components/ContactoSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1c1b1b]">
      <Header />
      <Hero />
      <ServiciosSection />
      <CortesSection />
      <NosotrosSection />
      <ReservasSection />
      <ContactoSection />
      <Footer />
    </main>
  );
}
