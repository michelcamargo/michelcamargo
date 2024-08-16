import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import { handleServerRequestError } from "@/helpers/error";
import PagePropsHelper from "@/helpers/SSR.helper";
import ContentService from "@/services/content.service";
import cookie from "cookie";
import { GetServerSidePropsContext } from "next";

import PrivacyTermsPage from "../../domains/TermsPage";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const { req, locale: contextLocale, defaultLocale = 'ptBR' } = context;
	const cookies = cookie.parse(req.headers.cookie || '');
	const locale = cookies?.locale ? decodeURIComponent(cookies.locale) : (contextLocale || defaultLocale);
 
	const meta = {
		path: '/terms',
		title: 'Termos de uso e políticas de privacidade',
		description: 'Termos de uso e políticas de privacidade',
		ignoreTitlePostfix: false,
		keywords: 'terms,privacy,compliance',
		locale,
	};
 
	try {
		const sessions = await ContentService.SSRFetchByKeys(['legal/policies', 'legal/compliance'], locale);
		console.log({ sessions });
		
		// return PagePropsHelper.handleServerProps(meta, context, {
		// 	sessions: await ContentService.SSRFetchByKeys(['legal/policies', 'legal/compliance'], locale)
		// });
		
		return PagePropsHelper.handleStaticProps(meta, context);
	} catch (error) {
		handleServerRequestError(error, context);
		return PagePropsHelper.handleStaticProps(meta, context);
	}
};

PrivacyTermsPage.getLayout = function getLayout(page: ReactElement) {
	return <HydratedView viewElement={page} />;
};

export default PrivacyTermsPage;
