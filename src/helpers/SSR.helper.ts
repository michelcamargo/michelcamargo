import { CustomContentType } from "@/lib/content";
import { CommonPageProps, PageMetadata } from "@/lib/datahooks";
import ContentService from "@/services/content.service";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";

interface IPageProps {
	props: CommonPageProps<CustomContentType>
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
	
	public static handleStaticProps(meta: PageMetadata, context: GetStaticPropsContext): IPageProps {
		console.warn({ context });
		
		return {
			props: {
				meta,
				data: {},
			}
		};
	}

}

export default PagePropsHelper;
