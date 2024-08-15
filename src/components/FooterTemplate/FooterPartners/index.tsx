import React from 'react';

interface Props {
  partnerList?: Array<string>
}

import Styled from './styles';

const FooterPartners = ({ partnerList = [] }: Props) => {
	if (!partnerList?.length) return <></>;
  
	return (
		<Styled.Wrapper>
			FooterPartners
		</Styled.Wrapper>
	);
};

export default FooterPartners;
