import React from 'react';

import Styled from './styles';

const FooterMenu = () => {
  return (
    <Styled.Wrapper>
      <Styled.List>
        <Styled.ListItem>
          <Styled.ListItemLink href={'/'}>
            item 1
          </Styled.ListItemLink>
        </Styled.ListItem>
        <Styled.ListItemLink href={'/'}>
          item 2
        </Styled.ListItemLink>
      </Styled.List>
    </Styled.Wrapper>
  );
};

export default FooterMenu;
