import Link from 'next/link'

//mapping the data passed from the index page, and rendering the data into a usable component
export default function Home({ data }) {
    return (
        <div className="home">
            <ul>
                {data.results.map((v, k) => {
                    return (
                        <div className="characters">
                            <li key={k}>
                                <Link href={`/people/${v.uid}`}>
                                    {v.name}
                                </Link>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}