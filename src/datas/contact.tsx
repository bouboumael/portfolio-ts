import {api} from "../services/getApi";
import {ContactForm} from "../types/portfolioTypes";

export const ContactPost = async (data: ContactForm) => {
    return await api.post(
        '/contacts',
        data,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        });
}
