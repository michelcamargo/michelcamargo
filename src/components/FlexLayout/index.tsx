import React from 'react';

import { FlexRow, FlexContainer, FlexRowContent, FlexCol, FlexColContent } from './styles';

interface FlexLayoutProps {
    children?: React.ReactNode | React.ReactNode[];
    fullWidth?: boolean;
    center?: boolean;
    bgColor?: string;
}

export function FlexLayoutRow({ children, fullWidth, bgColor }: FlexLayoutProps) {
    if (fullWidth) {
        return (
            <FlexRow className={"flexRow"} bgColor={bgColor}>
                <FlexRowContent className={"flexRowContent"}>
                    {children}
                </FlexRowContent>
            </FlexRow>
        )
    }

    else {
        return (
            <FlexRow className={"flexRow"} bgColor={bgColor}>
                <FlexContainer className={"flexContainer"}>
                    <FlexRowContent className={"flexRowContent"}>
                        {children}
                    </FlexRowContent>
                </FlexContainer>
            </FlexRow>
        )
    }
}

export function FlexLayoutCol({ children }: FlexLayoutProps) {
    return (
        <FlexCol className={"flexCol"}>
            <FlexColContent className={"flexColContent"}>
                {children}
            </FlexColContent>
        </FlexCol>
    )
}



