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
            title:  'Html 5'
        },
        {
            logo: {
                src: "logos/css.png",
                alt: "CSS Logo",
            },
            starNumber: 4,
            link: "https://developer.mozilla.org/fr/docs/Web/CSS",
            title:  'Css 3'
        },
        {
            logo: {
                src: "logos/js.png",
                alt: "logo Javascript",
            },
            starNumber: 4,
            link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
            title:  'JavaScript'
        },
        {
            logo: {
                src: "logos/php.png",
                alt: "logo php",
            },
            starNumber: 5,
            link: "https://www.php.net/",
            title:  'Php'
        },
        {
            logo: {
                src: "logos/Bootstrap.svg",
                alt: "logo Bootstrap",
            },
            starNumber: 5,
            link: "https://getbootstrap.com/",
            title:  'Bootstrap'
        },
        {
            logo: {
                src: "logos/Tailwind.png",
                alt: "logo Tailwind",
            },
            starNumber: 4,
            link: "https://tailwindcss.com/",
            title:  'Tailwind'
        },
        {
            logo: {
                src: "logos/symfony.png",
                alt: "logo Symfony",
            },
            starNumber: 5,
            link: "https://symfony.com/",
            title:  'Symfony'
        },
        {
            logo: {
                src: "logos/mysql.png",
                alt: "logo MySql",
            },
            starNumber: 5,
            link: "https://www.mysql.com/fr/",
            title:  'MySql'
        },
        {
            logo: {
                src: "logos/react.png",
                alt: "React Logo",
            },
            starNumber: 4,
            link: "https://fr.reactjs.org/",
            title:  'React JS'
        },
        {
            logo: {
                src: "logos/Gatsby.png",
                alt: "logo Gatbsy",
            },
            starNumber: 4,
            link: "https://www.gatsbyjs.com/",
            title:  'Gatsby JS'
        },
        {
            logo: {
                src: "logos/WordPress.png",
                alt: "logo Wordpress",
            },
            starNumber: 4,
            link: "https://developer.wordpress.org/",
            title:  'Wordpress'
        },
        {
            logo: {
                src: "logos/git.png",
                alt: "logo Git",
            },
            starNumber: 5,
            link: "https://git-scm.com/",
            title:  'Git'
        },
        {
            logo: {
                src: "logos/linux.png",
                alt: "logo linux",
            },
            starNumber: 4,
            link: "https://www.ubuntu-fr.org/",
            title:  'Linux'
        },
        {
            logo: {
                src: "logos/windows.png",
                alt: "logo windows",
            },
            starNumber: 5,
            link: "https://www.microsoft.com/fr-fr/windows?r=1",
            title:  'Windows'
        },
        {
            logo: {
                src: "logos/office.png",
                alt: "logo Office",
            },
            starNumber: 4,
            link: "https://www.office.com/",
            title:  'Office 365'
        },
        {
            logo: {
                src: "logos/phpstorm.png",
                alt: "logo PhpStorm",
            },
            starNumber: 5,
            link: "https://www.jetbrains.com/fr-fr/phpstorm/",
            title:  'PhpStorm'
        },
        {
            logo: {
                src: "logos/webstorm.png",
                alt: "logo Webstorm",
            },
            starNumber: 5,
            link: "https://www.jetbrains.com/fr-fr/webstorm/",
            title:  'Webstorm'
        },
        {
            logo: {
                src: "logos/vscode.png",
                alt: "logo VsCode",
            },
            starNumber: 5,
            link: "https://code.visualstudio.com/",
            title:  'VsCode'
        },
        {
            logo: {
                src: "logos/docker.png",
                alt: "logo Docker",
            },
            starNumber: 3,
            link: "https://www.docker.com/",
            title:  'Docker'
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
