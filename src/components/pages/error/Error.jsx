import  {Link} from 'react-router-dom';
import SubscribeForm from "../../structure-components/common/SubscribeForm";


export default function Error () {
    return (
        <div className="error-page">
            <div className="container">
                <h1 className="title page-title">Ooops!</h1>
                <p className="title-descroption">Something goes wrong! Page not found! </p>
                <p className="description"> Error: 404 </p>
                <Link to="/">Back home</Link>

                <SubscribeForm />   
            </div>
        </div>
    )
}