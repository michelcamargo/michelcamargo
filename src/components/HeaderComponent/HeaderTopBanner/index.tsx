import Styled from './styles';
import {CustomBannerData} from "@/lib/custom-content";

interface Props {
  data: CustomBannerData
}

const HeaderTopBanner = ({data}: Props) => {
  return (
    <Styled.HeaderTopBannerWrapper>
      <Styled.HeaderTopBannerContainer>
        <Styled.TopBannerContent>{data.text}</Styled.TopBannerContent>
      </Styled.HeaderTopBannerContainer>
    </Styled.HeaderTopBannerWrapper>
  );
};

export default HeaderTopBanner;
