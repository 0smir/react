import  {Link} from 'react-router-dom';

export default  function ContactsItem (props) {
    const Url = (props.item.name === 'phone') ? `tel:${props.item.value}`: `mailto:${props.item.value}`;
    return(
        <li className="navigation-item">
           {props.item.name === 'address' ? ( props.item.value) 
           : (
            <Link className="link" to={Url}>{props.item.value}</Link>
           )}  
        </li>  
    )
}

