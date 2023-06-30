import { CustomFont } from "@/lib/fonts";

interface Props {
  availableFonts: Array<CustomFont>
}

const CustomAppRootHTML = ({ availableFonts }: Props) => {
  const leadFont = availableFonts.find(font => font.id === 'lead');
  
  return (
    // eslint-disable-next-line react/no-unknown-property
    <style jsx global>
      {`
      html {
          font-family: ${leadFont ? leadFont.font.style.fontFamily : 'unherit'};
      }
    `}
    </style>
  );
};

export default CustomAppRootHTML;
