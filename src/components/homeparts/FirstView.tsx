import React from "react";
import logo from "../../assets/images/mael-logo-pins.png";

function FirstView() {

    return (
        <div className={"p-20 flex flex-col justify-center items-center text-center firstview"}>
            <img src={logo} alt={"Mael logo"} className={`mael-logo rotating`}/>
        </div>
    );
}

// @ts-ignore
export default FirstView;
