import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import HomePage from "@/domains/HomePage";
import { handleServerRequestError } from "@/helpers/error";
import LocaleHelper from "@/helpers/LocaleHelper.helper";
import PagePropsHelper from "@/helpers/SSR.helper";
import ContentService from "@/services/content.service";
import { GetServerSidePropsContext, } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const locale = LocaleHelper.getProperlyPageLocale(context);
 
	const meta = {
		path: '/',
		title: 'Início - Michel Camargo',
		description: 'Michel Camargo - web developer & UIUX designer',
		ignoreTitlePostfix: false,
		keywords: 'michelcamargo,bio,developer,freelancer,work,dev,tech',
		locale,
	};
 
	try {
		const sessions = await ContentService.fetchByKeys(['bio/bio', 'work/devstack'], locale);
		console.log('sessions on server >>', sessions);
		
		return PagePropsHelper.handleServerProps(meta, context, {
			sessions
		});
		
		// return PagePropsHelper.handleStaticProps(meta, context);
	} catch (error) {
		handleServerRequestError(error, context);
		return PagePropsHelper.handleStaticProps(meta, context);
	}
};

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <HydratedView viewElement={page} />;
};

export default HomePage;
