import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import HomePage from "@/domains/HomePage";
import { handleServerRequestError } from "@/helpers/error";
import LocaleHelper from "@/helpers/LocaleHelper.helper";
import PagePropsHelper from "@/helpers/SSR.helper";
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
		return PagePropsHelper.handleServerProps(meta, context, ['bio/bio', 'work/devstack']);
	} catch (error) {
		handleServerRequestError(error, context);
		return PagePropsHelper.handleStaticProps(meta, context);
	}
};

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <HydratedView viewElement={page} />;
};

export default HomePage;
