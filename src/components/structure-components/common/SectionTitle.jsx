import "../../../styles/_section_title.scss";

function SectionTitle({className, section_name, title}) {
    return(
        <div className={`section__title-wrapper ${className}__title-wrapper`}>
            <h1 className="section__name">{section_name}</h1>
            <h2 className="title section__title">{title}</h2>
        </div>
    )
}

export default SectionTitle;