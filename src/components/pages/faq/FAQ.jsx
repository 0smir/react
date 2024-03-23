import {API_FAQ} from "../../faq_const";

import PageTitle from "../../structure-components/common/PageTitle";
import SectionTitle from "../../structure-components/common/SectionTitle";
import SubscribeForm from "../../structure-components/common/SubscribeForm";
import Accordion from "../../structure-components/common/Accordion";


// import "./faq.scss";

function FAQ() {
    
    const FAQ_LIST = API_FAQ;
    const categories = ['all', ...new Set(FAQ_LIST.map((item) => item.category))];
    console.log(categories);
    return (
        <div className="page faq-page">
            <div className="container faq-container">
                <PageTitle text={'FAQ'}/>
                <div className="page__content-wrapper">
                    <SectionTitle className="faq" section_name="FAQ" title="Frequently Asked Questions"/>
                    <p className="description">
                        At VRNas, we want to make sure that you have all the information you need to make informed decisions about our VR services. Here are some of the most common questions we receive:
                    </p>
                    <Accordion className="faq" dataInfo={FAQ_LIST}/>
                </div>
                <SubscribeForm />
            </div>
        </div>
    )
}

export default FAQ;