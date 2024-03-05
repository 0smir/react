import NavItem from "../NavItem"
import {API_URLs_SUPPORT} from "../../const";

export default function NavSupportComponent () {

    const NavigationItems = API_URLs_SUPPORT;
    
    return(
        <div className="footer-nav__links-list support-links">
            <h2 className="title footer-nav__title support-links__title">Support</h2>
            <ul className="support-links__list">
                {NavigationItems.map(navItem => <NavItem key={navItem.id} item={navItem} className="footer__link" />)}
            </ul>
        </div>
    )
}