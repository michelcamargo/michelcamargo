export type Showcase = {
    id: number,
    title: string,
    description: string,
    link: string,
    linkLabel: string,
    images: [
        {
            model: string,
            src: string,
            alt: string
        }
    ]
}