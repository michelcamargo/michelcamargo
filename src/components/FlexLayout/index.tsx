import React from 'react';

import { FlexRow, FlexContainer, FlexRowContent, FlexCol, FlexColContent } from './styles';

interface Props {
    children?: React.ReactNode | React.ReactNode[];
    fullWidth?: boolean;
    containerWidth?: number | "1170px";
    center?: boolean;
}

export function FlexLayoutRow({ children, fullWidth, containerWidth }: Props) {
    if (fullWidth) {
        return (
            <FlexRow className={"flexRow"}>
                <FlexRowContent className={"flexRowContent"}>
                    {children}
                </FlexRowContent>
            </FlexRow>
        )
    }

    else {
        return (
            <FlexRow className={"flexRow"}>
                <FlexContainer maxWidth={containerWidth} className={"flexContainer"}>
                    <FlexRowContent className={"flexRowContent"}>
                        {children}
                    </FlexRowContent>
                </FlexContainer>
            </FlexRow>

        )
    }
}

export function FlexLayoutCol({children, containerWidth}: Props) {
    return (
        <FlexCol className={"flexCol"}>
            <FlexColContent className={"flexColContent"}>
                {children}
            </FlexColContent>
        </FlexCol>
    )
}



