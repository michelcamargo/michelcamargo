import { Global, css, connect, Head, useConnect } from "frontity";
import Switch from "@frontity/components/switch";
import { isArchive, isPostType, isError } from "@frontity/source";
// import List from "./list";
// import Post from "./post";
import TemplateUi from "./TemplateUi";
import Loading from "./Loading";
import Title from "./Title";
import PageError from "./PageError";
import { Packages } from "../../types";
import HomeView from "../views/Home";

/**
 * Componente raiz do tema.
 *
 * @returns Componente principal do tema.
 */
const Theme = () => {
  const { state } = useConnect<Packages>();
  const data = state.source.get(state.router.link);

  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="pt_BR" />
      </Head>

      <Global styles={globalStyles} />

      <TemplateUi>
        <Switch>
          <Loading when={data.isFetching} />
            <PageError when={isError(data)} data={isError(data) && data} />
            <HomeView />
          {/*<List when={isArchive(data)} data={isArchive(data) && data} />*/}
          {/*<Post when={isPostType(data)} data={isPostType(data) && data} />*/}
        </Switch>
      </TemplateUi>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
