import {createContext, useState, useContext} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
        document.body.style.overflow = 'hidden';
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
        document.body.style.overflow = 'unset';
    };
    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };
    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };


    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                isModalOpen,
                setIsSidebarOpen,
                openSidebar,
                closeSidebar,
                openModal,
                closeModal
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const GlobalContext = () => {
    return useContext(AppContext);
} 