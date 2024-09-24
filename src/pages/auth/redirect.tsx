import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import RedirectPage from "@/domains/RedirectPage";
import { handleServerRequestError } from "@/helpers/error";
import LocaleHelper from "@/helpers/LocaleHelper.helper";
import PagePropsHelper from "@/helpers/SSR.helper";
import { PageMetadata } from "@/lib/datahooks";
import { ViewLayoutEnum } from "@/lib/layout";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const locale = LocaleHelper.getProperlyPageLocale(context);
	const meta: PageMetadata = {
		path: '/auth/redirect',
		title: 'Autenticando',
		description: 'Redirecionamento autenticação - Pixelbay',
		ignoreTitlePostfix: false,
		keywords: '',
		locale,
	};
 
	try {
		return PagePropsHelper.handleServerProps(meta, context, ['bio/bio', 'work/devstack']);
	} catch (error) {
		handleServerRequestError(error, context);
		return PagePropsHelper.handleStaticProps(meta, context);
	}
};

RedirectPage.getLayout = function getLayout(page: ReactElement) {
	return <HydratedView viewElement={page} layout={ViewLayoutEnum.MINIMAL} />;
};

export default RedirectPage;
