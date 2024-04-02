import "../../styles/_advantages_list.scss";


function PointsList({className, itemList}) {
   
    return(
        <div className={`advantages__wrapper ${className}-advantages__wrapper`}>
            <ul className={`${className}__list`}>
                {itemList.map(item => {
                        let {id, icon, title, description} = item;
                        
                        return (
                            <li className={`${className}__list-item ${className}__item`} key={id}>
                                <img src={icon} alt={title} className={`${className}__icon`} />
                                <h3 className={`${className}__title`}>{title}</h3>
                                <p className={`${className}__description-text`}>{description}</p>
                            </li>
                        )
                })}        
            </ul>         
        </div>

    );
}
export default PointsList;
