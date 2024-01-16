import React, {useState} from 'react';
import  {Link} from 'react-router-dom';
import NavItem from "./NavItem";
import "../../styles/header.css"

function Header(props) {
   const [navigationItemsList] = useState(props.navItems);
   
    return(
        <header className="header">
            <div className="heder_logo-wrapper">
                <Link className="heder_logo" to="/">
                    <img className="logo" src="/images/logo-big.svg" alt="nature" />
                </Link>
            </div>
            { navigationItemsList.length ?
                <div className="header_nav-wrapper">
                    <button className="header_nav-mobile" aria-label="mobile site nav">&#9776;</button>
                    <ul className="header_navigation">
                        {navigationItemsList.map(navItem => 
                            <NavItem item={navItem} key={navItem.id} />
                        )}
                    </ul>
                </div>
                : <p>no nav</p>
            }
        </header>

    )

}

export default Header