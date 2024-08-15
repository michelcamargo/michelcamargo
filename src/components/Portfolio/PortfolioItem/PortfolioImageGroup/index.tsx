import React from 'react';

import CustomImage from "@/components/CustomImage";
import CustomContent from "@/helpers/content.helper";
import { NO_IMAGE_SRC } from "@/helpers/skeleton";
import { CustomImageProps, ImageDimensions } from "@/lib/content";

import Styled from './styles';

interface Props {
	items: Array<CustomContent>
}

const generateImageElements = (imagesData: Array<CustomContent>, dimensions: ImageDimensions) => {
	return imagesData.map((imageData, index: number) => {
  
		const imageSrc = imageData?.getValue('src') ?? '';
  
		const image: CustomImageProps = {
			src: imageSrc.length > 0 ? imageSrc : NO_IMAGE_SRC(dimensions),
			alt: imageData.get('alt')?.getValue() ?? '',
		};
		
		return (
			<CustomImage
				key={index}
				src={image.src}
				alt={`Cover ${index}`}
				width={dimensions.width}
				height={dimensions.height}
			/>
		);
	});
};

const Common = ({ items }: Props) => {
	return (
		<Styled.CommonGrid>
			{JSON.stringify(items)}
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
 
	const dimensions = { width: 420, height: 42 };
	
	return (
		<Styled.CoverGrid container spacing={2}>
			{generateImageElements(items, dimensions).map((element, index) => (
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
