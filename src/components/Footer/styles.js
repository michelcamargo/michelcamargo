import styled from 'styled-components';

const Foot = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #191919;
  padding: 30px 0;

  align-items: center;
`;

Foot.List = styled.ul`
  display: flex;
  margin-bottom: 25px;
`;

Foot.ListItem = styled.ul`
  margin-right: 10px;
`;

/* footer ul li:last-child {
  margin-right: 0;
} */

Foot.Link = styled.a`
  color: #07f3f3;
  font-size: 2rem;
`;

Foot.Description = styled.p`
  color: #07f3f3;
`;

export default Foot;
