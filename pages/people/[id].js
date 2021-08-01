import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'

/*telling next.js how many html pages need to be made based on the data from the api. The getStaticPaths and getStaticProps functions get triggered 
on build or development so that they do it before the final component renders on the page. */
export async function getStaticPaths() {
    return {
        //Next will see how this paths function and then know how many pages to create
        paths: [
            { params: { id: "1" } }
        ],
        fallback: true
    }
}


//this function fetchs a single item via its id and passes the data as props to render the single item. 
export async function getStaticProps(ctx) {

    const id = parseInt(ctx.params.id)
    const res = await fetch(`https://www.swapi.tech/api/people/${id}`)
        .then(res => res.json())

    return {
        props: {
            id,
            data: res.result
        }
    }
}

/*rendering the page using the fetched details from above. There is also added functionality below for a previous/next button that allows a user to browse 
the characters*/
export default function PeopleId({ id, data }) {

    const nextPage = id + 1
    const prevPage = id - 1
    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="character-page">

            <Head>
                <title>Character info</title>
            </Head>

            <section>
                <img className="navImg" src="/icon.png" alt="" />
                <Navbar />
                <div>
                    <h2 className="character-title"> {data.properties.name}</h2>
                    <div className="character-container">
                        <ul className="character-attributes">
                            <li><strong>Height:</strong> <br />{data.properties.height}cm</li>
                            <hr />
                            <li><strong>Weight:</strong> <br /> {data.properties.mass}kg</li>
                            <hr />
                            <li><strong>Hair color:</strong> <br /> {data.properties.hair_color}</li>
                            <hr />
                            <li><strong>Eye color:</strong> <br /> {data.properties.eye_color}</li>
                            <hr />
                            <li><strong>Birth year:</strong> <br /> {data.properties.birth_year}</li>
                            <hr />
                            <li><strong>Gender:</strong> <br /> {data.properties.gender}</li>
                            <hr />
                            <li><strong>birth year:</strong> <br /> {data.properties.birth_year}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="prevNext">
                <div className="prev">

                    {
                        prevPage > 0 &&
                        <button>
                            <Link href={`/people/${prevPage.toString()}`}>
                                Previous character
                            </Link>
                        </button>
                    }

                </div>

                <div className="next">
                    <button>
                        <Link href={`/people/${nextPage.toString()}`}>
                            Next character
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

