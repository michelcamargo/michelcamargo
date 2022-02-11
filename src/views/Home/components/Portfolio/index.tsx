import React from 'react';
import "./styles.css";

import portfolio0 from "../../../../assets/img/portfolio/villa/villa-mobile-0.png";
import portfolio1 from "../../../../assets/img/portfolio/villa/villa-desktop-0.png";
import portfolio2 from "../../../../assets/img/portfolio/villa/villa-desktop-1.png";

type PortfolioProps = {

}

export default ({}: PortfolioProps): JSX.Element => {
    return (
        <div className={"portfolio__wrapper container section"}>
            <div className={"portfolio__container"}>
                <div className={"portfolio__caseInformation"}>
                    <h5 className={"portfolio__caseTitle"}>Villa Mercato</h5>
                    <p className={"portfolio__caseDescription"}>Case ecommerce supermercado em VTEX.io</p>
                </div>
                <div className={"portfolio__caseImagesContainer"}>
                    <div className={"portfolio__caseContainerMobile"}>
                        <img className={"portfolio__casePreviewImage"} src={portfolio0} alt={"Preview"} />
                    </div>
                    <div className={"portfolio__caseContainerDesktop"}>
                        <img className={"portfolio__casePreviewImage"} src={portfolio1} alt={"Preview"} />
                        <img className={"portfolio__casePreviewImage"} src={portfolio2} alt={"Preview"} />
                    </div>
                </div>
            </div>

            <div className={"portfolio__container"}>
                <div className={"portfolio__caseInformation"}>
                    <h5 className={"portfolio__caseTitle"}>BeBrasil</h5>
                    <p className={"portfolio__caseDescription"}>Ecommerce em Angular usando VTEX API</p>
                </div>

                <div className={"portfolio__caseImagesContainer"}>
                    <div className={"portfolio__caseContainerMobile"}>
                        <img className={"portfolio__casePreviewImage"} src={portfolio0} alt={"Preview"} />
                    </div>
                    <div className={"portfolio__caseContainerDesktop"}>
                        <img className={"portfolio__casePreviewImage"} src={portfolio1} alt={"Preview"} />
                        <img className={"portfolio__casePreviewImage"} src={portfolio2} alt={"Preview"} />
                    </div>
                </div>
            </div>
        </div>
    )
}