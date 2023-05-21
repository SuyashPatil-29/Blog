import cardsData from '@/Data/CardsData';
import HomePageCard from '@/components/HomePageCard';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className= "lg:mx-[162px] sm:w-fit">
    <Head>
        <title>SUYASH&apos;S BLOG | Home</title>
    </Head>
    <header>
      <Navbar />
    </header>

    <h1 className="text-3xl font-bold dark:text-white text-black grid lg:place-content-start place-content-center">Latest Posts</h1>
    <hr className="my-14 dark:bg-white bg-black dark:h-0 h-1"/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:w-fit px-8">

    {cardsData.map((item) => (
      <HomePageCard key={item.id} heading={item.heading} description={item.description} route={item.route} image={item.image} />
      ))}
    </div>

    <div className= " my-10 justify-end dark:text-green-400 text-green-500 flex hover:opacity-80">
    <Link href="/blogs" className="inline-flex items-center px-3 py-2 text-md font-medium text-center">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </Link>
    </div>
    
    <footer className="lg:pt-10 lg:mt-10 md:pt-12 md:mt-12">
      <Footer />
    </footer>
    </div>
  );
}

export default Home;
