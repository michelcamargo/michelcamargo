import { IAuthUser } from "@/lib/auth";
import styles from "@/app/(auth)/sign-up/SignUp.module.scss";

const AuthSignUpPage = () => {
  
  return (
    <div className={styles.page_content}>
      <p>Registrar</p>
      {/*<p>{props?.email}</p>*/}
    </div>
  )
}

export default AuthSignUpPage;
