import {Outlet} from 'react-router-dom';
import Header from './components/structure-components/Header';
import Footer from './components/structure-components/Footer';

export default function Root () {

    const NavigationItems = [
        {
            id: 1,
            title: 'Home',
            linkUrl: '/'
        },
        {
            id: 2,
            title: 'About',
            linkUrl: '/about'
        },
        {
            id: 3,
            title: 'Blog',
            linkUrl: '/blog'
        },
    
    ];

    return (
        <>
            <Header navItems = {NavigationItems}/>
                
                <Outlet />      
            <Footer />
        </>
    )
}