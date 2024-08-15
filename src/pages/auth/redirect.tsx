import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import RedirectPage from "@/domains/RedirectPage";
import { handleServerRequestError } from "@/helpers/error";
import { ViewLayoutEnum } from "@/lib/layout";
import ContentService from "@/services/content.service";
import cookie from "cookie";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const { req, locale: contextLocale, defaultLocale = 'ptBR' } = context;
	const cookies = cookie.parse(req.headers.cookie || '');
	const locale = cookies?.locale ? decodeURIComponent(cookies.locale) : (contextLocale || defaultLocale);
  
	const pageMeta = {
		path: '/auth/redirect',
		title: 'Autenticando',
		description: 'Redirecionamento autenticação - Pixelbay',
		ignoreTitlePostfix: false,
		keywords: '',
	};
  
	try {
		const sessions = await ContentService.fetchByKeys(['general/auth'], locale) ?? [];

		return {
			props: {
				serverViewData: {
					metadata: pageMeta,
					content: {
						sessions,
					},
				},
				locale,
			}
		};
	} catch (error) {
		handleServerRequestError(error, context);
		return {
			props: {
				serverViewData: {
					metadata: pageMeta,
					content: {
						sessions: [],
					},
				},
				locale,
			}
		};
	}
};

RedirectPage.getLayout = function getLayout(page: ReactElement) {
	return <HydratedView viewElement={page} layout={ViewLayoutEnum.MINIMAL} />;
};

export default RedirectPage;
