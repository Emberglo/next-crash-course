import Nav from '@/components/Nav';
import Header from '@/components/Header';
import styles from '@/styles/Layout.module.css';

const Layout = ({children}: {children: any}) => {
  return (
    <>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout
