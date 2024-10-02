import React, { useMemo } from "react";

import { MinimalHeader } from "@/components/HeaderTemplate";
import LoadingFeedback from "@/components/LoadingFeedback";
import { CustomNextPage } from "@/lib/layout";

import AuthenticationForm from "../../components/CustomForms/Authentication";
import Styled from './styles';

const PAGE_AUTH__HEADING = {
	title: "Authentication",
	description: "Sign in or create a new account",
};

const AuthPage: CustomNextPage = ({ data }) => {
	const sessions = useMemo(() => data?.sessions, [data]);
	
	const formInfo = useMemo(() => {
		const summary = sessions?.get('auth-form');
		const formFields = summary?.getChildren('fields');
		
		return {
			// fields: summary.map(item => ({
			// 	name: item.getValue('name'),
			// 	type: item.getValue('type'),
			// 	label: item.getValue('label'),
			// 	placeholder: item.getValue('placeholder'),
			// 	required: item.getValue('required'),
			// }))
			fields: formFields?.length ? formFields.map(item => {
				
				console.log({ name: item.getValue('name'), label: item.getValue('label') });
				
				const field = {
					name: item.getValue('name'),
					type: item.getValue('type'),
					label: item.getValue('label'),
					placeholder: item.getValue('placeholder'),
					required: Boolean(item.getValue('required')),
				};
					
				console.log({ before: item, after: field });
				return field;
			}) : [],
			actions: [],
		};
	}, [sessions]);
	
	const {
		title, description
	} = useMemo(() => {
		const pageInfo = sessions?.get('content');
		
		return pageInfo ? {
			title: pageInfo?.getValue('title'),
			description: pageInfo?.getValue('description'),
		} : PAGE_AUTH__HEADING;
		
	}, [sessions]);
	
	console.log({ formInfo });
	
	if (!sessions) return <LoadingFeedback />;
	
	return (
		<Styled.PageWrapper>
			<MinimalHeader />
			<Styled.Content>
				<Styled.MainColumn>
					<h1>{title}</h1>
					<h2>{description}</h2>
					<AuthenticationForm />
				</Styled.MainColumn>
			</Styled.Content>
		</Styled.PageWrapper>
	);
};

export default AuthPage;
