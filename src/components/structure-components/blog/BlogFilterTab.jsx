import Button from "../common/Button";

function BlogFilterTab({name, url, onTypeSelect}) {
    if(name !== 'unknown'){
    return (
            <li className="filter__content-item">
                <Button hendleBtnClick={onTypeSelect} 
                        className={`filter__btn filter__btn--${name}`}
                        data-type-name={name}
                        data-url={url}
                >
                    {name}
                </Button>
            </li>
        );
    }
    

}

export default BlogFilterTab