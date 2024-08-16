
import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import NotFoundPage from "@/domains/NotFoundPage";
import { handleServerRequestError } from "@/helpers/error";
import PagePropsHelper from "@/helpers/SSR.helper";
import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const { locale: contextLocale, defaultLocale = 'ptBR' } = context;
	const locale = contextLocale || defaultLocale;
 
	const meta = {
		path: '/404',
		title: 'Página não encontrada',
		description: 'Oops, a página não foi encontrada',
		ignoreTitlePostfix: false,
		keywords: '404,not-found,freelancer,work,dev',
		locale,
	};
 
	try {
		const sessions = await ContentService.SSRFetchByKeys(['general/fallback'], locale);
		console.log({ sessions });
		
		// return PagePropsHelper.handleServerProps(meta, context, {
		// 	sessions: sessions.map(item => CustomContentHelper.parseContent(item)),
		// });
		
		return PagePropsHelper.handleStaticProps(meta, context);
	} catch (error) {
		handleServerRequestError(error, context);
		return PagePropsHelper.handleStaticProps(meta, context);
	}
};

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
	return <HydratedView viewElement={page} />;
};

export default NotFoundPage;
