import Styled from './styles';
import {CustomBannerData} from "@/lib/custom-content";

interface Props {
  data: CustomBannerData
}

const HeaderTopDisclaimer = ({data}: Props) => {
  return (
    <div>
      <Styled.TopContainer>{data.text}</Styled.TopContainer>
    </div>
  );
};

export default HeaderTopDisclaimer;
