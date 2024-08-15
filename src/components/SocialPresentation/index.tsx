import React, { HTMLAttributeAnchorTarget } from 'react';

import CustomButton from "@/components/CustomButton";
import CustomContent from "@/helpers/content.helper";
import Image from "next/image";

import Styled from './styles';

interface Props {
  socialData?: CustomContent
}

const SocialPresentation = ({ socialData }: Props) => {
	const socialItems = socialData ? socialData.getChildren() : [];
 
	if (!socialData) {
		return (
			<p>NO SOCIAL DATA</p>
		);
	}
 
	return (
		<Styled.SocialList>
			{socialItems?.map((item, index) => {
				const label = item.getValue('label') as string || '';
				const href = item.getValue('link') as string || '#';
				const icon = item.getValue('icon') as string || null;
				const target = item.getValue('target') as HTMLAttributeAnchorTarget || '_self';

				const logEvent = (socialItem: CustomContent) => {
					return socialItem;
				};

				return (
					<CustomButton key={index}
						callback={() => logEvent(item)}
						anchor={href}
						target={target}
					>
						{ icon && <Image
							alt={item?.key}
							title={label}
							src={icon}
							width={26}
							height={26}
						/>}
						<Styled.SocialItemLabel>
							{label}
						</Styled.SocialItemLabel>
					</CustomButton>
				);
			})}
		</Styled.SocialList>
	);
};

export default SocialPresentation;
