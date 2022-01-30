import React from "react";
import Layout from "../components/layout/Layout";
import {Helmet} from "react-helmet";
import '../assets/styles/home.scss';
import FirstView from "../components/homeparts/FirstView";

function Home() {

    return (
        <div className={'homepage'}>
            <Helmet>
                <title>Maël Chariault</title>
            </Helmet>
            <Layout>
                <FirstView/>
            </Layout>
        </div>
    );
}

export default Home;
