import "../../../styles/_page_title.scss";
function PageTitle({text}) {
    return(
        <div className="page-title__wrapper highlighted">
            <h1 className="title page-title">{text}</h1>
        </div>
    )
}

export default PageTitle;