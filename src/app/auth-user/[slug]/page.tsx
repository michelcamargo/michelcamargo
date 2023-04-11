import styles from './AuthUserSlug.module.scss';

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}

async function getAuthUser(params) {
  console.log('params', params);
  
  const res = await fetch(`http://localhost:3030/articles/${params.slug}`);
  const authUserData = await res.json().then(data => data).catch(e => {
    console.error(e);
    return [];
  });
  
  return authUserData;
}

const AuthUser = async ({params}) => {
  const authUserData = await getAuthUser(params);
  
  console.log('authUserData', authUserData);
  
  return (
    <div className={styles.authUser_content}>
      {authUserData.title}
    </div>
  )
}

export default AuthUser;
