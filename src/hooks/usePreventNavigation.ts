import { useEffect } from 'react';

/**
 * @param {string} message - Mensagem a mostrar caso o usuário tente navegar quando previnido.
 * @param {boolean} when - Opcional. Se verdadeiro, a prevenção de navegação estará ativa.
 */
const usePreventNavigation = (message: string, when = true) => {
  useEffect(() => {
    if (!when) return undefined;
    
    const preventNavigation = (event: BeforeUnloadEvent) => {
      // eslint-disable-next-line no-param-reassign
      event.returnValue = message;
      return message;
    };
    
    window.addEventListener('beforeunload', preventNavigation);
    
    return () => {
      window.removeEventListener('beforeunload', preventNavigation);
    };
  }, [when, message]);
};

export default usePreventNavigation;
