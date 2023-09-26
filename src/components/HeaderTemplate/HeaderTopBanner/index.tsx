import { CustomBannerData } from "@/lib/custom-content";

import Styled from './styles';

interface Props {
  data: CustomBannerData
}

const HeaderTopBanner = ({ data }: Props) => {
  console.log('data', data);
  
  return (
    <Styled.HeaderTopBannerWrapper>
      <Styled.HeaderTopBannerContainer>
        <Styled.TopBannerContent>{data.text}</Styled.TopBannerContent>
      </Styled.HeaderTopBannerContainer>
    </Styled.HeaderTopBannerWrapper>
  );
};

export default HeaderTopBanner;
