import  {Link} from 'react-router-dom';

export default  function ContactsItem (props) {
    const {item, className} = props;
   
    const Url = (item.name === 'phone') ? `tel:${item.value}`: `mailto:${item.value}`;
    return(
        <li className="navigation-item">
           {item.name === 'address' ? (<span className="address">{item.value}</span> )
           : (
            <Link className={`link link--${item.name} ${className}`} to={Url}>{item.value}</Link>
           )}  
        </li>  
    )
}

