import { CommonPageProps, PageData, PageMetadata } from "@/lib/datahooks";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";

interface IPageProps {
	props: CommonPageProps
}

class PagePropsHelper {

  public static handleServerProps(meta: PageMetadata, context: GetServerSidePropsContext, data?: PageData): IPageProps {
    return {
      props: {
        meta,
	      data,
      }
    };
  }
	
  public static handleStaticProps(meta: PageMetadata, context: GetStaticPropsContext, data?: PageData): IPageProps {
    return {
      props: {
        meta,
	      data: data ? data : {
          sessions: []
	      },
      }
    };
  }
	
}

export default PagePropsHelper;
