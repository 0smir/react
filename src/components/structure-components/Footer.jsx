import  {Link} from 'react-router-dom';
import  Socialmedia from './SocialLinks';


export default function Footer () {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    console.log(currentYear);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer_logo-wrapper">
                        <Link className="footer_logo" to="/">
                            <img className="logo" src="/images/logo-big.svg" alt="nature" />
                        </Link>
                    </div>
                    <div className="footer_social-wrapper">
                        <Socialmedia />
                    </div>
                </div>
                <div className="copyrights-wrapper">
                    <p className="copyrights">All rights reserved, {currentYear}</p>
                </div>
            </div>
        
        </footer>
    )
}