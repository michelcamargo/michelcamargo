import React from "react";
import {HighlightScreenshotContainer, HighlightScreenshot} from "./styles";

type ShowcaseProps = {
    children?: React.ReactElement | Array<React.ReactElement>
}

const ShowcaseComponent: React.FC<ShowcaseProps> = ({children}) => {
    return (
        <HighlightScreenshotContainer>
            <HighlightScreenshot></HighlightScreenshot>
        </HighlightScreenshotContainer>
    )
}

export default ShowcaseComponent;