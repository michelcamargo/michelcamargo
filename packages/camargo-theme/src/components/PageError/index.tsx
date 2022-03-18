import { ErrorData } from "@frontity/source/types";

import { Container, Title, Description } from "./styles";

/**
 * Propriedades do componente {@link PageError}.
 */
type PageErrorProps = {
  data: ErrorData,

  /**
   * Quando este componente deve ser renderizado.
   * Usado pelo componente `<Switch>`.
   */
  when?: boolean
}

const description404 = (
  <>
    A página não foi encontrada {" "}
    <span role="img" aria-label="confused face">
      😕
    </span>
  </>
);

const description = (
  <>
    Don&apos;t panic! Seems like you encountered an error. If this persists,
    <a href="https://community.frontity.org"> let us know </a> or try refreshing
    your browser.
  </>
);

/**
 * The Error page component. It shows either a 404 page if the error is a 404
 * or a generic error if it's a different one.
 *
 * @param props - The props, defined in {@link PageErrorProps}.
 * @returns The error screen.
 */
const PageError = ({ data }: PageErrorProps): JSX.Element => {
  const title = "Oops! Algo deu errado.";
  const title404 = "Oops! 404";

  return (
    <Container>
      <Title>{data.is404 ? title404 : title}</Title>
      <Description>{data.is404 ? description404 : description}</Description>
    </Container>
  );
};

export default PageError;


