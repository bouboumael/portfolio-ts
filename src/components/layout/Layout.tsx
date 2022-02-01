import React from "react";

const Layout: React.FC<any> = ({children}) => {
    return (
        <div className={'layout'}>
            <div className={'content'}>
                {children}
            </div>
        </div>
    );
}

export default Layout;
