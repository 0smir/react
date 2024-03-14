import vr_user_small from '../../images/vr_user_small.jpg';
import '../../styles/_clients_list.scss';
function ClientList({list , total_count}) {

    return(
        <div className="clients">
            <ul className="clients__list">
                {list.map((client, index) =>{
                    return(
                        <li className="clients__list-item" key={index}>
                            <img src={client} alt={`client_${index}`} />
                        </li>
                    )
                })}
            </ul>
            <p className="clients__description"><strong className="qantity underlined">{`${total_count}k+`}</strong> Happy Clients</p>
            <img src={vr_user_small} alt="vr_user" className="clients__img"/>
        </div>
    );
}

export default ClientList