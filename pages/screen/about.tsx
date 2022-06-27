import type { NextPage } from 'next'
import Link from 'next/link'
import Footer from '../../components/footer'
import TopBar from '../../components/top_bar'
import styles from '../../styles/about.module.css'

const About : NextPage = () => {
    return (
        <>
            <main className={styles.main}>
                <TopBar />
                <h1>About Screen</h1>
                <h2>
                    <Link href="/">
                    <a>Back to home</a>
                    </Link>
                </h2>
                <p>Bonjour je m'appelle Maxime Vidalinc. Je suis un dev freelance spécialisée dans le développement front (ReactJS, NextJS) et coté mobile en (Flutter). \nPassionné par le développement informatique et les nouvelles technologies. \nJe programme et réalise le design d'applications \npour des clients dans le monde entier. \n</p>
                <p>Language / Framework : Javascript Typescript, ReactJS, NextJS</p>
            </main>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </>
    )
}

export default About