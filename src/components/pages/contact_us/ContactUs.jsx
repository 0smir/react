import ContactsItem from "./../../structure-components/ContactsItem";
import PageTitle from "../../structure-components/common/PageTitle";
import {API_URLs_CONTACTS} from "../../const";

function ContactUs(){
    const NavigationItems = API_URLs_CONTACTS;
    return(
        <div className="page contact-us-page">
            <div className="container contact-us-container">
                <PageTitle text={'Contact us'} />
                <ul class="contacts-links_list">
                    {NavigationItems.map((navItem, index) => <ContactsItem key={index} item={navItem} />)}
                </ul>
            </div>
        </div>
    )

}

export default ContactUs;

