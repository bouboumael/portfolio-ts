import gsap from "gsap";
import React, {useLayoutEffect, useRef} from "react";
import logo from "../../assets/images/mael-logo-pins.png"


const LogoBall = () => {

    let image = new Image()
    image.src = logo;

    const boxVar = {
        from: {
            x: - document.body.clientWidth,
            opacity: -1
        },
        to: {
            rotation: 360,
            x: 0,
            duration: 2,
            opacity: 1
        },
    }

    const boxRef = useRef(null);
    useLayoutEffect(() => {
        image.onload = () => {
            gsap.fromTo(boxRef.current,boxVar.from, boxVar.to);
        }
    });

    return <img src={logo} alt={"Mael logo"} className={`mt-60 sm:mt-0 md:mt-15 mael-logo`} ref={boxRef}/>
}

export default LogoBall;
