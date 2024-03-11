import React, {useState} from 'react';
import  {Link} from 'react-router-dom';
import NavItem from "../NavItem";
import Button from './Button';
import "../../../styles/_header.scss";
import SiteLogo from '../../../images/logo-small.svg';

function Header(props) {
   const [navigationItemsList] = useState(props.navItems);
   
    return(
        <header className="header">
            <div className="heder__logo-wrapper">
                <Link className="heder__logo" to="/">
                    <img className="logo" src={SiteLogo} alt="nature" />
                </Link>
            </div>
            { navigationItemsList.length ?
                <div className="header__nav-wrapper">
                    <Button className="header__navigation--mobile" aria-label="mobile site nav">&#9776;</Button>
                    <ul className="header__navigation">
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