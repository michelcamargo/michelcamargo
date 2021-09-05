import { useLocation } from 'react-router-dom';

export default function GetHeaderName() {
  const location = useLocation();

  const path: string = location.pathname;

  const headTitles: any = {
    '/hello-world': 'Início'
  //   '/map': 'Mapa de camadas',
  //   '/manage': 'Gestão',
  //   '/quotation': 'Cotações',
  //   '/services': 'Serviços',
  //   '/news': 'Notícias',
  //   '/about': 'Sobre',
  }

  if(headTitles[path]){
    return(headTitles[path]);
  }

  else{
    return(path)
  }

}