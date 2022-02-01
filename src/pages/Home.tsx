import React from "react";
import Layout from "../components/layout/Layout";
import {Helmet} from "react-helmet";
import '../assets/styles/home.scss';
import FirstView from "../components/homeparts/FirstView";
import Transition from "../components/transition/Transition";
import SecondView from "../components/homeparts/SecondView";

function Home() {

    const title: string = 'Maël Chariault';
    const description: string = 'Développeur Web & web mobile';

    return (
        <div className={'homepage'}>
            <Helmet>
                <title>Maël Chariault</title>
            </Helmet>
            <Layout>
                <FirstView/>
                <Transition image={'t1.webp'} title={title} text={description}/>
                <SecondView/>
            </Layout>
        </div>
    );
}

export default Home;
