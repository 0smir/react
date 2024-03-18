import { useState } from "react";
import Button from "./Button";


function AccordionItem({className, activeID, item, toggleContent}) {
    const {id, title, description} = item;
    const isExpanded = id === activeID;
    
    return(
        
        <>
            <div className={`accordion-item ${className}__accordion-item`}>
                <header className={`accordion-header ${className}__accordion-header`} id={`heading-${id}`}>
                    <Button hendleBtnClick={() => toggleContent(id)} className={`accordion-button ${className}__accordion-button`} aria-expanded={isExpanded} aria-controls={`collapse-${id}`}>
                        <span>{title}</span> 
                        <span className={`accordion-arrow ${(isExpanded) ? 'expand_less' : ''}`}>&rsaquo;</span>
                    </Button>
                </header>
            </div>
            <div id={`collapse-${id}`} className={`accordion-collapse ${className}__accordion-collapse collapse ${(isExpanded) ? 'show' : ''}`} aria-labelledby={`heading-${id}`}>
                <div className={`accordion-body ${className}__accordion-body`}>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default AccordionItem;