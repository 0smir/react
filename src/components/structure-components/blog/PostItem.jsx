
import {Link} from "react-router-dom";
import BlogTags from "./BlogTag";
import "../../structure-components/blog/postItem.scss"

export default function PostItem ({id, sprites, name, types}) {
    const url = `/article/${id}`;

    return(
        <article className="blog-item">
            {/* <div className="blog-item__number-label"># {id}</div> */}
            <div className="blog-item__image-wrapper">
                <img className="image-fluid blog-item__image" src={sprites?.front_default} alt={name} />
            </div>
            <div className="blog-item__description">
                {types && <BlogTags postItemsList={types} />}
                <h2 className="blog-item__title">{name}</h2>
                <Link to={url} className="btn-link btn-link--outline blog-item__link">Read more!</Link>
            </div>

        </article>
    );
}