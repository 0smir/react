import {ABOUT} from "../../../const";
import Button from '../../../structure-components/common/Button';
import SectionBanner from "../../../structure-components/common/SectionBanner";
import SectionTitle from "../../../structure-components/common/SectionTitle";

import main_banner from '../../../../images/vr_touch.png';
import banner_small from '../../../../images/vr_user_small.jpg';
import '../styles/_about_section.scss';

function AboutSection() {
    const {section_name, title, description, checkpoints} = ABOUT[0];
    return (
        <div className="section section--about about">
            <div className="container">
                <div className="about__content-wrapper">
                    <SectionBanner main_banner={main_banner} main_banner_alt_text={section_name}  small_banner={banner_small} className="about"/>
                    <div className="about__content">
                        <SectionTitle className="about" section_name={section_name} title={title} />
                        
                        <p className="section__description about__description">{description}</p>
                        <ul className="checpoints__list">
                            {checkpoints.map((item, index) => {
                                    return(
                                        <li key={index} className="checpoints__list-item">{item}</li>
                                    )
                            })} 
                        </ul>
                        <Button className="btn btn--filled">Reade More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;