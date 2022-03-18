import { keyframes, css } from "frontity";

import { Container } from "./styles";
/**
 * Propriedades do componente {@link Loading}.
 */
interface LoadingProps {
    /**
     * Quando o componente deve ser renderizado.
     * Usado pelo `<Switch>`.
     */
    when?: boolean;
}

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`;

/**
 * Retorna CSS requerida por cada barra.
 *
 * @param index - Posição da barra.
 * @returns estilo css.
 */
const bar = (index: number) => css`
  background-color: rgba(12, 17, 43, 0.3);
  width: 4px;
  height: 24px;
  margin: 3px;
  border-radius: 0;
  display: inline-block;
  animation: ${scale} 1s ${index * 0.1}s infinite
    cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation-fill-mode: both;
`;

/**
 * Mostra um loader.
 *
 * @param _props - Definido em {@link LoadingProps}.
 * @returns Animação de carregamento.
 */
const Loading = (_props: LoadingProps): JSX.Element => (
    <Container>
        <div>
            <div css={bar(1)} />
            <div css={bar(2)} />
            <div css={bar(3)} />
            <div css={bar(4)} />
            <div css={bar(5)} />
        </div>
    </Container>
);

export default Loading;


