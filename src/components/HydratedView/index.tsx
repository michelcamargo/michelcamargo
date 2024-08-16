import React, { ReactElement, useMemo } from 'react';

import ViewTemplateError from "@/components/HydratedView/ViewTemplateError";
import Layout from "@/components/layout";
import AppConfig from "@/config/next.config";
import CustomContent from "@/helpers/content.helper";
import { CommonPageProps } from "@/lib/datahooks";
import { ViewLayoutEnum } from "@/lib/layout";
import HeadMetadata from "@/pages/_head";
import { useRouter } from "next/router";

interface Props {
  viewElement: ReactElement,
  layout?: ViewLayoutEnum,
  bypassServerContent?: boolean,
}

const HydratedView = ({ viewElement, layout, bypassServerContent }: Props) => {
	const router = useRouter();
	const RenderLayout = layout === ViewLayoutEnum.MINIMAL ? Layout.Minimal : Layout.Common;
	const { meta, data } = useMemo(() => viewElement.props, [viewElement.props]);
 
	console.log('META >>', meta);
	
	const hydratedProps: CommonPageProps = useMemo(() => {
		if (!data) {
			return {
				meta,
				data: null
			};
		}
		
		const { sessions, ...customData } = data;
  
		return {
			meta,
			data: {
				sessions: sessions.length ? new CustomContent({
					key: 'sessions',
					children: sessions,
				}) : null,
				...customData,
			}
		};
	}, [data, meta]);
 
	if (!viewElement) {
		return <ViewTemplateError code={'A-0'} message={'Falha ao carregar layout da página'} />;
	}
 
	if (bypassServerContent || !data) {
		return (
			<>
				<HeadMetadata
					currentURL={`${AppConfig.appUrl}${router.pathname}`}
					title={`${router.pathname.replace('/', '')}`}
					description={meta.description}
					keywords={meta.keywords}
					isProd={AppConfig.environment === 'production'}
					locale={meta.locale}
				/>
				<RenderLayout bypassServerContent>
					{viewElement}
				</RenderLayout>
			</>
		);
	}
 
	return (
		<>
			<HeadMetadata
				currentURL={`${AppConfig.appUrl}${meta.path}`}
				title={meta.ignoreTitlePostfix ? meta.title : `${meta.title} | ${router.pathname.replace('/', '')}`}
				description={meta.description ?? ''}
				keywords={meta.keywords ?? ''}
				isProd={AppConfig.environment === 'production'}
				locale={meta.locale}
			/>
			<RenderLayout hydratedProps={hydratedProps} bypassServerContent={bypassServerContent ?? false}>
				{viewElement}
			</RenderLayout>
		</>
	);
};

export default HydratedView;
