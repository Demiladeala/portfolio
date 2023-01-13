import Link from "next/link";
import Image from "next/image";
import aboutImg from '../public/about-image.png'
import htmlImg from '../public/html.svg'
import cssImg from '../public/css.svg'
import githubImg from '../public/github.svg'
import javascriptImg from '../public/javascript.svg'
import reactImg from '../public/react.svg'
import nextImg from '../public/next.svg'
import framerImg from '../public/framer-motion.svg'
import tailwindImg from '../public/tailwindcss.svg'
import codewarsImg from '../public/codewars.svg'
import typescriptImg from '../public/typescript.svg'

const About = () => {
    return ( 
      <>
        <div className="w-[95%] m-auto flex flex-col gap-10 sm:flex-row-reverse">

          <div className="font-body h-[250px] w-44 m-auto mt-24 rounded-xl text-white p-8 bg-gradient-to-tl from-white via-stone-100 to-rose-100 md:mt-10 md:mr-10 md:w-[20%] md:h-[20%]">
            <Image src={aboutImg} className='bg-center relative w-full'></Image>
          </div>

          <div className="font-body w-full m-auto text-white p-8 ">
            <h1 className= "text-2xl text-center sm:text-3xl sm:text-left">What I Do</h1>
            <p className="text-sm mt-4 text-gray-300 sm:text-lg ">
            Hello, my name is Oluwademilade, 
            and I'm a front-end developer from Nigeria 
            studying at the Federal University of Technology in Akure (FUTA).
            </p>

            <p className="mt-4 text-sm text-gray-300 sm:text-lg sm:w-[60%]">
            I love making cool things with front-end technologies, 
            I have 2 years of experience in web development, I appreciate
            solving difficulties in web development, and I communicate well 
            with my clients to bring out their ideas in the best way possible.
            </p>

          </div>

        </div>
        <div className="text-white text-xs sm:text-base w-[90%] m-auto text-center sm:w-[50%] sm:ml-12">Here are a few of the technologies I've worked with and continue to use:
        </div>

        <div className="h-[100px] mt-12 rounded-lg w-[80%] m-auto grid grid-cols-5 gap-4 bg-center sm:w-[50%] sm:ml-16">
          <div className="rounded-md w-8 h-8"><Image src={htmlImg}></Image></div>
          <div className="rounded-md w-8 h-8"><Image src={cssImg}></Image></div>
          <div className="rounded-md w-8 h-8 bg-white"><Image src={githubImg} width='30' height={35}></Image></div>
          <div className="rounded-md w-8 h-8"><Image src={javascriptImg}></Image></div>
          <div className="rounded-md w-8 h-8"><Image src={reactImg}></Image></div>
          <div className="rounded-md w-8 h-8 bg-white"><Image src={nextImg} width='30' height={30}></Image></div>
          <div className="rounded-md w-8 h-8 bg-white"><Image src={framerImg} width='30' height={10}></Image></div>
          <div className="rounded-md w-8 h-8"><Image src={tailwindImg}></Image></div>
          <div className="rounded-md w-8 h-8 bg-white"><Image src={codewarsImg} width='35' height={35}></Image></div>
          <div className="rounded-md w-8 h-8 bg-white"><Image src={typescriptImg} width='35' height={35}></Image></div>
        </div>
      </>
     );
}
 
export default About;