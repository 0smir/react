import {ABOUT} from "../../const";
import Button from '../../structure-components/common/Button';
import main_banner from '../../../images/vr_touch.png';
import banner_small from '../../../images/vr_user_small.jpg';

function AboutSection() {
    const {section_name, title, description, checkpoints} = ABOUT[0];
    return (
        <div className="section section--about about">
            <div className="container">
                <div className="about__content-wrapper">
                    <div className="section__banner about__banner-wrapper light-box">
                        <img src={main_banner} alt={section_name} className="about__banner"/>
                        <img src={banner_small} alt="VR" className="about__banner about__banner--small"/>
                    </div>
                    <div className="about__content">
                        <h1 className="section__name">{section_name}</h1>
                        <h2 className="title section__title">{title}</h2>
                        <p className="section__description">{description}</p>
                        <ul className="checpoints__list">
                        {checkpoints.map(item => {
                                return(
                                    <li key={item.id} className="checpoints__list-item">{item}</li>
                                )
                        })} 
                        </ul>
                        <Button className="btn">Reade More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;