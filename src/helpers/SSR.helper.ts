import { CommonPageProps, PageMetadata } from "@/lib/datahooks";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";

interface IPageProps {
	props: CommonPageProps
}

class PagePropsHelper {

	public static handleServerProps(
		meta: PageMetadata, context: GetServerSidePropsContext, data?: object
	): IPageProps {
		console.log('SERVER:', { meta, data });
		
		return {
			props: {
				meta,
				data: data ?? null,
			}
		};
	}
	
	public static handleStaticProps(meta: PageMetadata, context: GetStaticPropsContext, data?: object): IPageProps {
		console.log('STATIC Props meta:', { meta, data });
		
		return {
			props: {
				meta,
				data: data ?? null,
			}
		};
	}

}

export default PagePropsHelper;
