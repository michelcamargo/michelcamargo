import LocaleHeaderComponent from "@/components/LocaleHeaderComponent";
import useLocaleContext from "@/hooks/useLocaleContext";

import Styled from './styles';

// interface Props {
// 	lang?: string,
// }

const HeaderToolbar = () => {
	
  const { locale } = useLocaleContext();
  
  return (
    <Styled.ToolbarWrapper>
      <Styled.ToolbarContainer>
        <div>
          {JSON.stringify(locale)}
        </div>
        <div>
          <LocaleHeaderComponent  />
        </div>
      </Styled.ToolbarContainer>
    </Styled.ToolbarWrapper>
  );
};

export default HeaderToolbar;
