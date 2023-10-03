import React from 'react';

interface Props {
  partnerList?: Array<string>
}

const FooterPartners = ({ partnerList = [] }: Props) => {
  if (!partnerList?.length) return <></>;
  
  return (
    <div>
      FooterPartners
    </div>
  );
};

export default FooterPartners;
