import { connect, decode, useConnect } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import { Packages } from "../../../types";
import { isTerm, isAuthor } from "@frontity/source";
import { ArchiveData } from "@frontity/source/types";

import { Container, Header } from "./styles";

/**
 * Propriedades do componente {@link List}.
 */
interface ListProps {
  /**
   *  Como objeto representando Link de arquivo.
   */
  data: ArchiveData;

  /**
   * Indicador usado pelo componente {@link Switch} o qual decide qual componente será renderizado.
   */
  when?: boolean;
}

/**
 * Renderiza uma lista de publicações pertencentes à pasta-arquivo
 * recebida como um objeto {@link ArchiveData}.
 *
 * @param props - Object of type {@link ListProps}.
 * @returns React component.
 */
const List = ({ data }: ListProps): JSX.Element => {
  const { state } = useConnect<Packages>();

  return (
    <Container>
      {/* Se a lista for um termo, renderiza o título. */}
      {isTerm(data) && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* Se a referência da lista for um autor, o renderiza no título. */}
      {isAuthor(data) && (
        <Header>
          Autor: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* Itera na lista de posts */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];

        return <Item key={item.id} item={item} />;
      })}
      <Pagination data={data} />
    </Container>
  );
};

export default connect(List);
