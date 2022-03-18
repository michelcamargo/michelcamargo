import { Head, connect, decode, useConnect } from "frontity";
import { isTerm, isAuthor, isPostType, isError } from "@frontity/source";
import { Packages } from "../../../types";

/**
 * Popula a tag `<title>` de acordo com a página.
 * @returns tag `<title>`.
 */
const Title = (): JSX.Element => {
  const { state } = useConnect<Packages>();
  // Busca dados da URL atual
  const data = state.source.get(state.router.link);

  let title = state.frontity.title;

  if (isTerm(data)) {
    // Adiciona títulos dinâmicos por taxonomia.
    const { taxonomy, name } = state.source[data.taxonomy][data.id];
    const taxonomyCapitalized =
      taxonomy.charAt(0).toUpperCase() + taxonomy.slice(1);
    title = `${taxonomyCapitalized}: ${decode(name)} - ${state.frontity.title}`;

  } else if (isAuthor(data)) {
    // Busca autor da publicação e insere no título.
    const { name } = state.source.author[data.id];
    title = `Autor: ${decode(name)} - ${state.frontity.title}`;

  } else if (isPostType(data)) {
    // Adiciona títulos para publicações e páginas (Título - Nome blog).
    const postTitle = state.source[data.type][data.id].title.rendered;
    // Remove tags HTML do título.
    const cleanTitle = decode(postTitle);
    title = `${cleanTitle} - ${state.frontity.title}`;

  } else if (isError(data) && data.is404) {
    title = `404 Not Found - ${state.frontity.title}`;
  }

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default connect(Title);
