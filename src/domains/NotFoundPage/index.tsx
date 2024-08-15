import React, { useMemo } from 'react';

import DefaultViewHeading from "@/components/CommonViewHeading";
import CustomButton from "@/components/CustomButton";
import LoadingFeedback from "@/components/LoadingFeedback";
import { CustomNextPage } from "@/lib/layout";
import HomeIcon from '@mui/icons-material/Home';

import Styled from './styles';

const NotFoundPage: CustomNextPage = ({ data }) => {
	const sessions = useMemo(() => data?.sessions, [data]);
  
	console.log('serverViewData', data);
  
	if (!sessions) return <LoadingFeedback />;
  
	return (
		<Styled.PageWrapper>
			<DefaultViewHeading title={'404 Página não encontrada'} />
			<div>{JSON.stringify(sessions)}</div>
			<CustomButton anchor={'/'} beforeIcon={<HomeIcon />}>
				Voltar ao ínicio
			</CustomButton>
		</Styled.PageWrapper>
	);
};

export default NotFoundPage;
