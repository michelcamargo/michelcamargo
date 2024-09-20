import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import LinkTreePage from "@/domains/LinkTreePage";
import { handleServerRequestError } from "@/helpers/error";
import LocaleHelper from "@/helpers/LocaleHelper.helper";
import PagePropsHelper from "@/helpers/SSR.helper";
import { PageMetadata } from "@/lib/datahooks";
import { ViewLayoutEnum } from "@/lib/layout";
import ContentService from "@/services/content.service";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const locale = LocaleHelper.getProperlyPageLocale(context);
	const meta: PageMetadata = {
		path: '/links',
		title: 'Referências',
		description: 'Referências e links - Michel Camargo - web developer & UIUX designer',
		ignoreTitlePostfix: false,
		keywords: 'michelcamargo,developer,links,social,freelancer,work,dev,tech',
		locale,
	};
 
	try {
		const sessions = await ContentService.fetchByKeys(['links/links', 'links/social'], locale);
		console.log({ sessions });
		
		// return PagePropsHelper.handleServerProps(meta, context, {
		// 	sessions: await ContentService.fetchByKeys(['links/links', 'links/social'], locale)
		// });
		
		return PagePropsHelper.handleStaticProps(meta, context);
	} catch (error) {
		handleServerRequestError(error, context);
		return PagePropsHelper.handleStaticProps(meta, context);
	}
};

LinkTreePage.getLayout = function getLayout(page: ReactElement) {
	return <HydratedView viewElement={page} layout={ViewLayoutEnum.MINIMAL} />;
};

export default LinkTreePage;
