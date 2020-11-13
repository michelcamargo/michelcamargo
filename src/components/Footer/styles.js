import styled from 'styled-components';

const Foot = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #191919;
  padding: 25px 0;

  text-align: center;
  align-items: center;
`;

Foot.List = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

Foot.Link = styled.a`
  color: #07f3f3;
  font-size: 2rem;
  margin: 2px 15px;
`;

Foot.Description = styled.p`
  color: #07f3f3;
`;

export default Foot;
