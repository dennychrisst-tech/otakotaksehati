import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Menu from "./components/Menu";
import Hampers from "./components/Hampers";
import Testimonials from "./components/Testimonials";
import Ordering from "./components/Ordering";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Benefits />
        <Menu />
        <Hampers />
        <Testimonials />
        <Ordering />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
