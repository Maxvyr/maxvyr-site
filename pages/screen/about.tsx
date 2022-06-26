import type { NextPage } from 'next'
import Link from 'next/link'
import Footer from '../../components/footer'

const About : NextPage = () => {
    return (
        <>
            <h1>About Screen</h1>
            <h2>
                <Link href="/">
                <a>Back to home</a>
                </Link>
            </h2>
            <Footer />
        </>
    )
}

export default About