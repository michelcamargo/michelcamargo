import styled from 'styled-components';

const PageContent = styled.div`
  text-align: center;
  margin: 0 auto;
  background: url( ${({ background }) => background} );
  width: 100%;

  color: var(--white);
  display: flex;
  

  padding: 10px;
`;

export default PageContent;
