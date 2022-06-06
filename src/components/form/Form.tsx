import React, {useState} from 'react';
import {ContactForm} from "../../types/portfolioTypes";
import {ContactPost} from "../../datas/contact";

const Form = () => {

    const trameForm: ContactForm = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    }

    const [form, setForm] = useState<ContactForm>(trameForm);
    const [error, setError] = useState<object>({});
    const [success, setSuccess] = useState<object>({});

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        ContactPost(form)
            .then(({data}) => {
                setSuccess(data);
                setForm(trameForm);
            })
            .catch(({response}) => {
                setError(response)
            })
    }

    return (
        <div className={'contact-form'}>
            <form className="w-full max-w-lg" onSubmit={e => onSubmit(e)}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="firstname">
                            Prénom
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="firstname"
                            type="text"
                            placeholder="Maël"
                            name={'firstname'}
                            value={form?.firstname}
                            onChange={(e) => setForm({...form, firstname: e.target.value})}
                        />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="lastname">
                            Nom
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="lastname"
                            type="text"
                            placeholder="Chariault"
                            name={'lastname'}
                            value={form?.lastname}
                            onChange={(e) => setForm({...form, lastname: e.target.value})}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="email"
                            type="email"
                            placeholder="mael.chariault@gmail.com"
                            name={'email'}
                            value={form?.email}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="phone">
                            Téléphone
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="phone"
                            type="text"
                            placeholder="0608613088"
                            name={'phone'}
                            value={form?.phone}
                            onChange={(e) => setForm({...form, phone: e.target.value})}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="city">
                            Sujet
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="city"
                            type="text"
                            placeholder="Proposition d'embauche"
                            name={'subject'}
                            value={form?.subject}
                            onChange={(e) => setForm({...form, subject: e.target.value})}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="message"
                            rows={6}
                            placeholder="Laissez votre message ici"
                            name={'message'}
                            value={form?.message}
                            onChange={(e) => setForm({...form, message: e.target.value})}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <button className="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Envoyer
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;
