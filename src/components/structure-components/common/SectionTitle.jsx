import "../../../styles/_section_title.scss";

function SectionTitle({className, section_name, title, description}) {
    return(
        <div className={`section__title-wrapper ${className}__title-wrapper`}>
            <h1 className="section__name">{section_name}</h1>
            {title && (<h2 className="title section__title">{title}</h2>)}
            {description && (<p className="section__title-description">{description}</p>)}
        </div>
    )
}

export default SectionTitle;