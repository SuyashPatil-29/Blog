import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Error404 = () => {
    return (
        <div>
        <Head>
            <title>Something went wrong</title>
        </Head>
            <section className="bg-white dark:bg-transparent h-full min-h-screen flex flex-col justify-between">
            <header className= "lg:mx-[162px] dark:bg-transparent bg-white">
                <Navbar />
                <hr className="my-14 dark:bg-white bg-black dark:h-0 h-1"/>
            </header>
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something&apos;s missing. Or the article you are looking for is not written yet. : )</p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
                <Link href="/" className="inline-flex text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
                </div>   
                </div>
                <footer>
                    <Footer />
                </footer>
            </section>
        </div>
    );
}

export default Error404;
