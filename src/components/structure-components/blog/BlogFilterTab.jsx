function BlogFilterTab({name, url, onTypeSelect}) {

    return (
        <li className="filter__content-item">
            <button onClick={onTypeSelect} 
                    className={`filter-btn filter-btn--${name}`}
                    data-type-name={name}
                    data-url={url}
            >
                {name}
            </button>
        </li>
    );

}

export default BlogFilterTab