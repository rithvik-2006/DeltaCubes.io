import Image from "next/image";
import Navbar from "./(components)/nav-bar/page";
import Hero from "./(components)/hero-section/page";
import AboutUs from "./(components)/about/page";
import Services from "./(components)/services/page";
import Workflow from "./(components)/workflow/page";
import Carrer from "./(components)/carrers/page";
import Footer from "./(components)/footer/page";
export default function Home() {
  return (
    <div className="text-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Workflow />
      <Carrer />
      <Footer />
    </div>
  );
}
