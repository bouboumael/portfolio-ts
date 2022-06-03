import React from 'react';
import {Helmet} from "react-helmet";
import Layout from "../components/layout/Layout";
import '../assets/styles/contact.scss';

const Contact = () => {
    return (
        <div className={'homepage'}>
            <Helmet>
                <title>Maël Chariault</title>
                <script src={"https://kit.fontawesome.com/365f79b953.js"} crossOrigin="anonymous"></script>
            </Helmet>
            <Layout>
                <div id="contact">
                    <h1>Contact</h1>
                </div>
            </Layout>
        </div>
    )
}

export default Contact;
