import Link from 'next/link'
import Navbar from '../components/Navbar'

function Home() {
  return <>
    <div className=''>
      <Navbar/>
      </div>
    <br/>
    <Link href="/news">
      <a> <button>Latest News </button></a>
    </Link>
  </>
}
export default Home