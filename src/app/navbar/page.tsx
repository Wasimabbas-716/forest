import Image from 'next/image'; 
import Link from 'next/link';

 const Navbar = () => {
  return (
    <div>
    <nav className='flex justify-between px-14 py-7 items-center'>
        <div className="logo">
        <Image src="/Images/logo.png" alt="" width={80} height={80}/>
        </div>

        <div className="nav-items">
            <ul className='flex gap-11 font-medium text-xl justify-center items-center'>
              <Link href="/"><li>Home</li></Link>
              <Link href="./about"><li>About</li></Link>
              <Link href="/cards"><li>Cards</li></Link>
              <Link href="./contact"><li><button className='mt-3 bg-[#19a821] h-11 w-40 font-medium text-xl text-white rounded-xl'>Contact Us</button></li></Link>
             
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Navbar;