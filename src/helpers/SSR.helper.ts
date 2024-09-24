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
		
		return {
			props: {
				meta,
				data: {
					sessions: await ContentService.getRawByKeys(fetchTags, meta.locale) ?? []
				},
			}
		};
	}
	
	public static handleStaticProps(meta: PageMetadata, context: GetStaticPropsContext, data?: object): IPageProps {
		return {
			props: {
				meta,
				data: data ?? {
					sessions: []
				},
			}
		};
	}

}

export default PagePropsHelper;
