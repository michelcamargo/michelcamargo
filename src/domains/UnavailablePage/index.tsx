import React from 'react';
import { CustomNextPage } from "@/lib/layout";
import Styled from './styles';
import BrandLogo from "@/components/BrandLogo";

const UnavailablePage: CustomNextPage = () => {
	return (
		<Styled.PageWrapper>
			<Styled.PageContainer>
				<Styled.PageContent>
					<Styled.Heading>
						<BrandLogo width={86} />
						<Styled.HeadingTitle variant={'h1'}>
							Serviço indisponível no momento
						</Styled.HeadingTitle>
						<Styled.HeadingDescription variant={'h6'}>
							{`Não foi possível comunicar-se com os servidores\nPor favor tente novamente mais tarde.`}
						</Styled.HeadingDescription>
					</Styled.Heading>
				</Styled.PageContent>
			</Styled.PageContainer>
		</Styled.PageWrapper>
	);
};

export default UnavailablePage;
