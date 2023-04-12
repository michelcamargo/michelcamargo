import styles from './UserOverview.module.scss';

// export async function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }]
// }

interface Props {
  params: {
    slug: string
  }
}

async function getAuthUser(id) {
  const res = await fetch(`http://localhost:3030/articles/${id}`);
  const authUserData = await res.json().then(data => data).catch(e => {
    console.error(e);
    return [];
  });
  
  return authUserData;
}

const UserOverviewPage = async ({params}: Props) => {
  const { slug: id } = params;
  
  const authUserData = await getAuthUser(id);
  
  console.log('authUserData', authUserData);
  
  return (
    <div className={styles.page_content}>
      {authUserData.title}
    </div>
  )
}

export default UserOverviewPage;
