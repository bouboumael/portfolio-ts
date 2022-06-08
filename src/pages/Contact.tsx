import React from 'react';
import {Helmet} from "react-helmet";
import Layout from "../components/layout/Layout";
import '../assets/styles/contact.scss';
import Form from "../components/form/Form";

const Contact = () => {
    return (
        <div className={'contact'}>
            <Helmet>
                <title>Maël Chariault</title>
                <script src={"https://kit.fontawesome.com/365f79b953.js"} crossOrigin="anonymous"></script>
            </Helmet>
            <Layout>
                <div id="contact" className={'flex flex-col justify-center items-center py-28'}>
                    <h1 className={"mb-12"}>Contact</h1>
                    <div className="flex justify-around w-screen">
                        <section className="contact-presentation">
                            <h2>Maël Chariault</h2>
                        </section>
                        <section className="contact-form w-50">
                            <Form />
                        </section>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Contact;
