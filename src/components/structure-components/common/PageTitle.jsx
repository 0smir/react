import "../../../styles/_page_title.scss";
function PageTitle({text}) {
    return(
        <div className="page-title__wrapper hilited">
            <h2 className="title page-title">{text}</h2>
        </div>
    )
}

export default PageTitle;