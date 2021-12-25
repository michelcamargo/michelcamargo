import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'
import { PaletteColor, PaletteContainer, PaletteLabel } from "./styles";
import Gallery from "../Gallery";

type ThemePaletteProps = {
    rounded?: boolean;
}
const ThemePalette: React.FC<ThemePaletteProps> = ({rounded}) => {
    const { title, colors } = useContext(ThemeContext);

    console.log(colors);
    let colorList: Array<any> = [];

    for(const themeColor in colors) {
        if(themeColor){
            colorList.push(<PaletteColor hex={colors[themeColor]} paletteColor={themeColor}/>);
        }
    }

    return (
        <PaletteContainer>
            <PaletteLabel>Paleta {title}:</PaletteLabel>

            <Gallery>
                {colorList}
            </Gallery>
        </PaletteContainer>
    );
}

export default ThemePalette