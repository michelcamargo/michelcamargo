import styles from './SignIn.module.scss';
import {ClientSideExample} from "@/components/client-side-example";

const AuthSignInPage = () => {
  return (
    <div className={styles.page_content}>
      <p>Entrar</p>
      
      <ClientSideExample />
    </div>
  )
}

export default AuthSignInPage;
