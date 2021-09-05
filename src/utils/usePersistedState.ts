import { useState, useEffect, Dispatch, SetStateAction } from 'react'; /* Tipar Hooks (SetStateAction é o tipo de SetState*/

type Response<Tipo> = [
    Tipo, /* Primeira posição do array é o Tipo */
    Dispatch<SetStateAction<Tipo>>, /* Segunda posição do array é o SetState */
]

function usePersistedState<Tipo>(key: string, initialState: Tipo): Response<Tipo>{ /* Retorno da função = Response com parâmetro <Tipo> */
  // const [state, setState] = useState(initialState); /* Buscar de estado existente ao invés de initialState */
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    /* Buscando de localStorage */
    if(storageValue){
      return(JSON.parse(storageValue));
    }

    else{
      return(initialState);
    }

  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state)); /* Independente do tipo de informação, tentar formatar em JSON para facilitar a manipulação */
  }, [key, state]); /* se a key ou o state mudar */

  return [state, setState];

}

export default usePersistedState;