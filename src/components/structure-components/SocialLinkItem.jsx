import  {NavLink} from 'react-router-dom';


export default function SocialLinkItem (props) {
    return(
        <li className="footer_social-item">
            <NavLink  className="footer_social-link footer_social-link--facebook" to={props.mediaItem.link} aria-label={`${props.mediaItem.name}: link open in a new tab`}>
                <img className="logo" src={`/images/social/${props.mediaItem.name}.svg`} alt={`${props.mediaItem.name} logo`} />
            </NavLink>
        </li>
    )
}
