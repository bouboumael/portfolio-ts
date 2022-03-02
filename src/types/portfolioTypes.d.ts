export type ToggleMenu = () => void;

export type TechnologyProps = {
    logo: {
        src: string,
        alt: string,
    },
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
    img?: {
        src: string,
        alt: string,
    };
    text?: string,
}
