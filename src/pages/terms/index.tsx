import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import { handleServerRequestError } from "@/helpers/error";
import LocaleHelper from "@/helpers/LocaleHelper.helper";
import PagePropsHelper from "@/helpers/SSR.helper";
import { PageMetadata } from "@/lib/datahooks";
import { GetServerSidePropsContext } from "next";

import PrivacyTermsPage from "../../domains/TermsPage";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const locale = LocaleHelper.getProperlyPageLocale(context);
	const meta: PageMetadata = {
		path: '/terms',
		title: 'Termos de uso e políticas de privacidade',
		description: 'Termos de uso e políticas de privacidade',
		ignoreTitlePostfix: false,
		keywords: 'terms,privacy,compliance',
		locale,
	};
 
	try {
		return PagePropsHelper.handleServerProps(meta, context, ['legal/policies', 'legal/compliance']);
	} catch (error) {
		handleServerRequestError(error, context);
		return PagePropsHelper.handleStaticProps(meta, context);
	}
};

PrivacyTermsPage.getLayout = function getLayout(page: ReactElement) {
	return <HydratedView viewElement={page} />;
};

export default PrivacyTermsPage;
