import NextApi from "@/configs/next.env";
import HomePage from "@/domains/home";
import fetchHeaderContent from "@/services/header-service";
import AboutPage from "@/domains/about";

async function fetchAboutContent(language?: string) {
  const langQuery = language ? `?lang=${language}` : '';
  
  const response = await fetch(`${NextApi.PUBLIC_BASE_URL}/api/content/about-page${langQuery}`, {
    method: 'GET',
    headers: {
    
    }
  });
  
  return response.json();
}

export const getStaticProps = async (context) => {
  const [homeContent, headerContent] = await Promise.all([
    fetchAboutContent('pt-BR'),
    fetchHeaderContent('home', 'pt-BR'),
  ])
  
  return {
    props: {
      pageContent: homeContent,
      dataHooks: {
        header: headerContent
      }
    }
  }
}

export default AboutPage;
