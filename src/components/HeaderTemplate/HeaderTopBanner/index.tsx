import { CustomBannerData } from "@/lib/content";

import Styled from './styles';

interface Props {
  data: CustomBannerData
}

const HeaderTopBanner = ({ data }: Props) => {
	return (
		<Styled.HeaderTopBannerWrapper>
			<Styled.HeaderTopBannerContainer>
				<Styled.TopBannerContent>{data.text}</Styled.TopBannerContent>
			</Styled.HeaderTopBannerContainer>
		</Styled.HeaderTopBannerWrapper>
	);
};

export default HeaderTopBanner;
