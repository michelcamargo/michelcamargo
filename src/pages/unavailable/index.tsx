import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import UnavailablePage from "@/domains/UnavailablePage";
import LocaleHelper from "@/helpers/LocaleHelper.helper";
import PagePropsHelper from "@/helpers/SSR.helper";
import { ViewLayoutEnum } from "@/lib/layout";
import { GetStaticPropsContext } from "next";

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const locale = LocaleHelper.getProperlyPageLocale(context);
  
	const meta = {
		path: '/unavailable',
		title: 'Serviço indisponível',
		description: 'Página não disponível no momento, por favor aguarde ou solicite suporte',
		ignoreTitlePostfix: false,
		keywords: 'unavailable,error,failed,offine,unavailability,services,web',
		locale: locale
	};
  
	return PagePropsHelper.handleStaticProps(meta, context);
};

UnavailablePage.getLayout = function getLayout(page: ReactElement) {
	return <HydratedView viewElement={page} bypassServerContent layout={ViewLayoutEnum.MINIMAL} />;
};

export default UnavailablePage;
