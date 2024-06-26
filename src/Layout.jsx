import {Outlet} from 'react-router-dom';
import Header from './components/structure-components/common/Header';
import Sidebar from './components/structure-components/Sidebar';
import Footer from './components/structure-components/footer/Footer';
import {API_URLs_HEADER} from './components/const';
import { GlobalContext } from './Context';

export default function Root () {
    const { isSidebarOpen, isModalOpen,} = GlobalContext();
    const NavigationItems = API_URLs_HEADER;
   
    return (
        <>
        <Sidebar navItems = {NavigationItems}/>
            <Header navItems = {NavigationItems}/>
            <Outlet />      
            <Footer />
        </>
    )
}