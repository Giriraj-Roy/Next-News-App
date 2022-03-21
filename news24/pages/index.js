import Link from 'next/link'

function Home() {
  return <>
    <div className='Heading'>
      <div className='navbar'>
        <div>Home</div>
        <div>Careers</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <h1>Saber Daily</h1></div>
    <br/>
    <Link href="/news">
      <a> <button>Latest News </button></a>
    </Link>
  </>
}
export default Home