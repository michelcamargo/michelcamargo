import styles from './Customers.module.scss';
// import { Suspense } from 'react';

export default function CustomersPage() {
  return (
    <main className={styles.page_wrapper}>
      <div className={styles.page_content}>
        <p>Lista de clientes</p>
        <hr />
        {/*<Suspense fallback={<p>Carregando dados densos</p>}>*/}
        {/*  /!*<LazyRequestExample />*!/*/}
        {/*</Suspense>*/}
      </div>
    </main>
  )
}
