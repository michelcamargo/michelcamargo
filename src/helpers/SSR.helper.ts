import { CustomContentType } from "@/lib/content";
import { CommonPageProps, PageMetadata } from "@/lib/datahooks";
import ContentService from "@/services/content.service";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";

interface IPageProps {
	props?: CommonPageProps<CustomContentType>,
	redirect?: { destination: string; permanent?: boolean }
}

class PagePropsHelper {

	public static async handleServerProps(
		meta: PageMetadata, context: GetServerSidePropsContext, fetchTags: string[] = []
	): Promise<IPageProps> {
		console.warn({ context });
		
		const sessions = await ContentService.getRawByKeys(fetchTags, meta.locale) ?? [];
		
		return {
			props: {
				meta,
				data: {
					sessions,
				},
			}
		};
	}
	
	public static handleStaticProps(meta: PageMetadata, context: GetStaticPropsContext, redirectUrl?: string): IPageProps {
		const { locale } = meta;
		
		console.warn({ context, locale });
		
		if (redirectUrl) {
			return {
				redirect: {
					destination: '/unavailable',
					permanent: false,
				},
			};
		}
		
		return {
			props: {
				meta,
				data: {},
			}
		};
	}

}

export default PagePropsHelper;
