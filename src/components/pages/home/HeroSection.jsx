import Button from '../../structure-components/common/Button';
import PointsList from "../../structure-components/PointsList";
import ClientList from '../../structure-components/ClientList';
import vr_user_small from '../../../images/vr_user_small.jpg';
import {HOME_MAIN} from "../../const";

import './_hero_section.scss';



function HeroSection() {
    const {title, description, clients_info, banner, advantages} = HOME_MAIN[0];
            

    return(
        <div className="section section--hero hero">
            <div className="container">
                <div className="content section__content light-box">
                    <div className="hero__intro">
                        <h1 className="title section__title">{title}</h1>
                        <p className="description section__description hero__description">{description}</p>
                        <Button className="btn btn--filled show-more">Discover More</Button>
                        <ClientList {...clients_info[0]}/>
                    </div>
                    <div className="banner hero__banner-wrapper">
                        <img src={banner} alt={title} className="image-fluid hero__banner" />
                    </div>  
                </div>
                <div className="hero-advantages__wrapper">
                    <PointsList className="advantages" itemList={advantages}/>
                </div>
            </div>
        </div>
    );

}

export default HeroSection;