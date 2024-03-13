import React, {useState} from 'react';
import  {Link} from 'react-router-dom';
import NavItem from "../NavItem";
import Button from './Button';
import "../../../styles/_header.scss";
import SiteLogoBig from '../../../images/logo-big.svg';

function Header(props) {
   const [navigationItemsList] = useState(props.navItems);

   window.addEventListener("scroll", onScroll);

   function onScroll() {
    let header = document.getElementsByClassName('header')[0],
        scrollY = window.pageYOffset;
        if(scrollY === 0){
            header.classList.remove('active');
        } else {
            header.classList.add('active');
        }
   };
   
    return(
        <header className="header">
            <div className="heder__logo-wrapper">
                <Link className="heder__logo" to="/">
                    <img className="logo" src={SiteLogoBig} alt="nature" />
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