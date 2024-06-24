import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import AboutPage from "@/domains/AboutPage";
import ContentService from "@/services/content.service";
import {GetServerSidePropsContext} from "next";
import I8n from "@/config/i8n";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { locale, defaultLocale = 'ptBR' } = context;
  
  const pageMeta = {
    path: '/about',
    title: 'Sobre mim',
    description: 'Michel Camargo - web developer & UIUX designer',
    ignoreTitlePostfix: false,
    keywords: 'michelcamargo,bio,developer,freelancer,work,dev,tech',
  }
  
  try {
    const sessions = await ContentService.fetchByKeys(['bio/bio', 'work/devstack'], locale ?? defaultLocale);
    
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
  } catch (e) {
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

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} />;
};

export default AboutPage;
