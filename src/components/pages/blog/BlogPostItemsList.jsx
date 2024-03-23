import PostItem from '../../structure-components/blog/PostItem';

function BlogPostItemsList({postsList}) {
    return(
        <div>
            <div className="posts-list">
                { postsList.map((item) => <PostItem key={`${item.id}`} {...item} />)}
            </div>
        </div> 
    )
}

export default BlogPostItemsList;