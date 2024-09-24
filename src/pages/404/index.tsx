
import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import NotFoundPage from "@/domains/NotFoundPage";
import { handleServerRequestError } from "@/helpers/error";
import LocaleHelper from "@/helpers/LocaleHelper.helper";
import PagePropsHelper from "@/helpers/SSR.helper";
import { PageMetadata } from "@/lib/datahooks";
import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const locale = LocaleHelper.getProperlyPageLocale(context);
	const meta: PageMetadata = {
		path: '/404',
		title: 'Página não encontrada',
		description: 'Oops, a página não foi encontrada',
		ignoreTitlePostfix: false,
		keywords: '404,not-found,freelancer,work,dev',
		locale,
	};
 
	try {
		const sessions = await ContentService.getRawByKeys(['general/fallback'], locale);
		return PagePropsHelper.handleStaticProps(meta, context, { sessions });
	} catch (error) {
		handleServerRequestError(error, context);
		return PagePropsHelper.handleStaticProps(meta, context);
	}
};

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
	return <HydratedView viewElement={page} />;
};

export default NotFoundPage;
