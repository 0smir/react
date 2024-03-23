import PostItem from '../../structure-components/blog/PostItem';

function BlogPostItemsList({postsList}) {
    return(
        <div>
        { postsList?.length ? (
            <div className="posts-list">
            { postsList.map((item, index) => <PostItem key={`${item.id}`} {...item} />)}
            </div>
            ) : (
                <div className="empty-post">  There are no posts yet! Please, use form to add one!</div>
            )
        }
    </div> 
    )
}

export default BlogPostItemsList;