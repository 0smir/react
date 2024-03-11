import {Outlet} from 'react-router-dom';
import Header from './components/structure-components/common/Header';
import Footer from './components/structure-components/footer/Footer';
import {API_URLs_HEADER} from './components/const'

export default function Root () {

    const NavigationItems = API_URLs_HEADER;

    return (
        <>
            <Header navItems = {NavigationItems}/>
                
                <Outlet />      
            <Footer />
        </>
    )
}