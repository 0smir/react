import { useState } from "react";
import Button from "./Button";

import "../../../styles/_accordion.scss";

function Accordion(props) {
    const {id, title, description, className} = props,
            [isExpanded, setIsExpanded] = useState(false);

    function ShowContent(id) {
    //    let targetCollapse = document.getElementById(`collapse-${id}`);
        console.log(id);
        setIsExpanded(() => !isExpanded);
    }
    
    return (
        <div className="accordion">
            <div className={`accordion-item ${className}__accordion-item`}>
                <h2 className={`accordion-header ${className}__accordion-header`} id={`heading-${id}`}>
                    <Button hendleBtnClick={() => ShowContent(id)} className={`accordion-button ${className}__accordion-button`} aria-expanded={isExpanded} aria-controls={`collapse-${id}`}>
                        <span>{title}</span> 
                        <span className={`accordion-arrow ${(isExpanded) ? 'expand_less' : ''}`}>&rsaquo;</span>
                    </Button>
                </h2>
            </div>
            <div id={`collapse-${id}`} className={`accordion-collapse ${className}__accordion-collapse collapse ${(isExpanded) ? 'show' : ''}`} aria-labelledby={`heading-${id}`}>
                <div className={`accordion-body ${className}__accordion-body`}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Accordion;