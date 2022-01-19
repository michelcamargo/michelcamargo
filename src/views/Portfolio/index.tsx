import React from "react";
import {PortfolioCase} from "./styles";
import ShowcaseComponent from "../../components/UI/Showcase";

import {PORTFOLIO_MOCK} from "../../data/mocks/portfolio.mock";
import Gallery from "../../components/UI/Gallery";
import ThemePalette from "../../components/UI/ThemePalette";
import {FlexLayoutRow} from "../../components/UI/FlexLayout";
import Presentation from "../../components/Sections/Presentation";
import StyledLink from "../../components/UI/StyledLink";
import IconLinkedin from "../../styles/iconpack";

type PortfolioProps = {}

const Portfolio: React.FC<PortfolioProps> = () => {





    return (
        <>
            <FlexLayoutRow background={"linear-gradient(98.17deg, #FFC700 17.02%, #FF7A00 95.22%)"}>
                <Presentation className="michelcamargo"/>
            </FlexLayoutRow>

            <FlexLayoutRow background={`${props => props.theme.colors.backgroundSecondary}`}>
                <StyledLink to={'https://www.linkedin.com/in/michelscamargo/'} background={"#0A66C2"} color={"#eaeaea"} icon={IconLinkedin} target={"_blank"}>
                    LinkedIn
                </StyledLink>
            </FlexLayoutRow>

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