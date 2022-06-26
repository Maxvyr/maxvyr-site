import type { NextPage } from 'next'
import Link from 'next/link'
import Footer from '../../components/footer'

const Projects : NextPage = () => {
    return (
        <>
            <h1>Projects Screen</h1>
            <h2>
                <Link href="/">
                <a>Back to home</a>
                </Link>
            </h2>
            <Footer />
        </>
    )
}

export default Projects