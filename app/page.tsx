import Hero from './components/Hero/Hero';
import Navbar from './components/Navigation/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  );
}