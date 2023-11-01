import {useState} from 'react';
import '../../styles/create_post_form.css';

export default function CreatePostForm () {
    const [postTitle, setPostTitle] = useState('');
    const [postImageUrl, setImageUrl] = useState('');
    const [postUrl, setPostUrl] = useState('');
    const [postPreview, setPostPreview] = useState('');

    const createPost = (e) => {
        e.preventDefault();
        console.log('post Created!!!', {postTitle, postImageUrl, postUrl, postPreview});
    }

    return(
        <div className="create-post-form__wrapper">
            <form>
                <div className="create-post-form__content">
                    <input className='create-post__input create-post__input--post-title'
                            type="text"
                            placeholder="Post title"
                            value={postTitle}
                            onChange={e => setPostTitle(e.target.value)}
                      />
                    <input className='create-post__input create-post__input--post-image-url'
                            type="text"
                            placeholder="Image Url"
                            value={postImageUrl}
                            onChange={e => setImageUrl(e.target.value)}
                    />
                    <input className='create-post__input create-post__input--post-articl-url'
                             type="text"
                             placeholder="Article Url"
                             value={postUrl}
                             onChange={e => setPostUrl(e.target.value)}
                             
                    />
                    <textarea className='create-post__textarea create-post__input--post-preview'
                                type="text"
                                placeholder="Post preview"
                                rows={5}
                                columns={30}
                                value={postPreview}
                                onChange={e => setPostPreview(e.target.value)}
                    >
                    </textarea>
                    <button onClick={(e) => createPost(e)} className="btn btn-add-post" >Add Post</button>
                </div>
            </form>
        </div>
    )

}