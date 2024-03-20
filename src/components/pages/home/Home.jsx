// import Button from "../../structure-components/common/Button";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import OurDifferencesSection from "./OurDifferencesSection";
import SubscribeSection from "./SubscribeSection";

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