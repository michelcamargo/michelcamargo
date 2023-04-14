import styles from './CustomerOverview.module.scss';

interface Props {
  params: {
    slug: string
  }
}

async function getCustomerData(id) {
  const res = await fetch(`http://localhost:3030/articles/${id}`);
  const customerData = await res.json().then(data => data).catch(e => {
    console.error(e);
    return [];
  });
  
  return customerData;
}

export default async function CustomerOverviewPage ({params}: Props) {
  const { slug: id } = params;
  
  const customerData = await getCustomerData(id);
  
  console.log('authUserData', customerData);
  
  return (
    <main className={styles.page_wrapper}>
      <div className={styles.page_content}>
      
      </div>
    </main>
  )
}
