import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout: React.FC<any> = ({children}) => {
    return (
        <div className={'layout'}>
            <Navbar/>
            <div className={'content'}>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;
