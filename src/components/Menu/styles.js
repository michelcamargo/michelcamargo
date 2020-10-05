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
  z-index: 1;
  background-color: rgba(0,0,0, 0.4);
  opacity: .3;
  filter: blur(2px);
  color: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const HeadTitle = styled.div`
  color: white;
  font-size: 75px;
  z-index: 2;

  @media (max-width: 800px){
    font-size: 40px;
  }
`;

HeadTitle.Description = styled.span`
  font-weight: 300;
  font-size: 40px;

  @media (max-width: 800px){
    font-size: 25px;
  }
`;
