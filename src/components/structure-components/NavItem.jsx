import  {NavLink} from 'react-router-dom';
import "./../../styles/footer_nav.css";

function NavItem (props) {

    return(
        <li className="navigation-item">
            <NavLink className={`link ${props?.className}`} to={props.item.linkUrl}>{props.item.title}</NavLink>
        </li>  
    )
}

export default NavItem