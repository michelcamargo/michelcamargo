import React from 'react';

import { FlexRow, FlexContainer, FlexRowContent, FlexCol, FlexColContent } from './styles';

interface FlexLayoutProps {
    children?: React.ReactNode | React.ReactNode[];
    fullWidth?: boolean;
    center?: boolean;
}

export function FlexLayoutRow({ children, fullWidth }: FlexLayoutProps) {
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



