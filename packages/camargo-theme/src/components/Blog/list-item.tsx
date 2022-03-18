import { connect, useConnect } from "frontity";
import { PostEntity } from "@frontity/source/types";
import FeaturedMedia from "./featured-media";
import { Packages } from "../../../types";
import Link from "../TemplateUi/Link";

import { StyledLink, Title, AuthorName, PublishDate, Excerpt } from "./styles"

/**
 * Propriedades do componente {@link Item}.
 */
interface ItemProps {
  /**
   * Publicação a qual deve ser mostrada.
   */
  item: PostEntity;
}

/**
 * Item de blog (Publicação)
 *
 * Renderiza a pré-visualização da publicação. Cada uma possui:
 * - Title: Título clicável do blog.
 * - Author: Nome do autor e data de publicação.
 * - FeaturedMedia: Imagem ou vídeo em destaque na publicação.
 *
 * @param props - Definido em {@link ItemProps}.
 *
 * @returns a postagem.
 */
const Item = ({ item }: ItemProps): JSX.Element => {
  const { state } = useConnect<Packages>();
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <article>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <div>
        {/* If the post has an author, we render a clickable author text. */}
        {author && (
          <StyledLink link={author.link}>
            <AuthorName>
              Por <b>{author.name}</b>
            </AuthorName>
          </StyledLink>
        )}
        <PublishDate>
          {" "}
          Em <b>{date.toDateString()}</b>
        </PublishDate>
      </div>

      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}

      {/* Se o post tem um resumo, renderiza-o */}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
    </article>
  );
};

// Conecta o Item para obter acesso ao `state` como propriedade
export default connect(Item);
