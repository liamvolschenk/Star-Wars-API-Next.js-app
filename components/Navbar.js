import Link from 'next/link'
import Layout from '../components/Layout'

//a basic Navbar component with links to make navigation simple for the user
//i have included a layout style component below
export default function Navbar() {
    return (
        <Layout>
            <div className="nav">
                <Link className="title-link" href="/">
                    <div className="nav-title">
                        <img className="nav-icon" src="icon.png" alt="" />
                        <h1>Star Wars Characters</h1>
                    </div>
                </Link>
                <div className="menu">
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                    </ul>
                </div>
            </div >
        </Layout>
    )
}