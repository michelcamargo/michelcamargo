import Head from "next/head";
import styles from './AboutPage.module.scss';
import { PageData } from "@/lib/page";
import { HeaderData } from "@/lib/header";
import useClassNames from "@/hooks/useClassnames";

interface Props {
  pageContent: PageData,
  dataHooks: {
    header: HeaderData,
    footer?: any
  }
}

export default function AboutPage({pageContent, dataHooks}: Props) {
  const { head } = pageContent;
  
  const Metadata = () => (
    <Head>
      <title>{head.title}</title>
      <meta name="description" content={head.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
  
  const { sessions } = pageContent.body;
  
  const sessionHero = sessions.find(session => session.key === 'hero');
  
  const HeroSessionClassNames = useClassNames([
    styles.session_container,
    styles.container,
  ]);
  
  return (
    <>
      <Metadata />
      <main className={styles.page_wrapper}>
        <div className={styles.page_content}>
          <div className={HeroSessionClassNames}>
            {JSON.stringify(sessionHero.content)}
          </div>
        </div>
      </main>
    </>
  );
}
