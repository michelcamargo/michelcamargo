import React from "react";
import {ShowcaseText, ShowcaseContent, HighlightScreenshot, ShowcaseScreenshot, MobileScreenshot} from "./styles";
import {Showcase} from "./types";
import {ScreenGroup} from "../../../views/Portfolio/styles";

type ShowcaseProps = {
    showcaseArray: Array<Showcase>
}

const ShowcaseComponent: React.FC<ShowcaseProps> = ({showcaseArray}) => {

    let showcaseElements: Array<React.ReactElement> = [];

    showcaseArray.forEach((item: Showcase) => {
        const showcaseElement: React.ReactElement = (
            <ShowcaseContent>
                <ShowcaseText>
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                </ShowcaseText>
                <ScreenGroup>
                    <HighlightScreenshot src={item.link} alt={item.description} />
                    <ShowcaseScreenshot src={item.link} alt={item.description} />
                    <MobileScreenshot src={item.link} alt={item.description} />
                </ScreenGroup>
            </ShowcaseContent>
        )

        showcaseElements.push(showcaseElement);
    });

    return (
        <>
            {showcaseElements}
        </>
    )
}

export default ShowcaseComponent;