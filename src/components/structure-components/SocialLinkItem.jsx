import  {NavLink} from 'react-router-dom';

export default function SocialLinkItem (props) {
    const {link, name, img_link} = props.mediaItem;
    return(
        <li className="footer_social-item">
            <NavLink  className="footer_social-link footer_social-link--facebook" to={link} aria-label={`${name}: link open in a new tab`}>
                <img className={`logo social-logo social-logo--${name}`} src={img_link} alt={`${name} logo`} />
            </NavLink>
        </li>
    )
}
