import type { NextPage } from 'next'
import Link from 'next/link'
import Footer from '../../components/footer'

const Skills : NextPage = () => {
    return (
        <>
            <h1>Skills Screen</h1>
            <h2>
                <Link href="/">
                <a>Back to home</a>
                </Link>
            </h2>
            <Footer />
        </>
    )
}

export default Skills