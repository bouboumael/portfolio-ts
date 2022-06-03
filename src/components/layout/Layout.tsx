import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import ReturnOnTop from "../returnOnTop/ReturnOnTop";

const Layout: React.FC<any> = ({children}) => {
    return (
        <div className={'layout'}>
            <Navbar/>
            <ReturnOnTop />
            <div className={'content'}>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;
