import  {Link} from 'react-router-dom';
import './../../styles/footer_social.css';


export default function Socialmedia () {
    return (
        <ul className="footer_social">
            <li className="footer_social-item">
                <Link className="footer_social-link footer_social-link--facebook" to="/" aria-label="Facebook: link open in a new tab">
                    <img className="logo" src="/images/social/facebook.svg" alt="Facebook logo" />
                </Link>
            </li>
            <li className="footer_social-item">
                <Link className="footer_social-link footer_social-link--twitter" to="/" aria-label="Twitter: link open in a new tab">
                    <img className="logo" src="/images/social/twitter.svg" alt="Twitter logo" />
                </Link>
            </li>
            <li className="footer_social-item">
                <Link className="footer_social-link footer_social-link--instagram" to="/" aria-label="Instagram: link open in a new tab">
                    <img className="logo" src="/images/social/instagram.svg" alt="Instagram logo" />
                </Link>
            </li>
            <li className="footer_social-item">
                <Link className="footer_social-link footer_social-link--git" to="/" aria-label="GitHub: link open in a new tab">
                    <img className="logo" src="/images/social/git.svg" alt="GitHub logo" />
                </Link>
            </li>
        </ul>
    )
}