import { CustomFont } from "@/lib/fonts";

interface Props {
  availableFonts?: Array<CustomFont>
}

const CustomAppRootHTML = ({ availableFonts = []}: Props) => {
  const { font: localFont} = {
    font: { lead: 'Titillium Web', common: 'Titillium Web',  }
  }
  
  const { lead: cloudLeadFont, common: cloudCommonFont } = {
    lead: availableFonts?.find(font => font.id === 'lead') ?? null,
    common: availableFonts?.find(font => font.id === 'common') ?? null,
  }
  
  const appLeadFont = cloudLeadFont?.font.style.fontFamily ?? localFont.lead;
  const appCommonFont = cloudCommonFont?.font.style.fontFamily ?? localFont.common;
  
  return (
    // eslint-disable-next-line react/no-unknown-property
    <style jsx global>
      {`
      html {
          font-family: ${appCommonFont ? appCommonFont : 'unherit'};
        
          h1, h2, h3, h4, h5, h6 {
            font-family: ${appLeadFont ? appLeadFont : 'unherit'};
          }
      }
    `}
    </style>
  );
};

export default CustomAppRootHTML;
