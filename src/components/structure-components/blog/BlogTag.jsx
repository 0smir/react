function BlogTags ({postItemsList}) {
   
    return (
        <div className="tag-list">
           { (postItemsList).map((tag, index) => { 
                return <span className={`tag tag-name tag--${tag.type.name}`} data-type-name={tag.type.name} key={index}>{tag.type.name}</span>
             })
            }
        </div> 
    )
}

export default BlogTags