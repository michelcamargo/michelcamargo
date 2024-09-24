import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import AuthPage from "@/domains/AuthPage";
import { handleServerRequestError } from "@/helpers/error";
import LocaleHelper from "@/helpers/LocaleHelper.helper";
import PagePropsHelper from "@/helpers/SSR.helper";
import { ViewLayoutEnum } from "@/lib/layout";
import ContentService from "@/services/content.service";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const locale = LocaleHelper.getProperlyPageLocale(context);
 
	const meta = {
		path: '/auth',
		title: 'Autenticação',
		description: 'Autenticação - PixelBay',
		ignoreTitlePostfix: false,
		keywords: 'michelcamargo,bio,developer,freelancer,work,dev,tech',
		locale,
	};
 
	try {
		const sessions = await ContentService.getByKeys(['general/auth'], locale);
		console.log({ sessions });
		
		// return PagePropsHelper.handleServerProps(meta, context, {
		// 	sessions: await ContentService.fetchByKeys(['general/auth'], locale)
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
