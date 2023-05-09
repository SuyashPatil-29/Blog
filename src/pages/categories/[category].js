import cardsData from '@/Data/CardsData';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Category = () => {

    const router = useRouter()
    const { category } = router.query

    return (
        <div className="h-full min-h-screen flex flex-col justify-between">
        <Head>
            <title>Category - {category}</title>
        </Head>
        <header className= "lg:mx-[162px] dark:bg-transparent bg-white">
            <Navbar />
            <h1 className="text-3xl font-bold dark:text-white text-black grid lg:place-content-start place-content-center">Posts related to {category}</h1>
            <hr className="my-14 dark:bg-white bg-black dark:h-0 h-1"/>
            </header>
            <div className="flex flex-col justify-center lg:mx-[162px] mx-4 my-5 gap-3">
                {cardsData.map(card => card.tags.map(tag => tag === category && <Link href={card.route} key={card.id}><h1 className="text-3xl font-bold md:text-3xl dark:text-white text-black lg:mx-0 mx-3">{card.heading}</h1><p key={tag} className="dark:text-green-300 text-emerald-500 lg:mx-0 mx-3">{tag}</p><p className="text-sm mt-2 md:text-sm dark:text-white lg:mx-0 mx-3">{card.intro}</p></Link>))}
            </div>
            
            <footer className="">
            <Footer />
            </footer>
        </div>
    );
}

export default Category;
