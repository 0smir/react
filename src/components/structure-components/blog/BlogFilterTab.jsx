import Button from "../Button";

function BlogFilterTab({name, url, onTypeSelect}) {

    return (
        <li className="filter__content-item">
            <Button hendleBtnClick={onTypeSelect} 
                    className={`filter-btn filter-btn--${name}`}
                    data-type-name={name}
                    data-url={url}
            >
                {name}
            </Button>
        </li>
    );

}

export default BlogFilterTab