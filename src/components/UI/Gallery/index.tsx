import React from 'react';
import { GalleryView } from "./styles";

type GalleryProps = {
    children: Array<React.ReactNode>;
    layout?: string;
}

const Gallery: React.FC<GalleryProps> = ({children, layout}) => {

    children.forEach((child) => {
        console.log(child);
    });


    let galleryClass = "gallery";
    let galleryContainerClass = "galleryContainer";
    let galleryItemClass = "galleryItem";

    if(layout === "card") {
        galleryItemClass += " galleryCard";

        return (
            <GalleryView className={galleryClass}>
                <GalleryView.Container className={galleryContainerClass}>
                    <GalleryView.CardItem className={galleryItemClass}>
                        {children}
                    </GalleryView.CardItem>
                </GalleryView.Container>
            </GalleryView>
        )
    } else {
        galleryItemClass += " galleryListItem";

        return (
            <GalleryView className={galleryClass}>
                <GalleryView.List className={galleryContainerClass}>
                    <GalleryView.ListItem className={galleryItemClass}>
                        {children}
                    </GalleryView.ListItem>
                </GalleryView.List>
            </GalleryView>
        );
    }
}

export default Gallery;