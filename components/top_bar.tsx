import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/topbar.module.css'

const TopBar : NextPage = () => {
    return (
        <div className={styles.topbarContainer}>
            <h2 className={styles.items}>
                Front Developper
            </h2>
            <Link 
                href="/screen/about"
                className={styles.items}
            >
                    <a>A Propos</a>
            </Link>
            <Link 
                href="/screen/skills"
                className={styles.items}
            >
                <a>Compétences</a>
            </Link>
            <Link 
                href="/screen/projects"
                className={styles.items}
            >
                <a>Projets</a>
            </Link>
            <Link 
                href="/screen/contact"
                className={styles.items}
            >
                <a>Contact</a>
            </Link>
        </div>
    )
}

export default TopBar