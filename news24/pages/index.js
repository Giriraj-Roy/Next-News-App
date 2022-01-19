import Link from 'next/link'

function Home() {
  return <>
    <h1>News app</h1>
    <br/>
    <Link href="/news">
      <a> <button>Latest News </button></a>
    </Link>
  </>
}
export default Home