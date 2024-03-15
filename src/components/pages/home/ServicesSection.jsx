import {SERVICES} from "../../const";
import PointsList from "../../structure-components/PointsList";

import './_services_section.scss';

function ServicesSection() {
    const {section_name, title, description, services_list} = SERVICES[0];
   
    return(
        <div className="section section--services services">
            <div className="container">
                <div className="services__intro">
                    <div className="section__title-wrapper services__title-wrapper">
                        <h1 className="section__name">{section_name}</h1>
                        <h2 className="title section__title">{title}</h2>
                    </div>
                    <p className="section__description services__description">{description}</p>
                </div>
                <div className="services__wrapper">
                    <PointsList className="services" itemList={services_list}/>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;