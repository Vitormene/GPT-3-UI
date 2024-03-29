import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from '../containers';
import {CTA, Brand, Navbar} from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clone GPT 3</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
      </main>
    </>
  )
}
