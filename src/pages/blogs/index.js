import cardsData from '@/Data/CardsData';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';


const Index = () => {
    return (
        <div className="h-full relative">
        <Head>
            <title>Blogs</title>
        </Head>
        <div >
            <header className= "lg:mx-[162px] dark:bg-transparent bg-white">
                <Navbar />
                <h1 className="text-3xl font-bold dark:text-white text-black grid lg:place-content-start place-content-center">All Posts</h1>
            <hr className="my-14 dark:bg-white bg-black dark:h-0 h-1"/>
            </header>
        </div>
            {cardsData.map(card => {
                return(
                    <div key={card.id} className="flex flex-col justify-center lg:mx-[162px] mx-4 my-5">
                        <Link href={card.route} className="text-3xl dark:text-white font-bold md:text-3xl">{card.heading}</Link>
                        <div className="flex flex-wrap gap-2">
                        {card.tags.map(tag=>{
                            return(
                                <p key={tag} className="dark:text-green-300 text-emerald-500">{tag}</p>
                            )
                        })}
                        </div>
                        <p className="text-sm mt-2 md:text-sm dark:text-white">{card.intro}</p>
                    </div>
            )})}
            <hr className="my-14 dark:bg-white bg-black lg:mx-[162px] dark:h-0 h-1"/>
            <footer className="bottom-0 relative w-full">
                <Footer />
            </footer>
        </div>
    );
}

export default Index;
