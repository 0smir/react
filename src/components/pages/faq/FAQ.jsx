import {API_FAQ} from "../../faq_const";

import PageTitle from "../../structure-components/common/PageTitle";
import SectionTitle from "../../structure-components/common/SectionTitle";
import SubscribeForm from "../../structure-components/common/SubscribeForm";
import Accordion from "../../structure-components/common/Accordion";
import Button from "../../structure-components/common/Button";

import "./faq.scss";
import { useState } from "react";

function FAQ() {
    const faqList = API_FAQ;
    const categories = ["all", ...new Set(faqList.map((item) => item.category))];
    const [questionsList, setQuestionsList] = useState(faqList);
    const [activeCategory, setActiveCategory] = useState('all');
        

    function filterQuestions(category) {
        setActiveCategory(category);
        const newQuestionsList = faqList.filter((item) => item.category === category); 
       
        if(category === "all"){
            setQuestionsList(faqList);
            return;
        }
        setQuestionsList(newQuestionsList);
    }
    return (
        <div className="page faq-page">
            <div className="container faq-container">
                <PageTitle text={'FAQ'}/>
                <div className="page__content-wrapper faq-page__content-wrapper">
                    <SectionTitle 
                            className="faq" 
                            section_name="FAQ" 
                            title="Frequently Asked Questions"
                            description="At VRNas, we want to make sure that you have all the information you need to make informed decisions about our VR services. Here are some of the most common questions we receive:"
                    />
                    <div className="faq__filter-wrapper">
                        {categories.length && (categories.map((item) =>{
                            return (
                                    <Button className={`btn btn--outline faq__btn-filter ${activeCategory === item ? 'active' : ''}`} 
                                            key={item} 
                                            hendleBtnClick={()=>filterQuestions(item)}
                                    > 
                                            {item}
                                    </Button>
                                )
                        }))}
                    </div>
                    <div className="faq__accordion-wrapper">
                        <Accordion className="faq" dataInfo={questionsList} activeItemId="1"/>
                    </div>
                </div>
                <SubscribeForm />
            </div>
        </div>
    )
}

export default FAQ;