import  {Link} from 'react-router-dom';
import SubscribeForm from "../../structure-components/common/SubscribeForm";
import SectionTitle from "../../structure-components/common/SectionTitle";

export default function Error () {
    return (
        <div className="page error-page">
            <div className="container">
                <SectionTitle className="error" section_name="404 error" title="Page Not Found" />
                <div className="page_content">
                <p>Oops! It looks like the page you were looking for is not here. Here are some possible reasons why:</p>
                    <ul>
                        <li>The page may have been moved or deleted.</li>
                        <li>You may have mistyped the URL.</li>
                        <li>There may be a temporary problem with our server.</li>
                    </ul>
                    <p>You can try the following options to find what you're looking for:</p>
                    <ul>
                        <li>Check the URL for typos or errors and try again.</li>
                        <li>Go back to our homepage and browse from there.</li>
                    </ul>

                    <p>If you believe there's an issue with our website, please contact us using the information provided on our contact page.</p>
                    <Link to="/">Back home</Link>
                </div>
                <SubscribeForm />   
            </div>
        </div>
    )
}