import React from "react";
import Technology from "../technology/Technology";
import {TechnologyProps} from "../../types/portfolioTypes";

const ThirdView = () => {

    const technos: TechnologyProps[] = [
        {
            logo: {
                src: "logos/html.png",
                alt: "Html Logo",
            },
            starNumber: 5,
            link: "https://developer.mozilla.org/fr/docs/Web/HTML",
        },
        {
            logo: {
                src: "logos/css.png",
                alt: "CSS Logo",
            },
            starNumber: 5,
            link: "https://developer.mozilla.org/fr/docs/Web/CSS",
        },
        {
            logo: {
                src: "logos/js.png",
                alt: "logo Javascript",
            },
            starNumber: 4,
            link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
        },
        {
            logo: {
                src: "logos/php.png",
                alt: "logo php",
            },
            starNumber: 5,
            link: "https://www.php.net/",
        },
        {
            logo: {
                src: "logos/symfony.png",
                alt: "logo Symfony",
            },
            starNumber: 5,
            link: "https://symfony.com/",
        },
        {
            logo: {
                src: "logos/mysql.png",
                alt: "logo MySql",
            },
            starNumber: 5,
            link: "https://www.mysql.com/fr/",
        },
        {
            logo: {
                src: "logos/react.png",
                alt: "React Logo",
            },
            starNumber: 4,
            link: "https://fr.reactjs.org/",
        },
        {
            logo: {
                src: "logos/Gatsby.png",
                alt: "logo Gatbsy",
            },
            starNumber: 4,
            link: "https://www.gatsbyjs.com/",
        },
        {
            logo: {
                src: "logos/WordPress.png",
                alt: "logo Wordpress",
            },
            starNumber: 4,
            link: "https://developer.wordpress.org/",
        },
        {
            logo: {
                src: "logos/git.png",
                alt: "logo Git",
            },
            starNumber: 5,
            link: "https://git-scm.com/",
        },
        {
            logo: {
                src: "logos/linux.png",
                alt: "logo linux",
            },
            starNumber: 4,
            link: "https://www.ubuntu-fr.org/",
        },
        {
            logo: {
                src: "logos/windows.png",
                alt: "logo windows",
            },
            starNumber: 5,
            link: "https://www.microsoft.com/fr-fr/windows?r=1",
        },
        {
            logo: {
                src: "logos/office.png",
                alt: "logo Office",
            },
            starNumber: 4,
            link: "https://www.office.com/",
        },
        {
            logo: {
                src: "logos/phpstorm.png",
                alt: "logo PhpStorm",
            },
            starNumber: 5,
            link: "https://www.jetbrains.com/fr-fr/phpstorm/",
        },
        {
            logo: {
                src: "logos/webstorm.png",
                alt: "logo Webstorm",
            },
            starNumber: 5,
            link: "https://www.jetbrains.com/fr-fr/webstorm/",
        },
        {
            logo: {
                src: "logos/vscode.png",
                alt: "logo VsCode",
            },
            starNumber: 5,
            link: "https://code.visualstudio.com/",
        },

    ]

    return (
        <div className={'thirdView p-20 flex flex-row flex-wrap items-center justify-center'}>
            {technos.map((techno, index) => {
                return <Technology key={index} {...techno}/>
            })}
        </div>
    )
}

export default ThirdView;
