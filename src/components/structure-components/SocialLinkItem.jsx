import  {NavLink} from 'react-router-dom';

export default function SocialLinkItem (props) {
    const {link, name, img_link} = props.mediaItem;
    return(
        <li className="footer-social__item">
            <NavLink  className="footer-social__link footer-social__link--facebook" to={link} aria-label={`${name}: link open in a new tab`}>
                <img className={`logo social-logo social-logo--${name}`} src={img_link} alt={`${name} logo`} />
            </NavLink>
        </li>
    )
}
