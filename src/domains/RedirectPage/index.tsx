import React, {useCallback, useEffect, useMemo} from 'react';
import {CustomNextPage} from "@/lib/layout";
import {ServerViewProps} from "@/lib/datahooks";
import Styled, { StyledProps } from './styles';
import BrandLogo from "@/components/BrandLogo";
import CustomContent from "@/helpers/content";
import {useRouter} from "next/router";
import Toast from "@/components/Toast";
import ExternalConfig from "@/config/external.config";

interface Props extends StyledProps {
  serverViewData: ServerViewProps<CustomContent>
}

const RedirectPage: CustomNextPage<Props> = () => {
	const router = useRouter();
	
	const { token, key } = useMemo(() => {
		const { token, key } = router.query;
		return { token: token as string, key: key as string }
	}, [router.query])
	
	const clearQueryParams = useCallback(() => {
		router.replace(router.pathname);
	}, []);
	
	const redirect = useMemo(() => () => {
		setTimeout(() => {
      window.location.href = `${ExternalConfig.managerAppUrl}/auth?token=${token}`;
    }, 1500);
	}, [token]);
	
	useEffect(() => {
		if (!token || !key) {
			clearQueryParams();
			Toast.Info({
				message: 'Nada a fazer'
			})
			router.push('/');
			return;
		}
		
		redirect();
	}, []);
	
	return (
		<Styled.PageWrapper>
			<Styled.PageContainer>
				<Styled.PageContent>
					<Styled.Heading>
						<BrandLogo width={86} />
						<Styled.HeadingTitle variant={'h1'}>
							{`Login bem sucedido.\nRedirecionando-se à plataforma`}
						</Styled.HeadingTitle>
						<Styled.HeadingDescription variant={'h6'}>
							{`Aguarde um momento\nVocê será conectado em breve.`}
						</Styled.HeadingDescription>
					</Styled.Heading>
				</Styled.PageContent>
			</Styled.PageContainer>
		</Styled.PageWrapper>
	);
};

export default RedirectPage;
