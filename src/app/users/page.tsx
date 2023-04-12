import styles from './Users.module.scss';
import { AsyncComponentExample } from "@/components/async-component-example";

const UsersPage = () => {
  return (
    <div className={styles.page_content}>
      <p>Lista de usuários</p>
  
      {/* @ts-expect-error async-server-component (ts ainda não entende kkk)*/}
      <AsyncComponentExample />
      
    </div>
  )
}

export default UsersPage;
