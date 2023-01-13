import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
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

const Card = (props) => {

    const [isOpen, setIsOpen] = useState(false);


    return ( 
        <>
        <motion.div transition={{ layout: { duration: 1, type: "spring"} }} layout
            onClick={() => setIsOpen(!isOpen)}
            className='bg-white/5 px-12 py-8 mb-8 cursor-pointer rounded-2xl w-[80%] m-auto'
            style={{borderRadius: "1rem", boxShadow: '0px 10px 30px rgba(0,0,0,0.5)'}}
            >
            <motion.h2 layout="position" className='text-center uppercase flex justify-center mr-3'>{props.name} &nbsp; &nbsp; <img className=' w-8 h-8 '  src={props.logo} /></motion.h2>
                {isOpen && (
                    <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration:1}}
                    exit={{opacity: 0}}
                    className='expand'
                    >
                    <img className=' rounded w-48 h-30 py-4 m-auto'  src={props.img} />
                    <p className='py-2 text-center text-base'>{props.description}</p>
                    <p className='py-2 text-center'>{props.language}</p>
                    </motion.div>
                )}
        </motion.div>
        </>
     );
}
 
export default Card;