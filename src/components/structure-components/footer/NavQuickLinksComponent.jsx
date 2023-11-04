import NavItem from "../NavItem";
import {API_URLs_QUICKLINKS} from "../../const";


export default function NavQuickLinksComponent () {

    const NavigationItems = API_URLs_QUICKLINKS

    return(
        <div className="footer-nav__links-list quick-links__wrapper">
            <h2 className="title footer-nav__title quick-links__title">Quick Links</h2>
            <ul className="quick-links__list">
                {NavigationItems.map(navItem => <NavItem key={navItem.id} item={navItem} />)}
            </ul>
        </div>
    )
}