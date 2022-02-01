import React, {useEffect, useState} from "react";
import Typewriter from "typewriter-effect";
import Timeline from "../timeline/Timeline";

const SecondView = () => {

    const text: string = '<p class=\"mb-2\">Avant toutes choses laissez moi me présenter.</p>\n' +
        '                    <p class=\"mb-2\">Je suis passionné de nouvelles technologies. Je suis comme de nombreuses personnes le bidouilleur familiale. La personne que l\'on contact quand on à un soucis sur son pc.</p>\n' +
        '                    <p class=\"mb-2\"> Adepte des formations autodidacts, j\'ai su me débrouiller et apprendre au fur et à mesure du temps. </p>\n' +
        '                    <p class=\"mb-2\"> Je me suis pris du développement de part mes expériences personnelles et professionnelles. </p>\n' +
        '                    <p class=\"mb-2\"> Mais trève de bavardage, prenez le temps de regarder mon parcours.</p>'

    const [typewriter, setTypewriter] = useState<boolean>(false);

    useEffect(() => {
        const target: Element | null = document.querySelector<HTMLElement>('.card-description');
        const observer: IntersectionObserver = new IntersectionObserver(target => {
            if (target[0].intersectionRatio > 0 && !typewriter) {
                setTypewriter(true)
            }
        });

        if (target) {
            observer.observe(target);
        }
    }, [])

    return (
        <>
            <div className={'secondView p-20 flex flex-col items-center'}>
                <div id={'card-description'} className="card-description flex flex-col xl:w-1/4 p-5 rounded-md mb-10">
                    <h3 className={'text-5xl mb-10 text-center'}>Mon parcours</h3>
                    <div className={'description'}>
                        {typewriter ?
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString(text)
                                        .start();
                                }}
                                options={{
                                    delay: 40,
                                    cursor: '',
                                }}
                            />
                            : ''
                        }
                    </div>
                </div>
                <Timeline />
            </div>
        </>
    );
};

export default SecondView;
