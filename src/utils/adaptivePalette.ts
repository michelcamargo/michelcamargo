export default function lumiance(hex: string, luminosity: number){

  hex = hex.replace(/[^0-9a-f]/gi,''); /* Captura elementos que não (^) são 0-9 ou a-f e Global Ignore (gi) IGNORA CASE  */
  
  const isValidHex = hex.length === 6 || hex.length === 3;

  // if(!isValidHex) throw new Error('Invalid HEX');
  if(!isValidHex){
      return "#000";
  };

  if(hex.length === 3){
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const white = 255;
  const black = 0;

  const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi); /* Captura elementos hex agrupados em 2 e colocando em array[] */

  let newHexColor = "#";

  if(twoDigitGroup){
      for( let twoDigit of twoDigitGroup){

          const hexToNumber = parseInt(twoDigit, 16); /* Converter hexadecimal para inteiro */
          const calculateLuminosity = hexToNumber + (luminosity * white);

          const blackOrLuminosity = Math.max(black, calculateLuminosity); /* Maior que 0 ou cor */
          const partialColor = Math.min(white, blackOrLuminosity); /* Menor que 255 ou cor */

          /* Arredondar */
          const newColor = Math.round(partialColor);

          const numberToHex = newColor.toString(16); /* Convertendo de volta para a base 16 */

          const finalHex = `0${numberToHex}`; /* Adiciona o 0 caso falte caracteres na conversão */

          newHexColor = newHexColor + finalHex.slice(-2); /* Dividindo em fatias de 2 de trás pra frente, possibilitando a sobra do zero extra */
      }
  }

  return newHexColor;
}
