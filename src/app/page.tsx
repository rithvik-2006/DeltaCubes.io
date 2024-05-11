import Image from "next/image";
import Navbar from "./nav-bar/page";
import Hero from "./hero-section/page";
import AboutUs from "./about/page";
import Services from "./services/page";
import Workflow from "./workflow/page";
import Carrer from "./carrers/page";
import Footer from "./footer/page";
export default function Home() {
  return (
    <div className="text-white">
<Navbar/>
<Hero/>
<AboutUs/>
<Services/>
<Workflow/>
<Carrer/>
<Footer/>
    </div>
  );
}
