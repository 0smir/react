import {Link} from "react-router-dom";


export default function PostItem (item) {
  
    return(
        <article >
            <img  src="/images/nature.jpg" alt="nature" />
            <h2>{item.name}</h2>
            <p className="article-prewiew">!!!</p>

            <Link to={item.url} className="article__link article__link--more">Read more!</Link>

        </article>
    )

}