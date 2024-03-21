import  {Link} from 'react-router-dom';
import SubscribeForm from "../../structure-components/common/SubscribeForm";
import SectionTitle from "../../structure-components/common/SectionTitle";
import SectionBanner from "../../structure-components/common/SectionBanner";

import "./error.scss";
import error_img from "../../../images/error_bg.png";

export default function Error () {
    return (
        <div className="page error-page">
            <div className="container error-page__container">
                <div className="error-page__content-wrapper">
                    <div className="error-page__content">
                        <SectionTitle className="error" section_name="404 error" title="Page Not Found" />
                        <p className='text'>Oops! It looks like the page you were looking for is not here. Here are some possible reasons why:</p>
                        <ul className="error__description-list">
                            <li className="error__description-item">The page may have been moved or deleted.</li>
                            <li className="error__description-item">You may have mistyped the URL.</li>
                            <li className="error__description-item">There may be a temporary problem with our server.</li>
                        </ul>
                        <p className='text'>You can try the following options to find what you're looking for:</p>
                        <ul className="error__description-list">
                            <li className="error__description-item">Check the URL for typos or errors and try again.</li>
                            <li className="error__description-item">Go back to our homepage and browse from there.</li>
                        </ul>

                        <p className='text'>If you believe there's an issue with our website, please contact us using the information provided on our contact page.</p>
                        <Link className="btn-link btn-link--filled error-page__btn" to="/">Back home</Link>
                    </div>
                    <SectionBanner main_banner={error_img} main_banner_alt_text="404 error" className="error" light={false} darck_bg={false}/>
                </div>
            </div>
            <div className="container">
                <SubscribeForm />   
            </div>
        </div>
    )
}