import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Home() {
  return <>
    <div className=''>
      <Navbar/>
      </div>
    <br/>
    <div className='weather-card'>
      <Link href="/weather">
        <a> This is Weather card </a>
      </Link>
    </div>
    <Link href="/news">
      <a> <button>Latest News </button></a>
    </Link>
    <br/>
    <Footer/>
  </>
}
export default Home