import styled from 'styled-components';

export const LogoImage = styled.img`
    padding-top: .5vh;
    max-width: 168px;

    @media (max-width: 800px){
        padding-top: 1vh;
        max-width: 105px;
    }
`;

export const MenuWrapper = styled.div`
  background: #383838;
  color: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const HeadTitle = styled.div`
  color: white;
  padding: 10px;
  font-size: 75px;

  @media (max-width: 800px){
    font-size: 40px;
  }
`;

HeadTitle.Description = styled.span`
  
  font-size: 40px;

  @media (max-width: 800px){
    font-size: 25px;
  }
`;
