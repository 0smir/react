import NavItem from "../NavItem"
import {API_URLs_SUPPORT} from "../../const";

export default function NavSupportComponent () {

    const NavigationItems = API_URLs_SUPPORT;
    
    return(
        <div className="footer-nav__links-list support-links__wrapper">
            <h2 className="title support-links__title">Support</h2>
            <ul className="support-links__list">
                {NavigationItems.map(navItem => <NavItem key={navItem.id} item={navItem} />)}
            </ul>
        </div>
    )
}