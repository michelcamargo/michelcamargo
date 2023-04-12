import { ReactNode } from 'react';
import styles from './PreAuth.module.scss'
import Link from "next/link";

interface Props {
  children?: ReactNode,
}

const PreAuthentication = ({children}: Props) => {
  
  return (
    <div className={styles.preAuth_content}>
      <div className={styles.preAuth_boxes}>
        <div>
          <Link href={'/auth/sign-in'}>Login</Link>
        </div>
        <div>
          <Link href={'/auth/sign-up'}>Registro</Link>
        </div>
      </div>
    </div>
  )
}

export default PreAuthentication;