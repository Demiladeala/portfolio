import Link from "next/link";
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineTwitter , AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
    return ( 
        <div className="mt-12 text-white w-[90%] m-auto h-[500px] items-center justify-center mb-[600px] md:mb-[100px]">
            <h1 className="text-center text-2xl ">Get in Touch</h1>
            <p className="text-sm text-center opacity-80 mt-12 sm:text-lg">
            I'm available for full-time or contract work. Contact me so we can discuss.
            </p>
            <div className="flex flex-col gap-10 w-[60%] m-auto mt-12 items-center justify-center md:flex-row md:w-[50%] md:auto md:mt-24">
                <Link href='mailto:demiladeala@gmail.com'>
                <div>
                    <div className="w-32 h-32 m-auto border-solid border rounded-full cursor-pointer hover:bg-red-600/70 hover:duration-200">
                    <AiOutlineMail className="bg-center relative top-5 left-6" size={80}/> 
                    </div>
                    <h3 className="text-center mt-4 cursor-pointer">EMAIL</h3>
                    <p className="text-sm underline text-center cursor-pointer">Message me</p>
                </div>
                </Link>

                <Link href='https://github.com/Demiladeala'>
                <div>
                    <div className="w-32 h-32 m-auto border-solid border rounded-full cursor-pointer hover:bg-red-600/70 hover:duration-200">
                        <AiFillGithub className="bg-center relative top-5 left-6" size={80}/> 
                    </div>
                    <h3 className="text-center mt-4 cursor-pointer">GITHUB</h3>
                    <p className="text-sm underline text-center cursor-pointer">My Repo</p>
                </div>
                </Link>

                <Link href='https://www.linkedin.com/in/oluwademilade-ala-010715239'>
                <div>
                    <div className="w-32 h-32 m-auto border-solid border rounded-full cursor-pointer hover:bg-red-600/70 hover:duration-200">
                    <BsLinkedin className="bg-center relative top-5 left-6" size={80}/> 
                    </div>
                    <h3 className="text-center mt-4 cursor-pointer">LINKEDLN</h3>
                    <p className="text-sm underline text-center cursor-pointer">Connect</p>
                </div>
                </Link>

                <Link href='https://twitter.com/AlaDemjosh?'>
                <div>
                    <div className="w-32 h-32 m-auto border-solid border rounded-full cursor-pointer hover:bg-red-600/70 hover:duration-200">
                    <AiOutlineTwitter className="bg-center relative top-5 left-6" size={80}/> 
                    </div>
                    <h3 className="text-center mt-4 cursor-pointer">TWITTER</h3>
                    <p className="text-sm underline text-center cursor-pointer">Follow Me</p>
                </div>
                </Link>
            </div>
        </div>
     );
}
 /*mailto:demiladeala@gmail.com */
export default Contact;