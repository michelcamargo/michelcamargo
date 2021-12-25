import React from 'react';

import { FlexRow, FlexCol } from './styles';

interface FlexLayoutProps {
    blockClass?: string;
    children?: React.ReactNode | React.ReactNode[];
    isFullWidth?: boolean;
    center?: boolean;
    background?: string;
    spaced?: boolean;
}

export function FlexLayoutRow({ children, isFullWidth, background, spaced, blockClass }: FlexLayoutProps) {

    let wrapperClassName =  blockClass ? "flexRow " : "flexRow--" + blockClass + " ";
    let containerClassName = "flexRowContainer ";
    let contentClassName = blockClass ? "flexRowContent " : "flexRowContent--" + blockClass + " ";

    if (isFullWidth) {
        return (
            <FlexRow className={wrapperClassName} background={background} spaced={spaced}>
                <FlexRow.Content className={contentClassName}>
                    {children}
                </FlexRow.Content>
            </FlexRow>
        )
    }

    else {
        return (
            <FlexRow className={wrapperClassName} background={background} spaced={spaced}>
                <FlexRow.Container className={containerClassName}>
                    <FlexRow.Content className={contentClassName}>
                        {children}
                    </FlexRow.Content>
                </FlexRow.Container>
            </FlexRow>
        )
    }
}

export function FlexLayoutCol({ children, blockClass }: FlexLayoutProps) {
    let wrapperClassName: string = "FlexCol ";
    let contentClassName: string = "flexColContent ";

    return (
        <FlexCol className={wrapperClassName}>
            <FlexCol.Content className={contentClassName}>
                {children}
            </FlexCol.Content>
        </FlexCol>
    )
}



