'use client';
import styles from '@/app/(auth)/Auth.module.scss';

export default function ClientAuthLayout({ children }) {
  return (
    <div className={styles.layout_wrapper}>
      <h4>Autenticação</h4>
      {children}
    </div>
  );
}