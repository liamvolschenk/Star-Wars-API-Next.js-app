//importing head so I can change the title of the page
import Head from 'next/head'
//importing the necessary components
import Navbar from '../components/Navbar'
import Home from '../components/Home'

//using the getStaticProps function to fetch the data needed. Then passing the results as props so that the Home component can use them.
export async function getStaticProps() {

    const res = await fetch('https://www.swapi.tech/api/people')
        .then(res => res.json())

    return {
        props: {
            data: res

        }
    }
}

//the index page acts as the home page, adding some components to make it functional and nice to look at
export default function Index({ data }) {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>


            <section className="page1">
                <Navbar />
                <div className="hero">
                    <img className="logo" src="/logo.png" alt="" />
                </div>
            </section>
            <section className="page2">
                <Home data={data} />
                <img className="luke" src="/luke.jpg" alt="" />
                <img className="bubble" src="bubble.png" alt="" />
                <div className="bubble-text">
                    <p>Click on a character to find out more about them!</p>
                </div>
            </section>
        </div>
    )
}