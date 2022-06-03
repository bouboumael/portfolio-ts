import React, {useEffect, useState} from 'react'
import './returnToTp.scss'

const ReturnOnTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight / 2) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    })

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div id="scrollUpButton" data-bs-toggle="tooltip" data-bs-placement="top" title="Haut de page">
            <div
                className={`scroll-up ${
                    isVisible ? 'show' : ''
                } d-flex align-items-center justify-content-center`}
                onClick={scrollToTop}
            >
                <i className="fas fa-chevron-up"></i>
            </div>
        </div>
    )
}

export default ReturnOnTop
