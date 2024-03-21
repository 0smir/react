import {SERVICES} from "../../const";
import PointsList from "../../structure-components/PointsList";
import SectionTitle from "../../structure-components/common/SectionTitle";

import './_services_section.scss';

function ServicesSection() {
    const {section_name, title, description, services_list} = SERVICES[0];
   
    return(
        <div className="section section--services services">
            <div className="container">
                <div className="services__intro">
                    <SectionTitle className="services" section_name={section_name} title={title}/>

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