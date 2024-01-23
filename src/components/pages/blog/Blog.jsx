import {useState, useEffect} from 'react';
import PostItem from '../../structure-components/PostItem';
import '../../../components/pages/blog/blog.css';

function Blog() {
    const [postsList, setPostsList] = useState({}),
            limit = 20;

    useEffect(() => {
         fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, { method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            // console.log("data", data);
             setPostsList(data.results);
        })
        .catch((error) => console.log(error));
    }, []);
    
    
    return(
        <div className="page blog-page">
            <div className="container">
                <h1 className="title page-title">Blog</h1>
                {/* <CreatePostForm /> */}
                
               <div>
                { postsList.length ? (
                    <div className="posts-list">
                     { postsList.map((item, index) => <PostItem key={index} item={item}>
                     <p>Small additional content to test Children-props</p>
                     </PostItem>) }
                    </div>
                    ) : (
                        <div className="empty-post">  There are no posts yet! Please, use form to add one!</div>
                    )
                }
               </div>    
            </div>
        </div>
    );            
    
}

export default Blog