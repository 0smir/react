import  {Link} from 'react-router-dom';
import { GlobalContext } from "../../Context";
import NavItem from "./NavItem";
import Button from './common/Button';
import  Socialmedia from './SocialLinks';

import "../../styles/_sidebar.scss";


function Sidebar({navItems}) {
    const {isSidebarOpen, closeSidebar} = GlobalContext();
    
    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}>
            { navItems.length ?
                <div className="sidebar__nav-wrapper">
                    <Button className="btn btn--outline btn-close" hendleBtnClick={closeSidebar}>
                        <span className="icon icon--close">+</span>
                    </Button>
                    <ul className="sidebar__navigation">
                        {navItems.map(navItem => 
                            <NavItem item={navItem} key={navItem.id} className="sidebar__link" />
                        )}
                    </ul>
                </div>
                : <p>no nav</p>
            }
            <Button className="btn btn--outline">Login</Button>

            <div className="sidebar__social-wrapper">
                <Socialmedia location="footer"/>
            </div>
        </div>
    )
}

export default Sidebar;