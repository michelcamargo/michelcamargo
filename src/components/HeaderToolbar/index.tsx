import LocaleHeaderComponent from "@/components/LocaleHeaderComponent";
import useLocaleContext from "@/hooks/useLocaleContext";

import Styled from './styles';

interface Props {
	locale: string,
  availableLocales: string[],
}

const HeaderToolbar = ({ locale, availableLocales }: Props) => {
	const { locale: contextLocale } = useLocaleContext();
  
	return (
		<Styled.ToolbarWrapper>
			<Styled.ToolbarContainer>
				<div>
					{JSON.stringify({ locale })}
					{JSON.stringify({ contextLocale })}
				</div>
				<div>
					<LocaleHeaderComponent locale={locale} availableLocales={availableLocales} />
				</div>
			</Styled.ToolbarContainer>
		</Styled.ToolbarWrapper>
	);
};

export default HeaderToolbar;
