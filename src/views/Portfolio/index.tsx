import React from "react";
import {PortfolioCase} from "./styles";
import ShowcaseComponent from "../../components/UI/Showcase";

import {PORTFOLIO_MOCK} from "../../data/mocks/portfolio.mock";

type PortfolioProps = {}

const Portfolio: React.FC<PortfolioProps> = () => {
    return (
        <PortfolioCase><ShowcaseComponent showcaseArray={PORTFOLIO_MOCK} /></PortfolioCase>
    )
}

export default Portfolio;