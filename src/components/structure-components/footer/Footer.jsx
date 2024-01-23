import  {Link} from 'react-router-dom';
import  Socialmedia from '../SocialLinks';
import NavQuickLinksComponent from './NavQuickLinksComponent';
import NavSupportComponent from './NavSupportComponent';
import NavHelpComponent from './NavHelpComponent';
import SiteLogo from '../../../images/logo-big.svg';
import "../../../styles/footer.css";


export default function Footer () {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    // console.log(currentYear);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer_logo-wrapper">
                        <Link className="footer_logo" to="/">
                            <img className="logo" src={SiteLogo} alt="nature" />
                        </Link>
                    </div>
                    <div className="footer_social-wrapper">
                        <Socialmedia />
                    </div>
                    <div className="footer_nav-wrapper">
                        <NavQuickLinksComponent />
                        <NavSupportComponent />
                        <NavHelpComponent />
                    </div>
                </div>
                <div className="copyrights-wrapper">
                    <p className="copyrights"><span></span>All rights reserved, {currentYear}</p>
                </div>
            </div>
        
        </footer>
    )
}