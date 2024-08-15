import React from 'react';

import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import Styled from "./styles";

interface Props {
	label?: string,
}

const SuccessFeedback = ({ label }: Props) => {
  return (
    <Styled.FormSuccess>
      <Styled.FormSuccessContent>
        <ThumbUpIcon />
        { label && <Styled.FormSuccessText>
          {label}
        </Styled.FormSuccessText>}
      </Styled.FormSuccessContent>
    </Styled.FormSuccess>
  );
};

export default SuccessFeedback;
