import  {Link} from 'react-router-dom';
import {API_FAQ} from "../../../faq_const";
import BaseSection from "../../../structure-components/sections/BaseSection";
import Accordion from "../../../structure-components/common/Accordion";

function AboutUsFAQSection() {
    const section_class_name = "about";
    const questionsCropped = API_FAQ.splice(0, 5);
    return(
        <>
            <BaseSection className={`${section_class_name}-faq`} 
                        section_name="FAQ" 
                        title="Frequently Asked Questions"
                        title_description="At VRNas, we want to make sure that you have all the information you need to make informed decisions about our VR services. Here are some of the most common questions we receive:"
            >
                <div className="about__faq-wrapper">
                    <Accordion className={`${section_class_name}__faq`}
                                dataInfo={questionsCropped}
                                activeItemId="1"
                    />
                    <div className="about__faq-link-wrapper">
                        <Link className={`btn-link btn-link--filled ${section_class_name}-faq__link`} 
                            to="/faq" 
                            aria-label="link: go to FAQ page"
                        > See All </Link>
                    </div>
                </div>


            </BaseSection>
        </>
    )
}

export default AboutUsFAQSection;