import {useState} from 'react';
import '../../styles/_form.scss';

export default function CreatePostForm () {
    const [post, setPost] = useState({
        postTitle: '',
        text: '',
        authorName: '',
        imgUrl: ''
    });
    

    const createPost = (e) => {
        e.preventDefault();
        
        // console.log('post Created!!!', {postTitle, postImageUrl, postUrl, postPreview});
        console.log('post Created!!!', e.target.name, e.target.value);
        setPost({...post, [e.target.name]: e.target.value});
    }

    return(
        <div className="create-post-form__wrapper">
            <form>
                <div className="create-post-form__content">
                    <input className='create-post__input create-post__input--post-title'
                            type="text"
                            placeholder="Post title"
                            name="postTitle"
                            value={post.postTitle}
                            onChange={createPost}
                      />
                    <input className='create-post__input create-post__input--post-image-url'
                            type="text"
                            placeholder="Image Url"
                            name="imgUrl"
                            value={post.imgUrl}
                            onChange={createPost}
                    />
                    <input className='create-post__input create-post__input--post-image-url'
                            type="text"
                            placeholder="author"
                            name="authorName"
                            value={post.authorName}
                            onChange={createPost}
                    />
                    <textarea className='create-post__textarea create-post__input--post-preview'
                                type="text"
                                placeholder="Post preview"
                                rows={5}
                                columns={30}
                                name="text"
                                value={post.text}
                                onChange={createPost}
                    >
                    </textarea>
                    <button onClick={(e) => createPost(e)} className="btn btn-add-post" >Add Post</button>
                </div>
            </form>
        </div>
    )

}