import ContactsItem from "./../../structure-components/ContactsItem";
import PageTitle from "../../structure-components/common/PageTitle";
import SubscribeForm from "../../structure-components/common/SubscribeForm";
import {API_URLs_CONTACTS} from "../../const";

function ContactUs(){
    const NavigationItems = API_URLs_CONTACTS;
    return(
        <div className="page contact-us-page">
            <div className="container contact-us-container">
                <PageTitle text={'Contact us'} />
                <ul className="contacts-links_list">
                    {NavigationItems.map((navItem, index) => <ContactsItem key={index} item={navItem} />)}
                </ul>

                <SubscribeForm />
            </div>
        </div>
    )

}

export default ContactUs;

