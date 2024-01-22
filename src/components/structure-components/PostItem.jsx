import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


export default function PostItem ({item, children}) {
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
    console.log('postItem', postItem);
    // console.log('postItem', postItem?.sprites?.front_default);
    return(
        <article className="blog-item">
            {children}
            <div className="blog-item__image-wrapper">
                <img className="image-fluid blog-item__image" src={postItem?.sprites?.front_default} alt={postItem?.name} />
            </div>
            <h2>{postItem?.name}</h2>
            {/* { postItem?.types.length > 0 &&
                <div className="blog-tags">
                    (this.postItem.types).map((typeItem, index) => {
                        <span className="tag-text" key={index}>
                            typeItem.map((tag, index) => {
                                <span className='tag tag-name' key={index}>{tag?.type?.name}</span>
                            })
                        </span>
                    })
                </div>
            } */}
            <Link to={url} className="article__link article__link--more">Read more!</Link>

        </article>
    )

}