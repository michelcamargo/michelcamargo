import React from 'react';
import {IconContainer} from "./styles";

interface IconProps {
    size?: number | 25;
    color?: string | "#FFFFFF";
}

const Icon: React.FC<IconProps> = () => {
    return (
        <IconContainer>
        </IconContainer>
    );
}

export default Icon;