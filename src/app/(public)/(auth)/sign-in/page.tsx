import styles from "./SignIn.module.scss";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className={styles.page_wrapper}>
      <div className={styles.page_content}>
        <p>Sign-in page!</p>
      </div>
    </main>
  )
}