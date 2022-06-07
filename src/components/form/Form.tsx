import React, {useState} from 'react';
import {ContactForm, ViolationList} from "../../types/portfolioTypes";
import {ContactPost} from "../../datas/contact";

interface Violation {
    propertyPath: string;
    message: string;
    code: string;
}

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
    const [errors, setErrors] = useState<any>([]);
    const [success, setSuccess] = useState<object>({});

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        ContactPost(form)
            .then(({data}) => {
                setSuccess(data);
                setForm(trameForm);
            })
            .catch(({response}) => {
                const {violations} = response.data;
                let objErrors: ViolationList = {};
                violations.map((violation: Violation) => {
                    objErrors = {
                        ...objErrors,
                        [violation.propertyPath]: violation.message,
                    }
                });
                setErrors(objErrors);
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
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${ errors.firstname ? 'border-red-500' : "border-grey-200" } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                            id="firstname"
                            type="text"
                            placeholder="Maël"
                            name={'firstname'}
                            value={form?.firstname}
                            onChange={(e) => setForm({...form, firstname: e.target.value})}
                        />
                        {errors.firstname ? <p className="text-red-500 text-xs italic">{errors.firstname}</p> : null}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="lastname">
                            Nom
                        </label>
                        <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${ errors.lastname ? 'border-red-500' : "border-grey-200" } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            id="lastname"
                            type="text"
                            placeholder="Chariault"
                            name={'lastname'}
                            value={form?.lastname}
                            onChange={(e) => setForm({...form, lastname: e.target.value})}
                        />
                        {errors.lastname ? <p className="text-red-500 text-xs italic">{errors.lastname}</p> : null}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="email">
                            Email
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${ errors.email ? 'border-red-500' : "border-grey-200" } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                            id="email"
                            type="email"
                            placeholder="mael.chariault@gmail.com"
                            name={'email'}
                            value={form?.email}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                        />
                        {errors.email ? <p className="text-red-500 text-xs italic">{errors.email}</p> : null}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="phone">
                            Téléphone
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${ errors.phone ? 'border-red-500' : "border-grey-200" } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            id="phone"
                            type="text"
                            placeholder="0608613088"
                            name={'phone'}
                            value={form?.phone}
                            onChange={(e) => setForm({...form, phone: e.target.value})}
                        />
                        {errors.phone ? <p className="text-red-500 text-xs italic">{errors.phone}</p> : null}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="subject">
                            Sujet
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${ errors.subject ? 'border-red-500' : "border-grey-200" } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            id="subject"
                            type="text"
                            placeholder="Proposition d'embauche"
                            name={'subject'}
                            value={form?.subject}
                            onChange={(e) => setForm({...form, subject: e.target.value})}
                        />
                        {errors.subject ? <p className="text-red-500 text-xs italic">{errors.subject}</p> : null}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${ errors.message ? 'border-red-500' : "border-grey-200" } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            id="message"
                            rows={6}
                            placeholder="Laissez votre message ici"
                            name={'message'}
                            value={form?.message}
                            onChange={(e) => setForm({...form, message: e.target.value})}
                        />
                        {errors.message ? <p className="text-red-500 text-xs italic">{errors.message}</p> : null}
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
