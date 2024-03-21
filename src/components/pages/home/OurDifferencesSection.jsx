import {ADVANTAGES} from "../../const";
import Accordion from "../../structure-components/common/Accordion";
import SectionBanner from "../../structure-components/common/SectionBanner";
import SectionTitle from "../../structure-components/common/SectionTitle";
import main_banner from '../../../images/vr_danser.png';
import banner_small from '../../../images/vr_glasses.jpg';
import "./_our_difference.scss";

function OurDifferencesSection() {
    const {section_name, title, advantages} = ADVANTAGES[0];
    
    return(
        <div className="section section--our-difference our-difference">
            <div className="container">
                <div className="our-difference__content-wrapper">
                    <div className="our-difference__content">
                    <SectionTitle className="our-difference" section_name={section_name} title={title} />
                        <Accordion className="our-difference" dataInfo={advantages} />
                    </div>
                    <SectionBanner main_banner={main_banner} main_banner_alt_text={section_name}  small_banner={banner_small} className="our-difference" />
                </div>
            </div>
        </div>
    );
}

export default OurDifferencesSection;