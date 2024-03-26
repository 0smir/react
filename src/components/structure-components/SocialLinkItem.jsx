import  {NavLink} from 'react-router-dom';

export default function SocialLinkItem ({mediaItem, className}) {
    const {link, name, img_link} = mediaItem;
    
    return(
        <li className={`social__item ${className}-social__item`}>
            <NavLink  className={`social__link ${className}-social__link ${className}-social__link--${name}`} to={link} aria-label={`${name}: link open in a new tab`}>
                <img className={`logo social-logo social-logo--${name}`} src={img_link} alt={`${name} logo`} />
            </NavLink>
        </li>
    )
}
