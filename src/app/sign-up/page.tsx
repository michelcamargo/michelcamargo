import { IAuthUser } from "@/lib/auth";
import styles from "@/app/sign-up/SignUp.module.scss";

const AuthSignUp = () => {
  
  return (
    <div className={styles.signUp_content}>
      <p>Registrar</p>
      {/*<p>{props?.email}</p>*/}
    </div>
  )
}

export default AuthSignUp;
