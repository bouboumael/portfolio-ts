export type ToggleMenu = () => void;

export type TechnologyProps = {
    logoSrc: string,
    logoAlt: string,
    starNumber: number,
    title?: string,
    link?: string,
};

export type TimelineContent = {
    label: string | number,
    title: string,
    content: string,
}

export type Project = {
    title: string,
    description: string,
    year: number,
    subDescription: string,
    link?: string | null,
    imgSrc?: string,
    imgAlt?: string,
    text?: string,
}

export type ContactForm = {
    firstname: string,
    lastname: string,
    email: string,
    phone?: string,
    subject: string,
    message: string,
}
