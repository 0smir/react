import  {NavLink} from 'react-router-dom';
import "./../../styles/_footer_nav.scss";

function NavItem (props) {

    return(
        <li className="navigation__item">
            <NavLink className={`link ${props?.className}`} to={props.item.linkUrl}>{props.item.title}</NavLink>
        </li>  
    )
}

export default NavItem