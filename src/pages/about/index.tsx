import { ReactElement } from "react";

import Layout from "@/components/layout";
import NextConfig from "@/configs/next.env";
import AboutPage from "@/domains/About";

async function fetchAboutContent(language?: string) {
  const langQuery = language ? `?lang=${language}` : '';
  
  const response = await fetch(`${NextConfig.APP_URL}/api/content/about-page${langQuery}`, {
    method: 'GET',
    headers: {
    
    }
  });
  
  return response.json();
}

export const getStaticProps = async context => {
  const [homeContent] = await Promise.all([
    fetchAboutContent('pt-BR'),
  ]);
  
  return {
    props: {
      pageContent: homeContent,
    }
  };
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default AboutPage;
