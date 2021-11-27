import React, {useContext} from 'react';
import { ThemeContext } from 'styled-components'
import {PaletteColor, PaletteContainer, PaletteLabel, PaletteList} from "./styles";

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

            <PaletteList>
                {colorList}
            </PaletteList>
        </PaletteContainer>
    );
}

export default ThemePalette