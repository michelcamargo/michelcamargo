import styled from 'styled-components';

type GalleryViewProps = {

}

export const GalleryView = styled.div<GalleryViewProps>``;

GalleryView.Container = styled.div<GalleryViewProps>``;

GalleryView.CardItem = styled.div<GalleryViewProps>``;

GalleryView.List = styled.ul<GalleryViewProps>`
  display: flex;
  flex-direction: row;
  column-gap: ${props => props.theme.spacing.medium};
`;

GalleryView.ListItem = styled.li<GalleryViewProps>``;

