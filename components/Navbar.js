import Link from "next/link";
import Head from "next/head";
import {BsLightbulb} from 'react-icons/bs'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useEffect , useState} from "react";

    
    
const Navbar = () => {

    const Home = 'Home/>'
    const About = 'About/>'
    const Contact = 'Contact/>'
    const [nav, setNav] = useState(false)

    const handleNav = ()=> {
        setNav(!nav)
    }

    return ( 
        <>
            <div className={nav? 'font-body w-full h-24 bg-[#313044] dark:bg-[#d4d4d9] dark:text-black list-none text-white duration-300 ease-in' :'ease-in hidden'} id='nav'>
                <div className={nav? 'flex p-8 justify-center items-center duration-500 ease-in-out':'ease-in-out'}>
                    <Link href='/'><li onClick={handleNav} className=" text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-yellow-300 dark:text-black uppercase">{Home}</li></Link>
                    <Link href='/about'><li onClick={handleNav} className="ml-6 uppercase hover:bg-black/40 p-1">{About}</li></Link>
                    <Link href='/contact'><li onClick={handleNav} className="ml-6 uppercase hover:bg-black/40 p-1">{Contact}</li></Link>
                </div>
            </div>
            <div className="p-4 flex justify-between items-center">
            <li className="text-white dark:text-gray-800 list-none hamburger flex">
                <BsLightbulb size={20}/><span className="font-bold text-white dark:text-gray-800 hover:text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-yellow-300">L</span>
            </li>
            <li onClick={handleNav} className="text-white dark:text-gray-800 list-none z-50">
                <AiOutlineMenu size={20} />
            </li>
            </div>
        </>





        /*                         --CODE LEARNT FROM ONLINE TUTORIALS--
        <div className="font-body fixed w-full h-20 z-[50]">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <div>
                    <h1 className="text-white text-2xl md:text-3xl"><span className="text-[#cf2e2e] text-transparent bg-clip-text bg-gradient-to-r from-[#cf2e2e] to-yellow-500">O</span>luwademilade</h1>
                </div>
                <ul className="font-body hidden md:flex">
                <Link href="/"><a className="text-white ml-10  hover:border-b">Home</a></Link>
                <Link href="/"><a className="text-white ml-10  hover:border-b">About</a></Link>
                <Link href="/"><a className="text-white ml-10  hover:border-b">Services</a></Link>
                <Link href="/"><a className="text-white ml-10  hover:border-b">Portfolio</a></Link>
                <Link href="/"><a className="text-white ml-10  hover:border-b">Contact</a></Link>
                </ul>
                <div className="text-white cursor-pointer shadow-lg shadow-black p-2">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className="fixed left-0 top-0 w-full h-screen bg-black/20">
                <div className="fixed left-0 top-0 w-[75%] md:w-[45%] sm:w-[60%] h-screen bg-[#11101d] ease-in duration-500 ">
                    <div className=" flex w-full items-center justify-between p-8">
                        <div className="text-white hover:w-6 cursor-pointer">
                            <BsFillMoonStarsFill />
                        </div>
                        <div className="text-white cursor-pointer shadow-lg shadow-black p-2">
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-white text-2xl text-center  pb-2 font-poppins md:text-3xl"><span className="text-[#cf2e2e] text-transparent bg-clip-text bg-gradient-to-r from-[#cf2e2e] to-yellow-500">O</span>luwademilade Ala</h1>
                        <p className="text-white text-center mx-auto w-[85%] md:w-[90%]">Join me below, and let's get to work.</p>
                    </div>
                <div className="py-4 flex flex-col">
                    <ul className="uppercase">
                    <Link href="/"><li className="text-white text-sm ml-10 py-4 hover:">Home</li></Link>
                    <Link href="/"><li className="text-white text-sm ml-10 py-4">About</li></Link>
                    <Link href="/"><li className="text-white text-sm ml-10 py-4">Services</li></Link>
                    <Link href="/"><li className="text-white text-sm ml-10 py-4">Portfolio</li></Link>
                    <Link href="/"><li className="text-white text-sm ml-10 py-4">Contact</li></Link>
                    </ul>
                </div>
                </div>
            </div>
        </div>*/
     );
}
 
export default Navbar;