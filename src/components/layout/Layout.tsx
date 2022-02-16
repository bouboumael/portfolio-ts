import React from "react";
import Footer from "../footer/Footer";

const Layout: React.FC<any> = ({children}) => {
    return (
        <div className={'layout'}>
            <div className={'content'}>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;
