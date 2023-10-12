import React from 'react';

import CustomImage from "@/components/CustomImage";
import CustomContent from "@/helpers/custom-content";
import { CustomImageProps } from "@/helpers/image";

import Styled from './styles';

interface Props {
	items: Array<CustomContent>
}

const generateImageElements = (imagesData: Array<CustomContent>) => {
  return imagesData.map((imageData, index: number) => {
    const image: CustomImageProps = {
      src: imageData.getChild('src')?.getContent() ?? '',
      alt: imageData.getChild('alt')?.getContent() ?? '',
    };
		
    return (
      <CustomImage key={index} src={image.src} alt={`Cover ${index}`} />
    );
  });
};

const Common = ({ items }: Props) => {
  return (
    <Styled.CommonGrid>
			
    </Styled.CommonGrid>
  );
};

const Cover = ({ items }: Props) => {
  let columns = 3; // Número padrão de colunas
  if (items.length === 1) {
    columns = 1; // Apenas uma imagem, uma coluna
  } else if (items.length <= 4) {
    columns = 2; // Até 4 imagens, duas colunas
  }
	
  return (
    <Styled.CoverGrid container spacing={2}>
      {generateImageElements(items).map((element, index) => (
        <Styled.GridItem item xs={12} sm={6 / columns} key={index}>
          {element}
        </Styled.GridItem>
      ))}
    </Styled.CoverGrid>
  );
};

export default {
  Common, Cover
};
