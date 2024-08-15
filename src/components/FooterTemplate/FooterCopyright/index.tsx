import React from 'react';

import Styled from './styles';

const FooterCopyright = () => {
	return (
		<Styled.Wrapper>
			<Styled.Content>
				<Styled.CopyrightText>
					{'Aplicação de cunho apresentativo sem fins lucrativos,'}<br/>
					{'Todos os direitos reservados 2024'}
				</Styled.CopyrightText>
			</Styled.Content>
		</Styled.Wrapper>
	);
};

export default FooterCopyright;
