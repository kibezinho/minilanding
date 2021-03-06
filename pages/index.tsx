import type { NextPage } from 'next'
import Head from 'next/head'
import { Button } from '../components/Button'
import Image from '../components/Image'
import { Location } from '../components/Location'
import { LINKS } from '../constants/links'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>CoxinhaSwap</title>
        <meta name="description" content="CoxinhaSwap Interface" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#f6ff9f"/>
        <meta name="theme-color" content="#fffecf"></meta>
      </Head>
    <Location main={process.env.NEXT_PUBLIC_MAIN_PAGE as string}/>
    <Image src={'coxinhaswap.png'} href={'https://t.me/CoxinhaSwap'}/>

    {LINKS.map( link => (
      <Button href={link.href} name={link.name}/>
    ))}
    </div>
  )
}

export default Home
