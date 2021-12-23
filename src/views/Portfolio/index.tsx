import React from "react";
import {PortifolioCase} from "./styles";
import ShowcaseComponent from "../../components/UI/Showcase";

import {PORTFOLIO_MOCK} from "../../data/mocks/portfolio.mock";
import {Showcase} from "../../components/UI/Showcase/types";

type PortfolioProps = {
    children?: React.ReactElement | Array<React.ReactElement>
}

const PortfolioComponent: React.FC<PortfolioProps> = () => {

    let portfolioItems: Array<React.ReactElement> = []

    PORTFOLIO_MOCK.forEach((item: Showcase) => {
        portfolioItems.push(
            <div>
                <div>
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                </div>
                <div>
                    <div>teste</div>
                </div>
            </div>
        );

    });


    return (
        {portfolioItems}
        // <PortifolioCase>
        //     <ShowcaseComponent>
        //
        //     </ShowcaseComponent>
        // </PortifolioCase>
    )
}

export default PortfolioComponent;