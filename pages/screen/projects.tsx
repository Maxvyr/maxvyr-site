import type { NextPage } from 'next'
import Link from 'next/link'
import Footer from '../../components/footer'
import TopBar from '../../components/top_bar'
import styles from '../../styles/projects.module.css'

const Projects : NextPage = () => {
    return (
        <>
            <main className={styles.main}>
                <TopBar />
                <h1>Projects Screen</h1>
                <h2>
                    <Link href="/">
                    <a>Back to home</a>
                    </Link>
                </h2>
            </main>

            <footer className={styles.footer} >
                <Footer />
            </footer>
        </>
    )
}

export default Projects