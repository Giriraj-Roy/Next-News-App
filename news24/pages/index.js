import Link from 'next/link'
import Footer from '../components/Footer'
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
    <br/>
    <Footer/>
  </>
}
export default Home