import React, { ReactNode } from 'react';

import { FlexRow, FlexRowContainer, FlexRowContent } from "./styles";

type FlexLayoutProps = {
    children: ReactNode | ReactNode[]
    isFullWidth?: boolean,
    containerWidth: string
}

class FlexLayout extends React.Component<FlexLayoutProps>{
    private isFullWidth: boolean;
    private containerWidth: string;
    private className: string;

    public render() {
        return (this.FlexLayoutRow(this.props.children))
    }

    public FlexLayoutRow (children: ReactNode) {
        this.className = "";
        let rowClass = "flexRow";
        let containerClass = "flexRowContainer";
        let contentClass = "flexRowContent";

        return (
            <FlexRow className={`${rowClass} ${this.className}`}>
                {this.isFullWidth ?
                    <FlexRowContent className={`${contentClass} ${this.className}`}>
                        {children}
                    </FlexRowContent> :
                    <FlexRowContainer className={`${containerClass} ${this.className}`} containerWidth={this.containerWidth}>
                        <FlexRowContent className={`${contentClass} ${this.className}`}>
                            {children}
                        </FlexRowContent>
                    </FlexRowContainer>
                }
            </FlexRow>
        )
    }
}

export default FlexLayout;