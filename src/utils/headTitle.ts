import { useLocation } from 'react-router-dom';

export default function GetHeaderName() {
  const location = useLocation();

  const path: string = location.pathname;

  const headTitles: any = {
    '/': 'Início'
  //   '/mapa': 'Mapa de camadas'
  }

  if(headTitles[path]){
    return(headTitles[path]);
  }

  else{
    return(path)
  }

}