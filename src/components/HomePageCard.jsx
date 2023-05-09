import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePageCard = (props) => {
    return (
        <Link href={`${props.route}`}>
        <div className="bg-white border-gray-200 dark:bg-transparent border-2 dark:border-gray-300 rounded-3xl hover:transform hover:scale-105 dark:shadow-none shadow-2xl transition-all duration-500 min-h-[500px]">
            <Image className="w-full rounded-t-3xl h-[200px] object-cover" src={props.image} width={400} height={300} alt="home" />
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.heading}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
        </div>
    </div>
        </Link>
    );
}

export default HomePageCard;
