import React from "react";
import {PortfolioCase} from "./styles";
import ShowcaseComponent from "../../components/UI/Showcase";

import {PORTFOLIO_MOCK} from "../../data/mocks/portfolio.mock";
import Gallery from "../../components/UI/Gallery";
import ThemePalette from "../../components/UI/ThemePalette";
import {FlexLayoutRow} from "../../components/UI/FlexLayout";

type PortfolioProps = {}

const Portfolio: React.FC<PortfolioProps> = () => {
    return (
        <>
            <FlexLayoutRow>
                <ThemePalette />
            </FlexLayoutRow>

            <FlexLayoutRow>
                <PortfolioCase><ShowcaseComponent showcaseArray={PORTFOLIO_MOCK} /></PortfolioCase>
            </FlexLayoutRow>
        </>
    )
}

export default Portfolio;