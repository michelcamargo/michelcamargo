'use client';
import { ReactNode } from "react";
import styles from './page.module.scss';

interface Props {
  children: ReactNode
}

export default function ErrorComponent({ children }: Props) {
  return (
    <div className={styles.error_wrapper}>
      {children}
    </div>
  )
}
