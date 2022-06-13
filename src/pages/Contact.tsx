import React from 'react';
import {Helmet} from "react-helmet";
import Layout from "../components/layout/Layout";
import '../assets/styles/contact.scss';
import Form from "../components/form/Form";
import mael from '../assets/images/mael2.webp';

const Contact = () => {
    return (
        <div className={'contact'}>
            <Helmet>
                <title>Maël Chariault</title>
            </Helmet>
            <Layout>
                <div id="contact" className={'flex flex-col justify-center items-center py-24'}>
                    <h1 className={"mt-40 mb-12 md:my-12"}>Contact</h1>
                    <div className="flex flex-col lg:flex-row w-full justify-between">
                        <section className="contact-presentation w-full lg:w-1/2 mb-24 px-10 flex flex-col justify-start text-center items-center">
                            <img src={mael} alt={"Photo de Maël"} className={"w-1/2 my-6"}/>
                            <h2 className={""}>Maël Chariault</h2>
                            <h3 className={"text-xl mb-2"}>Développeur Full Stack </h3>
                            <p>Définissons un projet commun</p>
                        </section>
                        <section className="contact-form w-full lg:w-1/2 px-10">
                            <Form />
                        </section>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Contact;
