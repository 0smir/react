import  {Link} from 'react-router-dom';

function NavItem (props) {
    console.log('props: ', props);
    return(
        <li className="navigation-items">
            <Link to={props.item.linkUrl}>{props.item.title}</Link>
        </li>  
    )
}

export default NavItem