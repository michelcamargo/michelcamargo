import React from 'react';
import {GalleryContainer, GalleryItem, GalleryWrapper} from "./styles";

type GalleryProps = {
    children?: HTMLCollection;
}

const Gallery: React.FC<GalleryProps> = ({children}) => {

    // responsive gallery

    return (
        <GalleryWrapper>
            <GalleryContainer>
                <GalleryItem>TESTE</GalleryItem>
            </GalleryContainer>
        </GalleryWrapper>
    );
}

export default Gallery;