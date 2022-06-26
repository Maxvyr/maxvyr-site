import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer : NextPage = () => {
    return (
        <>
         <a
          href="https://github.com/maxvyr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/github.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://twitter.com/m4xvyr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/twitter.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://instagram.com/m4xvyr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/instagram.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://linkedin.com/in/maxime-vidalinc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/linkedin.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://www.tiktok.com/@maxvyr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/tiktok.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://www.youtube.com/user/maxvid30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/youtube.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        </>
    )
}

export default Footer