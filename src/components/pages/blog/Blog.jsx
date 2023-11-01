import {useState, useEffect} from 'react';
import CreatePostForm from '../../structure-components/PostCreateForm';
import PostItem from '../../structure-components/PostItem';

function Blog() {
    const [postsList, setPostsList] = useState({});

    useEffect(() => {
         fetch('https://pokeapi.co/api/v2/pokemon?limit=20', { method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            console.log("data", data);
             setPostsList(data.results);
        })
        .catch((error) => console.log(error));
    }, []);
    
    console.log('postsList', postsList);
    return(
        <div className="page blog-page">
            <div className="container">
                <h1 className="title">Blog</h1>
                <CreatePostForm />
               <div>
                { postsList.lenght ? (
                    <div className="posts-list">
                     { postsList.map((item, index) => <PostItem key={index} item={item} />) }
                    </div>
                    ) : (
                        <div className="empty-post">  Thera no posts yet! Please, use form to add one!</div>
                    )
                }
               </div>    
            </div>
        </div>
    );            
    
}

export default Blog