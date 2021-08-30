import React from 'react';
import { Link } from 'react-router-dom';

import {FlexContainer, FlexRow, FlexRowContent} from './styles';

interface Props {
    children?: React.ReactNode | React.ReactNode[];
    isFullWidth?: boolean;
    containerWidth: number;
}

export function FlexLayoutRow({children, isFullWidth, containerWidth}: Props) {
    if(isFullWidth) {
        return (
            <FlexRowContent>
                {children}
            </FlexRowContent>
        )
    }

    else {
        return (
            <FlexContainer containerWidth={containerWidth}>
                <FlexRowContent>
                    {children}
                </FlexRowContent>
            </FlexContainer>
        )
    }
}



