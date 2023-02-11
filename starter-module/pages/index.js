import Link from 'next/link'

const Home = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home
