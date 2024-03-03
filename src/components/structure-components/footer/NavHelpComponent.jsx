import ContactsItem from "../ContactsItem";
import {API_URLs_CONTACTS} from "../../const";

export default function NavHelpComponent () {
    const NavigationItems = API_URLs_CONTACTS;
    return(
        <div className="footer-nav__links-list help-links__wrapper">
            <h2 className="title footer-nav__title help-links__title">Need Help?</h2>
            <ul className="help-links__list">
                {NavigationItems.map((navItem, index) => <ContactsItem key={index} item={navItem} className="footer__link" />)}
            </ul>
        </div>
    )
}