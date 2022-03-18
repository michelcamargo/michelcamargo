import { useEffect } from "react";
import { connect, useConnect } from "frontity";

import List from "../Blog/list";

import { Container, Title, StyledLink, Author, DateWrapper, Content } from "./styles";

import {
  isAttachmentEntity,
  isPageEntity,
  isPostEntity,
} from "@frontity/source";
import { Packages } from "../../../types";
import FeaturedMedia from "../Blog/featured-media";
import { PostTypeEntity, PostTypeData } from "@frontity/source/types";

/**
 * Properties received by the `Post` component.
 */
interface PostProps {
  /**
   * Data element representing a URL in your frontity site.
   */
  data: PostTypeData;

  /**
   * Whether to render this component.
   */
  when?: boolean;
}

/**
 * Renderiza qualquer tipo e publicação, como posts, páginas, attachments, etc.
 *
 * {@link connect}. O estado atual gerido pelo Frontity é utilizado para distinguir qual o tipo de publicação.
 *
 * @param props - State, actions, e libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns um elemento {@link Post} renderizado.
 */
const Post = ({ data }: PostProps): JSX.Element => {
  const { state, actions, libraries } = useConnect<Packages>();

  const post: PostTypeEntity = state.source[data.type][data.id];
  const author = state.source.author[post.author];

  const Html2React = libraries.html2react.Component;

  /**
   * Uma vez que a publicação está no DOM, pré-requisita toda a lista e posts
   * para quando o início seja acessado, tudo esteja pronto e carregue instantâneamente.
   */
  useEffect(() => {
    actions.source.fetch("/");
    // @ts-ignore
    List.preload();
  }, [actions.source]);

  // Carrega a publicação quando os dados estiverem prontos.
  return data.isReady ? (
    <Container>
      <div>
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

        {/* Mostra apenas autor e data de publicação */}
        {isPostEntity(post) && (
          <div>
            {author && (
              <StyledLink link={author.link}>
                <Author>
                  por <b>{author.name}</b>
                </Author>
              </StyledLink>
            )}
            <DateWrapper>
              {" "}
              em <b>{new Date(post.date).toDateString()}</b>
            </DateWrapper>
          </div>
        )}
      </div>

      {/* Busca em opções se o conteúdo em destaque deve ser exibido */}
      {state.theme.featured.showOnPost &&
        (isPostEntity(post) || isPageEntity(post)) && (
          <FeaturedMedia id={post.featured_media} />
        )}

      {isAttachmentEntity(post) && (
        // Se a publicação é um attachment, renderiza a descrição junto da thumbnail.
        <div dangerouslySetInnerHTML={{ __html: post.description?.rendered }} />
      )}

      {(isPostEntity(post) || isPageEntity(post)) && (
        // Renderiza o conteúdo Html2React para que o HTML seja processado
        // por libraries.html2react.processors.
        <Content>
          <Html2React html={post.content?.rendered} />
        </Content>
      )}
    </Container>
  ) : null;
};

export default connect(Post);
