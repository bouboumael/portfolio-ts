import React from "react";
import Layout from "../components/layout/Layout";
import {Helmet} from "react-helmet";
import '../assets/styles/home.scss';
import FirstView from "../components/homeparts/FirstView";
import Transition from "../components/transition/Transition";
import SecondView from "../components/homeparts/SecondView";
import ThirdView from "../components/homeparts/ThirdView";
import FourthView from "../components/homeparts/FourthView";

function Home() {

    const title: string = 'Maël Chariault';
    const description: string = 'Développeur Web & web mobile';

    return (
        <div className={'homepage'}>
            <Helmet>
                <title>Maël Chariault</title>
            </Helmet>
            <Layout>
                <section id={'home'}>
                    <FirstView/>
                </section>
                <section id={'parcours'}>
                    <Transition image={'t1.webp'} title={title} text={description}/>
                    <div className="mb-20">
                        <SecondView/>
                    </div>
                </section>
                <section id={'competences'}>
                    <Transition image={'t2.webp'} title={'Hard skills'} text={"Les technologies que je connais."}/>
                    <div className="mb-20">
                        <ThirdView/>
                    </div>
                </section>
                <section id={'projets'}>
                    <Transition image={'t3.webp'} title={'Mes Projets'} text={"Projets professionnels ou Personnels"}/>
                    <div>
                        <FourthView />
                    </div>
                </section>
            </Layout>
        </div>
    );
}

export default Home;
