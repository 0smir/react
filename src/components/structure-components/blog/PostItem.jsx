
import {Link} from "react-router-dom";
import BlogTags from "./BlogTag";
import "../../structure-components/blog/postItem.css"

export default function PostItem ({id, sprites, name, types}) {
    const url = `/article/${id}`;

    return(
        <article className="blog-item">
            <div className="blog-item__number-label"># {id}</div>
            <div className="blog-item__image-wrapper">
                <img className="image-fluid blog-item__image" src={sprites?.front_default} alt={name} />
            </div>
            <h2 className='blog-item__title'>{name}</h2>
          
            {types && <BlogTags postItemsList={types} />}
           
            <Link to={url} className="article__link article__link--more">Read more!</Link>

        </article>
    );
}