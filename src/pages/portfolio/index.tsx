import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import PortfolioPage from "@/domains/PortfolioPage";
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
		path: '/portfolio',
		title: 'Apresentação',
		description: 'Portfolio - Michel Camargo - web developer & UIUX designer',
		ignoreTitlePostfix: false,
		keywords: 'michelcamargo,portfolio,developer,freelancer,work,dev,tech',
		locale,
	};
 
	try {
		const sessions = await ContentService.SSRFetchByKeys(
			['bio/bio', 'work/devstack', 'work/portfolio'], locale
		);
		console.log({ sessions });
		
		// return PagePropsHelper.handleServerProps(meta, context, {
		// 	sessions: await ContentService.SSRFetchByKeys(['bio/bio', 'work/devstack', 'work/portfolio'], locale)
		// });
		
		return PagePropsHelper.handleStaticProps(meta, context);
	} catch (error) {
		handleServerRequestError(error, context);
		return PagePropsHelper.handleStaticProps(meta, context);
	}
};

PortfolioPage.getLayout = function getLayout(page: ReactElement) {
	return <HydratedView viewElement={page} />;
};

export default PortfolioPage;
