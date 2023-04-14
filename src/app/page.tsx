import styles from './Landing.module.scss'
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className={styles.page_wrapper}>
      <div className={styles.page_content}>
        <h2>Michel Camargo</h2>
        <h3>Development & UIUX design</h3>
        <Link href={"/sign-in"}>Entre</Link>
        <Link href={"/sign-up"}>Registre-se</Link>
        <Link href={"/customers"}>Clientes</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
      </div>
    </main>
  )
}
