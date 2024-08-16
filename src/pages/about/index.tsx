import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import AboutPage from "@/domains/AboutPage";
import CustomContentHelper from "@/helpers/custom-content.helper";
import { handleServerRequestError } from "@/helpers/error";
import PagePropsHelper from "@/helpers/SSR.helper";
import ContentService from "@/services/content.service";
import cookie from "cookie";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const { req, locale: contextLocale, defaultLocale = 'ptBR' } = context;
	const cookies = cookie.parse(req.headers.cookie || '');
	const locale = cookies?.locale ? decodeURIComponent(cookies.locale) : (contextLocale || defaultLocale);
 
	const meta = {
		path: '/about',
		title: 'Sobre mim',
		description: 'Michel Camargo - web developer & UIUX designer',
		ignoreTitlePostfix: false,
		keywords: 'michelcamargo,bio,developer,freelancer,work,dev,tech',
		locale,
	};
 
	try {
		const sessions = await ContentService.SSRFetchByKeys(['bio/bio', 'work/devstack'], locale);
		console.log({ sessions });
		
		return PagePropsHelper.handleServerProps(meta, context, {
			sessions: sessions.map(item => CustomContentHelper.parseContent(item)),
		});
	} catch (error) {
		handleServerRequestError(error, context);
		return PagePropsHelper.handleStaticProps(meta, context);
	}
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
	return <HydratedView viewElement={page} />;
};

export default AboutPage;
