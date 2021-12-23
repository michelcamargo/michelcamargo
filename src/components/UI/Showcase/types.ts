export type Showcase = {
    id: number,
    title: string,
    description: string,
    link: string,
    linkLabel: string,
    images: [
        {
            src: string,
            alt: string
        }
    ]
}