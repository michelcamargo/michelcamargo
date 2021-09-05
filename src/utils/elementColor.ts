export default function getElementColors(element: Element){
    
  let colors: Array<string> = [];

  let elementStyle = {
    color: getComputedStyle(element).getPropertyValue('color'),
    backgroundColor: getComputedStyle(element).getPropertyValue('background-color')
  }

  colors.push(elementStyle["color"]);
  colors.push(elementStyle["backgroundColor"]);

  return(colors);
}

// export default function getElementColors(element: Element){
//
//   let colors: Array<string> = [];
//
//   colors.push(getComputedStyle(element).getPropertyValue('background-color'));
//   colors.push(getComputedStyle(element).getPropertyValue('color'));
//
//   return(colors);
// }

