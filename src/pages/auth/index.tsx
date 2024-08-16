import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import AuthPage from "@/domains/AuthPage";
import { handleServerRequestError } from "@/helpers/error";
import PagePropsHelper from "@/helpers/SSR.helper";
import { ViewLayoutEnum } from "@/lib/layout";
import ContentService from "@/services/content.service";
import cookie from "cookie";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const { req, locale: contextLocale, defaultLocale = 'ptBR' } = context;
	const cookies = cookie.parse(req.headers.cookie || '');
	const locale = cookies?.locale ? decodeURIComponent(cookies.locale) : (contextLocale || defaultLocale);
 
	const meta = {
		path: '/auth',
		title: 'Autenticação',
		description: 'Autenticação - PixelBay',
		ignoreTitlePostfix: false,
		keywords: 'michelcamargo,bio,developer,freelancer,work,dev,tech',
		locale,
	};
 
	try {
		const sessions = await ContentService.SSRFetchByKeys(['general/auth'], locale);
		console.log({ sessions });
		
		// return PagePropsHelper.handleServerProps(meta, context, {
		// 	sessions: await ContentService.SSRFetchByKeys(['general/auth'], locale)
		// });
		
		return PagePropsHelper.handleStaticProps(meta, context);
		
	} catch (error) {
		handleServerRequestError(error, context);
		return PagePropsHelper.handleStaticProps(meta, context);
	}
};

AuthPage.getLayout = function getLayout(page: ReactElement) {
	return <HydratedView viewElement={page} layout={ViewLayoutEnum.MINIMAL} />;
};

export default AuthPage;
