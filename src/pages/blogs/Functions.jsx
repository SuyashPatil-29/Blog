import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Functions = () => {
        return (
            <div id="#top">
                <Head>
                  <title>JS Functions</title>
                </Head>
                <header className='lg:mx-[162px]'>
                  <Navbar />
                  <div className="">
                  <p className="text-md text-gray-800 dark:text-gray-200 grid place-content-center lg:-mb-3">Sunday, May 7, 2023</p>
                  <h1 className="lg:text-[48px] text-3xl  font-bold dark:text-white grid place-content-center lg:mx-0 mx-3 mt-5 -mb-10">Variables and Constants in JavaScript</h1>
                  <hr className="my-14 dark:bg-white bg-black dark:h-0 h-1"/>
                  </div>
                </header>
        
                <div className="bg-white dark:bg-transparent">
                    <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
                    <div className="max-w-2xl">
            {/* <!-- Avatar Media --> */}
                    <div className="flex justify-between items-center mb-6">
                    <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                    <div className="flex-shrink-0">
                        <Image className="h-12 w-12" src="/Assets/ProfilePictureMaker.png" alt="Image Description" width={12} height={12} />
                    </div>
        
                <div className="grow">
                  <div className="grid sm:flex sm:justify-between sm:items-center gap-2">
                    <div>
                      {/* <!-- Tooltip --> */}
                      <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                        <div className="hs-tooltip-toggle sm:mb-1 block text-left cursor-pointer">
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            Suysh Patil
                          </span>
                        </div>
                      </div>
                      {/* <!-- End Tooltip --> */}
        
                      <ul className="text-xs text-gray-500">
                        <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                          May 7, 2023
                        </li>
                        <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                          8 min read
                        </li>
                      </ul>
                    </div>
        
                    {/* <!-- Button Group --> */}
                    <div>
                      <button type="button" className="py-1.5 px-2.5 sm:py-2 sm:px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs sm:text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                        <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                        Tweet
                      </button>
                    </div>
                    {/* <!-- End Button Group --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Avatar Media --> */}
        
        
              <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box max-w-3xl content-center mx-auto my-12">
                <div className="collapse-title text-xl font-medium dark:bg-inherit bg-slate-200 dark:border-none border-black">
                Table of Contents
                </div>
                <div className="flex flex-col gap-[3px]">
                <li className='pl-6'><a href="#what-are-variables" className="text-md text-gray-800 dark:text-green-300 underline">What are Variables?</a></li>
                <li className='pl-6'><a href='#variable-declaration' className="text-md text-gray-800 dark:text-green-300 underline">JavaScript variable declaration, Initializing and Assigning Variables</a></li>
                <li className='pl-6'><a href='#var-keyword' className="text-md text-gray-800 dark:text-green-300 underline">The var keyword</a></li>
                <li className='pl-6'><a href='#let-keyword' className="text-md text-gray-800 dark:text-green-300 underline">The let keyword</a></li>
                <li className='pl-6'><a href='#const-keyword' className="text-md text-gray-800 dark:text-green-300 underline">The const keyword</a>
                </li>
                <li className='pl-6'><a href='#variable-scope' className="text-md text-gray-800 dark:text-green-300 underline">Scope of a variable</a></li>
                <li className='pl-6'><a href='#variable-hoisting' className="text-md text-gray-800 dark:text-green-300 underline">The hoisting of a variable </a></li>
                <li className='pl-6 pb-4'><a href="#difference" className="text-md text-gray-800 dark:text-green-300 underline">The var keyword vs let keyword vs const keyword</a></li>
                </div>
              </div>
        
        
            {/* <!-- Content --> */}
            <div className="space-y-5 md:space-y-8">
              <div className="space-y-3" id='what-are-variables'>
                <h2 className="text-3xl font-bold md:text-3xl dark:text-pink-700 text-violet-400 py-4">What are Functions?</h2>
              </div>
        
              <p className="text-lg text-gray-800 dark:text-gray-200">Functions are the building blocks of a computer program. They are used to perform a specific task. In JavaScript, functions are defined using the function keyword, followed by a name, followed by parentheses (). The code inside the parentheses is called the function body.
                <br /><br />In this article, we will look at function in JavaScript, different ways to declare a function, how to call a function, how to return a value from a function, how to pass parameters to a function, and how to use variables inside a function.</p>
        
              <h2 className="text-3xl font-bold md:text-3xl  dark:text-pink-700 text-violet-400 py-4" id='variable-declaration'>JavaScript function declaration and its types.</h2>
              <p className="text-md text-gray-800 dark:text-gray-200">A function is a block of code designed to perform a particular task which reduces repetition and improves readability of the code.</p>
              <p className="text-md text-gray-800 dark:text-gray-200">Declaring a function means that we have to tell the compiler about the function’s name, the function’s parameters, and the function’s return type. The compiler then uses these information to create a function object.
                <br /><br />In Javascript Function can be declares in three ways,</p>

                <p className="text-md text-gray-800 dark:text-gray-200">
                    <ol>
                        <li>1. Function Declaration</li>
                        <br />
                        <div className="mockup-code w-full object-cover rounded-xl">
                          <pre data-prefix="1"><code>function functionName(parameters) {
                              // function body
                            }
                            </code></pre>
                        </div>
                        <br />
                        <li>2. Function Expression</li>
                        <br />
                        <div className="mockup-code w-full object-cover rounded-xl">
                          <pre data-prefix="1"><code>let variableName = function(x, y) {
                              // function body
                            }
                            </code></pre>
                        </div>
                        <br />
                        <li>3. Arrow Function</li>
                        <br />
                        <div className="mockup-code w-full object-cover rounded-xl">
                          <pre data-prefix="1"><code> const functionName = (parameters) =&gt;{
                              // function body
                            }
                            </code></pre>
                        </div>
                        <br />
                        The Arrow Functions were introduced in the ES6 version of JavaScript. They are also known as Lambda Functions and can also be used Anonymous Functions without being declared and given a name.
                    </ol>
                </p>
        
              <h2 className="text-3xl font-bold md:text-3xl  dark:text-pink-700 text-violet-400 py-4" id='var-keyword'>The var keyword</h2>
              <p className="text-md text-gray-800 dark:text-gray-200">The var keyword is the most basic way to declare a variable in JavaScript. It is used when we want to declare a variable that can be used throughout the program and is not bound to a specific function or a block of code. Examples of var keyword declaration is shown in the above code snippet.Best use cases to use var keyword is when we want to create functions.<br /><span className='underline'>Note: The var keyword is not recommended for use in new projects.</span></p>
              
              <p className="text-md text-gray-800 dark:text-gray-200">Variables declared with var can be re-declared and re-initialized. Below is a valid pieces of code using the var keyword.</p>
        
              <div className="mockup-code w-full object-cover rounded-xl">
                <pre data-prefix="1"><code>var x=2</code></pre>
                <pre data-prefix="2" className="text-warning"><code>var x=3</code></pre> 
                <pre data-prefix="2" className="text-success"><code>var x=a+b</code></pre>
              </div>
        
              <div className="text-sm text-center text-gray-500">
                  Examples of valid useage of var keyword.
              </div>
        
              <h2 className="text-3xl font-bold md:text-3xl  dark:text-pink-700 text-violet-400 py-4" id='let-keyword'>The let keyword</h2>
        
              <p className="text-md text-gray-800 dark:text-gray-200">The let keyword is used to declare a variable that can be re-declared and re-initialized but is bound to a specific function or a block of code. Examples of let keyword declaration is shown in the above code snippet. Variables declared with let are block scoped and cannot be accessed outside the block. Variables declared with let are mutable. Variables declared with let are not hoisted. </p>
        
              <div className="mockup-code w-full object-cover rounded-xl">
                <pre data-prefix="1"><code>let x=2</code></pre>
                <pre data-prefix="2" className="text-warning"><code>let x=3</code></pre> 
                <pre data-prefix="2" className="text-success"><code>let x=a+b</code></pre>
              </div>
        
              <div className="text-sm text-center text-gray-500">
                  Examples of valid useage of let keyword.
              </div>
        
              <p className="text-md text-gray-800 dark:text-gray-200">The best use case of the let keyword is to iterate the loop in for loops and other loops.</p>
        
              <div className="mockup-code">
              <pre data-prefix="1"><code>for(let i=0; i&#60;=10; i++)</code></pre>
              </div>
              <div className="text-sm text-center text-gray-500">
                  Best use case of the let keyword.
              </div>
        
              <h2 className="text-3xl font-bold md:text-3xl  dark:text-pink-700 text-violet-400 py-4" id='const-keyword'>The const keyword</h2>
              <p className="text-md text-gray-800 dark:text-gray-200">The const keyword is used to declare a variable that cannot be used throughout the program and is bound to a specific function or a block of code. Examples of const keyword declaration is shown in the above code snippet. Variables declared with const are immutable. Variables declared with const are not hoisted.</p>
        
              <div className="mockup-code w-full object-cover rounded-xl">
                <pre data-prefix="1"><code>const x=2</code></pre>
                <pre data-prefix="2" className="bg-warning text-warning-content"><code>const x=3</code></pre> 
                <pre data-prefix="3" className="bg-warning text-warning-content"><code>const x=a+b</code></pre>
              </div>
              <div className="text-sm text-center text-gray-500">
                  Examples of valid useage of const keyword.
              </div>
        
              <p className="text-md text-gray-800 dark:text-gray-200 underline">In the above code, the text highlighted in yellow is not valid as variables declared with const cannot be reassigned.</p>
              <p className="text-md text-gray-800 dark:text-gray-200">The best use case of the const keyword is to declare constants and assign them values.</p>
        
              <div className="mockup-code">
              <pre data-prefix="1"><code>const x=2</code></pre>
              </div>
        
              <div className="text-sm text-center text-gray-500">
                  Best use case of the const keyword
              </div>
        
              <h2 className="text-3xl font-bold md:text-3xl  dark:text-pink-700 text-violet-400 py-4" id='variable-scope'>The scope of a variable</h2>
              
              <p className="text-md text-gray-800 dark:text-gray-200">The scope of a variable is the part of the program where the variable is accessible. The scope of a variable is determined by the block in which the variable is declared. Variables declared with var are global and variables declared with let are local. Variables declared with const are local.</p>
        
              <h2 className="text-3xl font-bold md:text-3xl  dark:text-pink-700 text-violet-400 py-4" id='variable-hoisting'>The hoisting of a variable</h2>
              <p className="text-md text-gray-800 dark:text-gray-200">The hoisting of a variable is the process in which a variable is moved to the top of the scope in which it is declared. Variables declared with var are hoisted to the top of the scope in which they are declared. Variables declared with let and const are not hoisted.</p>
              
              <h2 className="text-3xl font-bold md:text-3xl  dark:text-pink-700 text-violet-400 py-4">The var keyword vs let keyword vs const keyword</h2>
              <p className="text-md text-gray-800 dark:text-gray-200">The var keyword is used to declare a variable that can be re-declared and re-initialized but is bound to a specific function or a block of code. The let keyword is used to declare a variable that can be re-declared and re-initialized but is bound to a specific function or a block of code. The const keyword is used to declare a variable that cannot be used throughout the program and is bound to a specific function or a block of code. Variables declared with var are global and variables declared with let are local. Variables declared with const are local.</p>
        
        
              {/* <p className="">hellp world</p> */}
        
        
              <hr className="my-14 dark:bg-white bg-black dark:h-0 h-1"/>
            </div>
            {/* <!-- End Content --> */}
          </div>
        </div>
        {/* <!-- End Blog Article --> */}
                </div>
        
        
                <div className= "fixed lg:bottom-9 lg:right-11 bottom-6 right-6 hover:opacity-80">
                  <Link href="#top" className="inline-flex items-center px-3 py-2 text-md font-medium text-center">
                  <button className="bg-slate-300 hover:bg-pink-600 rounded-full">
                     <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" className="h-[48px] w-[48px]" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.001 10.978h-3.251c-.412 0-.75-.335-.75-.752 0-.188.071-.375.206-.518 1.685-1.775 4.692-4.945 6.069-6.396.189-.2.452-.312.725-.312.274 0 .536.112.725.312 1.377 1.451 4.385 4.621 6.068 6.396.136.143.207.33.207.518 0 .417-.337.752-.75.752h-3.251v9.02c0 .531-.47 1.002-1 1.002h-3.998c-.53 0-1-.471-1-1.002z" fillRule="nonzero"/></svg>
                  </button>            
                  </Link>
                </div>
        
        
                <Footer />
            </div>
            );
}

export default Functions;
