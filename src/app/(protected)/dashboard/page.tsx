import styles from "./Dashboard.module.scss";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className={styles.page_wrapper}>
      <div className={styles.page_content}>
        <p>Dashboard page!</p>
      </div>
    </main>
  )
}