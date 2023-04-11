// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import Link from "next/link";
import PreAuthentication from "@/components/pre-auth";

// const inter = Inter({ subsets: ['latin'] })

interface Props {

}

export default function Home({}: Props) {
  return (
    <main className={styles.home_wrapper}>
      <div className={styles.home_content}>
        <PreAuthentication />
      </div>
    </main>
  )
}
