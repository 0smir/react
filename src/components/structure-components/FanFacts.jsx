import "../../styles/_facts_list.scss";

function FanFacts({facts}) {

    return(
        <div className="section facts__section">
            <ul className="facts__list">
                {facts.map((fact, index) => {
                    return(
                        <li className="facts__list-item" key={index} >
                            <h4 className="facts__title">{fact.title}</h4>
                            <p className="facts__description">{fact.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FanFacts;