import React from "react";
import Navbar from "../navbar/Navbar";

const Layout: React.FC<any> = ({children}) => {
    return (
        <div className={'layout'}>
            <Navbar/>
            <div className={'content'}>
                {children}
            </div>
        </div>
    );
}

export default Layout;