import cardsData from '@/Data/CardsData';
import categories from '@/Data/Categories';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Categories = () => {

    return (
        <div className="h-full min-h-screen flex flex-col justify-between">
        <Head>
            <title>Tags</title>
        </Head>
        <header className= "lg:mx-[162px] dark:bg-transparent bg-white">
                <Navbar />
                <h1 className="text-3xl font-bold dark:text-white text-black grid lg:place-content-start place-content-center">All Categories</h1>
                
                <div className= "justify-start dark:text-green-400 text-green-600 flex hover:opacity-80 pt-7 lg:mx-0 mx-3">
                    <Link href="/blogs" className="inline-flex items-center py-2 text-md font-medium text-center">
                        Go to all Blogs
                        <svg aria-hidden="true" className="w-4 h-4 -mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>

            <hr className="mb-14 dark:bg-white bg-black dark:h-0 h-1"/>
            </header>
            <div className="flex items-center justify-center my-20  lg:mx-0 mx-4">
            <div className="mr-3 border-r-4 dark:border-white border-black">
                <h1 className="pr-3 text-3xl font-semibold  dark:text-white text-black">Tags</h1>
            </div>
            <div className="grid grid-cols-3 gap-1">
            {categories.map((category) => {
                var i=0;
                cardsData.map((card) => {
                card.tags.map((tag) => {
                    if(tag === category){
                        i++
                    }})
                })

                return (
                <Link href={`/categories/${category}`} key={category} className="text-center text-md dark:text-white font-medium text-black hover:text-pink-500">{category} ({i})</Link>)}
                )}
            </div>
            </div>
            
            <footer className="">
            <Footer />
            </footer>
        </div>
    );
}

export default Categories;
