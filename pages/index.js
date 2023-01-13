import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import myImage from '../public/my--image.png';
import { useState } from 'react';

export default function Home() {

  return (
    <>
    <header>
      <title>Oluwademilade Ala - Front-end developer</title>
      <link rel='icon' href='favicon.ico'/>
    </header>  

  <div className='  '>
    <section className="font-body text-white text-center relative top-24 w-full items-center p-5 " >
      <div>
        <div>
            <h1 className='text-4xl'>Hi,</h1>
            <p className='text-3xl'>I'm Oluwademilade,</p>
            <p className='text-lg'>A front-end developer</p>
            <p className='text-md py-5 leading-8 text-gray-400'>Modern, responsive, and user-friendly
              web applications are my area of expertise</p>
        </div>
          <div id='buttons'>
              <Link href="https://drive.google.com/file/d/1gpSj4-zgT5suSBDP1pkVlFptmRPhpKqR" className="rounded bg-gradient-to-tr from-red-500 to-yellow-300  hover:from-green-400 hover:to-blue-500 p-2 m-4 hover:duration-200 ">Resume📄</Link>
              <Link href="/projects" className="rounded bg-gradient-to-tr from-red-500 to-yellow-300 hover:from-green-400 hover:to-blue-500 p-2 m-4 hover:duration-200">My Portfolio💼</Link>
          </div>
        <div className='relative bg-gradient-to-tr mb-20 from-blue-400 to-black-300 w-40 h-40 m-auto mt-10 rounded-full '>
          <Image src={myImage} layout ='fill' />
        </div>
      </div>
    </section>
    </div>
    </>

  )
}

/*
<a className="rounded bg-gradient-to-tr from-red-500 to-yellow-300  hover:from-green-400 hover:to-blue-500 p-2 m-4 ">Resume📄</a>

<a className="rounded bg-gradient-to-tr from-red-500 to-yellow-300 hover:from-green-400 hover:to-blue-500 p-2 m-4">My Portfolio💼</a>
 */