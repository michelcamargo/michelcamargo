import React, { useMemo } from "react";

import { MinimalHeader } from "@/components/HeaderTemplate";
import LoadingFeedback from "@/components/LoadingFeedback";
import { CustomNextPage } from "@/lib/layout";

import AuthenticationForm from "../../components/CustomForms/Authentication";
import Styled from './styles';

const AuthPage: CustomNextPage = ({ data }) => {
	const sessions = useMemo(() => data?.sessions, [data]);
 
	const {
		heading: _heading, form: _form, buttons: _buttons
	} = useMemo(() => {
		return {
			heading: sessions?.get?.('heading'),
			form: sessions?.get?.('form'),
			buttons: sessions?.get?.('buttons')
		};
	}, [sessions]);
 
	if (!sessions) return <LoadingFeedback />;
 
	return (
		<Styled.PageWrapper>
			<MinimalHeader />
			<Styled.Content>
				<Styled.MainColumn>
					{/*<h1>{sessions[0].getContent('title')}</h1>*/}
					{/*<h2>{sessions[0].getContent('description')}</h2>*/}
					<AuthenticationForm />
				</Styled.MainColumn>
			</Styled.Content>
		</Styled.PageWrapper>
	);
};

export default AuthPage;
