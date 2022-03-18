import React, { ReactNode } from 'react';

import { FlexRow, FlexRowContainer, FlexRowContent, FlexCol, FlexColContent, FlexColItem } from "./styles";

type FlexLayoutProps = {
    children: ReactNode | ReactNode[]
    containerWidth?: string,
    background?: string,
    className?: string
}

class FlexLayout extends React.Component<FlexLayoutProps> {
    private customClass = this.props.className ? this.props.className : '';

    public render() {
        return (this.FlexLayoutRow())
    }

    public FlexLayoutRow () {
        let rowClass = 'flexRow';
        this.customClass !== '' && (rowClass += ` ${rowClass}--${this.customClass}`);
        let containerClass = 'flexRowContainer';
        this.customClass !== '' && (containerClass += ` ${containerClass}--${this.customClass}`);
        let contentClass = 'flexRowContent';
        this.customClass !== '' && (contentClass += ` ${contentClass}--${this.customClass}`);

        return (
            <FlexRow className={rowClass}>
                {this.props.containerWidth ?
                    <FlexRowContent className={contentClass}>
                        {this.props.children}
                    </FlexRowContent> :
                    <FlexRowContainer className={containerClass} containerWidth={this.props.containerWidth}>
                        <FlexRowContent className={contentClass}>
                            {this.props.children}
                        </FlexRowContent>
                    </FlexRowContainer>
                }
            </FlexRow>
        )
    }

    public FlexLayoutCol () {
        let columnClass = 'flexCol';
        this.customClass !== '' && (columnClass += ` ${columnClass}--${this.customClass}`);
        let containerClass = 'flexColContainer';
        this.customClass !== '' && (containerClass += ` ${containerClass}--${this.customClass}`);
        let contentClass = 'flexColContent';
        this.customClass !== '' && (contentClass += ` ${contentClass}--${this.customClass}`);

        return (
            <FlexCol className={columnClass}>
                <FlexColContent className={contentClass}>
                    {/*{ this.props.children.length > 0 ?*/}
                    {/*    this.props.children.forEach(child => {*/}
                    {/*        */}
                    {/*    })*/}
                    {/*}*/}
                </FlexColContent>
            </FlexCol>
        )
    }
}

export default FlexLayout;