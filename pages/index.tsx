import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import About from '../pages/screen/about'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maxvyr Porte Folio</title>
        <meta name="Maxvyr Porte Folio" content="Porte Folio Maxvyr, Maxime Vidalinc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <About />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
