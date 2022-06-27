import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/footer'
import TopBar from '../components/top_bar'
import styles from '../styles/Home.module.css'
import profilPic from '../public/avatar-placeholder.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maxvyr Porte Folio</title>
        <meta name="Maxvyr Porte Folio" content="Porte Folio Maxvyr, Maxime Vidalinc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <TopBar />
          <h1>About Screen</h1>
          <h2>
              <Link href="/">
              <a>Back to home</a>
              </Link>
          </h2>
          <Image
              className={styles.profilPic}
                  src={profilPic}
                  alt="Maxime Vidalinc Profil Picture"
                  width={250}
                  height={250}
                  layout="fixed"
                  />
          <p>Bonjour je m'appelle Maxime Vidalinc. Je suis un dev freelance spécialisée dans le développement front (ReactJS, NextJS) et coté mobile en (Flutter). \nPassionné par le développement informatique et les nouvelles technologies. \nJe programme et réalise le design d'applications \npour des clients dans le monde entier. \n</p>
          <p>Language / Framework : Javascript Typescript, ReactJS, NextJS</p>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
