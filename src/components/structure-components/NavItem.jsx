import  {NavLink} from 'react-router-dom';

function NavItem (props) {
    return(
        <li className="navigation-items">
            <NavLink className="link" to={props.item.linkUrl}>{props.item.title}</NavLink>
        </li>  
    )
}

export default NavItem