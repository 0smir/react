import {ADVANTAGES} from "../../const";
import Accordion from "../../structure-components/common/Accordion";
import SectionBanner from "../../structure-components/common/SectionBanner";
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
                        <div className="section__title-wrapper our-difference__title-wrapper">
                            <h1 className="section__name">{section_name}</h1>
                            <h2 className="title section__title">{title}</h2>
                        </div>
                        <Accordion className="our-difference" dataInfo={advantages} />
                    </div>
                    <SectionBanner main_banner={main_banner} main_banner_alt_text={section_name}  small_banner={banner_small} className="our-difference" />
                </div>
            </div>
        </div>
    );
}

export default OurDifferencesSection;