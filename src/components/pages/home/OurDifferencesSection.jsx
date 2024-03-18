import {ADVANTAGES} from "../../const";
import Accordion from "../../structure-components/common/Accordion";



function OurDifferencesSection() {
    const {section_name, title, advantages} = ADVANTAGES[0];
    
    return(
        <div className="section section--advantages">
            <div className="container">
                <div className="section__title-wrapper">
                    <h1 className="section__name">{section_name}</h1>
                    <h2 className="title section__title">{title}</h2>
                </div>
                <div className="section__content">
                    <Accordion className="our-difference" dataInfo={advantages} />
                </div>

            </div>

        </div>

    );
}

export default OurDifferencesSection;