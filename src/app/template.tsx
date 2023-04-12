import { ReactNode } from "react";
import styles from './Root.module.scss';

interface Props {
  children: ReactNode
}

const RootTemplate = ({ children }: Props) => {
  // Template que pára a aplicação para rodar com alterações de página
  
  return (
    <div className={styles.template_wrapper}>
      {children}
    </div>
  )
}

export default RootTemplate;