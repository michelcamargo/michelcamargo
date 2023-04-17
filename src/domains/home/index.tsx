import Head from "next/head";
import styles from './HomePage.module.scss';
import { PageData } from "@/lib/page";
import { HeaderData } from "@/lib/header";
import useClassNames from "@/hooks/classnames";

interface Props {
  pageContent: PageData,
  dataHooks: {
    header: HeaderData,
    footer?: any
  }
}

export default function HomePage({pageContent, dataHooks}: Props) {
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
  ])
  
  
  const PageHeading = (heading, subHeading) => {
    console.log(heading, subHeading);
    
    return (
      <div>
        <h2>
          {heading.content}
        </h2>
        <h3>
          {subHeading.content}
        </h3>
      </div>
    )
  }
  
  return (
    <>
      <Metadata />
      <main className={styles.page_wrapper}>
        <div className={styles.page_content}>
          <div className={HeroSessionClassNames}>
            <PageHeading
              heading={sessionHero.content.find(item => item.key === 'heading')}
              subHeading={sessionHero.content.find(item => item.key === 'subHeading')}
            />
            {/*<h3>*/}
            {/*  {sessionHero.content.find(item => item.key === 'subHeading' ? (<>{item.content}</>) : (<>{'not found'}</>))}*/}
            {/*</h3>*/}
            {/*{JSON.stringify(sessionHero.content)}*/}
          </div>
        </div>
      </main>
    </>
  )
}