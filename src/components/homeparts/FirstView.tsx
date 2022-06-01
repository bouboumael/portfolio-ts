import React from "react";
import logo from "../../assets/images/mael-logo-pins.png";

function FirstView() {

    return (
        <div className={"flex flex-col justify-center items-center text-center firstview"}>
            <img src={logo} alt={"Mael logo"} className={`mt-60 md:mt-0 mael-logo rotating`}/>
        </div>
    );
}

export default FirstView;
