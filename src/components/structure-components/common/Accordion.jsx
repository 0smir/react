import { useState } from "react";
import AccordionItem from "./AccordionItem";

import "../../../styles/_accordion.scss";

function Accordion({className, dataInfo, activeItemId=null}) {  
    const [activeID, setActiveID] = useState(activeItemId);


    function toggleContent(id) {
        console.log(id);
        let newActiveID = id === activeID ? null : id;
        setActiveID(newActiveID);
    }
    
    return (
        <div className="accordion-wrapper">
            {dataInfo.map((item) => {
               return(
                    <AccordionItem 
                                className={className} 
                                key={item.id} 
                                activeID={activeID} 
                                item={item} 
                                toggleContent={toggleContent} 
                    />
                )
               
            })}
        </div>
    );
}

export default Accordion;