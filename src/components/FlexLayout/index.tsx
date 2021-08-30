import React from 'react';
// import { Link } from 'react-router-dom';

import {FlexRow, FlexContainer, FlexRowContent} from './styles';

interface Props {
    children?: React.ReactNode | React.ReactNode[];
    isFullWidth?: boolean;
    containerWidth: number;
}

export function FlexLayoutRow({children, isFullWidth, containerWidth}: Props) {
    if(isFullWidth) {
        return (
            <FlexRow className={"flexRow"}>
                <FlexRowContent classname={"flexRowContent"}>
                    {children}
                </FlexRowContent>
            </FlexRow>
        )
    }

    else {
        return (
            <FlexRow>
                <FlexContainer containerWidth={containerWidth} classname={"flexContainer"}>
                    <FlexRowContent>
                        {children}
                    </FlexRowContent>
                </FlexContainer>
            </FlexRow>

        )
    }
}



