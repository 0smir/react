import  {Link} from 'react-router-dom';
import  Socialmedia from '../SocialLinks';
import NavQuickLinksComponent from './NavQuickLinksComponent';
import NavSupportComponent from './NavSupportComponent';
import NavHelpComponent from './NavHelpComponent';
import SiteLogo from '../../../images/logo-big.svg';
import "../../../styles/_footer.scss";


export default function Footer () {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top-block">
                    <div className="footer__logo-wrapper">
                        <Link className="footer__logo" to="/">
                            <img className="logo" src={SiteLogo} alt="nature" />
                        </Link>
                    </div>
                    <div className="footer__social-wrapper">
                        <Socialmedia location="footer"/>
                    </div>
                    <div className="footer-nav footer-nav__wrapper">
                        <NavQuickLinksComponent />
                        <NavSupportComponent />
                        <NavHelpComponent />
                    </div>
                </div>
                <div className="copyrights__wrapper">
                    <p className="copyrights">All rights reserved, <span>{currentYear}</span></p>
                </div>
            </div>
        </footer>
    )
}