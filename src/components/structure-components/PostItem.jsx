import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import BlogTags from "./BlogTag";

export default function PostItem ({item, number, children}) {
       const [postItem, setPostItem] = useState([]),
            url = item.url;
            
    useEffect(() => {
        fetch(url, { method: "GET"})
       .then((response) => response.json())
       .then((data) => {
        //    console.log("dataItem", data);
           setPostItem(data);
       })
       .catch((error) => console.log(error));
   }, []);
    // console.log("typesList", postItem?.types);
    // console.log('postItem', postItem);
    // console.log('postItem', postItem?.sprites?.front_default);
    return(
        <article className="blog-item">
            <div className="blog-item__number-label"># {number}</div>
            {children}
            <div className="blog-item__image-wrapper">
                <img className="image-fluid blog-item__image" src={postItem?.sprites?.front_default} alt={postItem?.name} />
            </div>
            <h2 className='blog-item__title'>{postItem?.name}</h2>
          
            {postItem?.types && <BlogTags postItemsList={postItem.types} />}
           
            <Link to={`/article/${postItem.id}`} className="article__link article__link--more">Read more</Link>

        </article>
    )

}