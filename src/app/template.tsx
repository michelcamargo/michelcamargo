import { ReactNode } from "react";
import styles from './page.module.scss';

interface Props {
  children: ReactNode
}

const RootTemplate = ({ children }: Props) => {
  // Aqui importamos o template em si, com as condições sobre mudanças de contexto
  
  return (
    <div className={styles.template_wrapper}>
      {children}
    </div>
  )
}

export default RootTemplate;