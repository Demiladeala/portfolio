import Image from 'next/image';
import Link from 'next/link';
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return ( 
        <div className=" font-body text-gray-300 text-center w-full p-5 mt-16 bg-gray-800/60 mb-0 items-center justify-center">
            <h4 className='font-medium text-xs mt-4 md:text-base'>Copyrights reserved {year} @Oluwademilade Ala</h4>
            <div className='flex items-center justify-center gap-4 p-4 w-[50%] m-auto'>
                <li className="text-gray cursor-pointer list-none">
                    <Link href='https://github.com/Demiladeala'>
                    <AiFillGithub size={25}/>
                    </Link>
                </li>
                <li className="text-gray list-none cursor-pointer">
                    <Link href='https://www.linkedin.com/in/oluwademilade-ala-010715239'>
                    <BsLinkedin size={22}/>
                    </Link>
                </li>
                <li className="text-gray list-none cursor-pointer">
                  <Link href='https://twitter.com/AlaDemjosh?'>
                  <AiOutlineTwitter size={25}/>
                  </Link>  
                </li>
            </div>
        </div>
     );
}
 
export default Footer;

/*
<a><AiFillGithub size={25}/></a>

 <a><BsLinkedin size={22}/></a>

 <a><AiOutlineTwitter size={25}/></a>
*/
