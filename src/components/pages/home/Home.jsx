import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import OurDifferencesSection from "./components/OurDifferencesSection";
import SubscribeSection from "./components/SubscribeSection";

import "./home.scss"


function Home() {
    
    return(
        <div className="page home-page">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <OurDifferencesSection />
            <SubscribeSection />
        </div>
    )
};

export default Home;