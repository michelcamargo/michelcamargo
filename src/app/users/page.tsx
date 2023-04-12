import { Suspense } from 'react';
import styles from './Users.module.scss';
import { AsyncComponentExample } from "@/components/async-component-example";
import { LazyRequestExample } from "@/components/lazy-request-example";

const UsersPage = () => {
  return (
    <div className={styles.page_content}>
      <p>Lista de usuários</p>
  
      {/* @ts-expect-error async-server-component (ts ainda não entende kkk)*/}
      <AsyncComponentExample />
      <hr />
      <Suspense fallback={<p>Carregando dados densos</p>}>
        <LazyRequestExample />
      </Suspense>
    </div>
  )
}

export default UsersPage;
