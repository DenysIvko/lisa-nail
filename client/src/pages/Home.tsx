import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-white text-lisa-black">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
