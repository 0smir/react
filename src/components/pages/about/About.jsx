// import CreatePostForm from '../../structure-components/PostCreateForm';

import PageTitle from "../../structure-components/common/PageTitle";
import SectionTitle from "../../structure-components/common/SectionTitle";
import BaseSection from "../../structure-components/sections/BaseSection";
import PointsList from "../../structure-components/PointsList";
import OurDifferencesSection from '../home/components/OurDifferencesSection';
import OurTeamSection from "./sections/OurTeamSection";
import AboutUsFAQSection from "./sections/AboutUsFAQSection";
import SubscribeForm from "../../structure-components/common/SubscribeForm";
import main_banner from '../../../images/vr_touch.png';
import banner_small from '../../../images/vr_user_small.jpg';

import {HOME_MAIN} from "../../const";

import "./about_page.scss";

function About() {
    const section_name = "About Us";
    const section_title = "Bringing Your Vision to Life: Learn About VRNas";
    const section_class_name = "about";
    const {advantages} = HOME_MAIN[0];

    return(
        <div className="page about-page about">
            <div className="container">
                <PageTitle text={'About'} />
                <section className="section about-section"> 
                    <BaseSection className={section_class_name}
                             section_name={section_name}
                              title={section_title}
                              main_banner={main_banner}
                              small_banner={banner_small}
                    >
                        <div className="section__description">
                            <p className="section__description-text">
                                RNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.
                            </p>
                            <p className="section__description-text">
                                VOur team consists of experienced VR developers, designers, and technicians who are passionate about VR and dedicated to delivering the highest quality work. We use the latest VR hardware and software to create immersive, interactive experiences that are tailored to your specific needs.
                                From initial consultation to final delivery, we are committed to providing exceptional customer service. Our goal is to ensure that you are completely satisfied with every aspect of your VR experience.
                            </p>
                        </div>
                    </BaseSection>
                </section>
                <section className="section about-section about-advantages">
                    <BaseSection className={`${section_class_name}__advantages `} 
                                section_name="WHY CHOOSE US" 
                                title="Empowering Your Virtual Reality Experience"
                        >
                        <PointsList className="advantages" itemList={advantages}/>
                    </BaseSection>
                </section>

                <section className="section about-section about-our-difference">
                    <OurDifferencesSection />
                </section>
                <section className="section about-section about-our-team">
                    <OurTeamSection />
                </section>
                <section className="section about-section about-faq">
                    <AboutUsFAQSection />
                </section>

                <section className="section about-section">
                    <SubscribeForm />
                </section>
         
                {/* <CreatePostForm className="about" itemList={advantages} /> */}
            </div>
        </div>
    );
}

export default About