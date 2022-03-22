import Link from "next/link"
import Weather from "../pages/Weather"

function Navbar(){
    return <>
        <div className='navbar'>
            <Link href="/" >
            <a className='nav'> Home </a>
            </Link>
            <h1 className='Heading'>Saber Daily</h1>
            <Link href="/about" >
            <a className='nav'> About </a>
            </Link>
            <Link href="/careers" >
            <a className='nav'> Careers </a>
            </Link>
            <Link href="/contact" >
            <a className='nav'> Contact </a>
            </Link>
        </div>
        <hr/>
        <Weather/>
    </>
}

export default Navbar