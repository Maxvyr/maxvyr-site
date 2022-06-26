import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/maxvyr"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <span className={styles.logo}>
            <Image src="/github.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://twitter.com/m4xvyr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <span className={styles.logo}>
            <Image src="/twitter.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://instagram.com/m4xvyr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <span className={styles.logo}>
            <Image src="/instagram.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://linkedin.com/in/maxime-vidalinc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <span className={styles.logo}>
            <Image src="/linkedin.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://www.tiktok.com/@maxvyr"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <span className={styles.logo}>
            <Image src="/tiktok.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://www.youtube.com/user/maxvid30"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <span className={styles.logo}>
            <Image src="/youtube.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
