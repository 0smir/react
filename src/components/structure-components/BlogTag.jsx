function BlogTags ({postItemsList}) {
   
    return (
        <div className="tag-list">
           { (postItemsList).map((tag, index) => { 
                console.log("tag", tag)
                return <span className={`tag tag-name tag--${tag.type.name}`}>{tag.type.name}</span>
             })
            }
        </div> 
    )
}

export default BlogTags