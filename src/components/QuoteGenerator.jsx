// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import quotes from './data.json';

// const QuoteGenerator = () => {

//     const[quote,setQuote] = useState('');
//     const[author,setAuthor] = useState('');
//     const[loading,setLoading] = useState(true);

//     // const fetchRandomQuote = async () =>{
//     //     setLoading(true);
//     //     try{
//     //         const response = await fetch("https://type.fit/api/quotes");
//     //         const data =await response.json();
//     //         const randomQuote = data[Math.floor(Math.random()*data.length)]
//     //         setQuote(randomQuote);
//     //         setAuthor(randomQuote.author || 'Unknown');
//     //         setLoading(false);
//     //     }
//     //     catch(error){
//     //         console.error('Error fetching quote :',error);
//     //         setLoading(false);
//     //     }
//     // }

//     // useEffect(()=>{
//     //     fetchRandomQuote();
//     // },[])

    
//     const fetchRandomQuote = () => {
//         setLoading(true);
//         const quotes = quotes.quotes;
//         const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//         setQuote(randomQuote.text);
//         setAuthor(randomQuote.author || 'Unknown');
//         setLoading(false);
//     };
    
//   return (
//     <>
//          <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100' >
//             <div className='max-w-lg p-6 bg-white rounded-lg shadow-lg' >
//                 {
//                     loading ? (
//                         <p className='text-xl text-gray-500' >Loading.....</p>
//                     ):
//                     (
//                         <>
//                             <p className='mb-4 text-2xl font-semibold text-gray-800' > "{quote}" </p>
//                             <p className='mb-6 text-lg text-gray-600' > - {author} </p>

//                             <button 
//                             onClick={fetchRandomQuote}
//                             className='px-6 py-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600' >
//                                 Get New Quote
//                             </button>
//                         </>
//                     )
//                 }
//             </div>
//          </div>
//     </>
//   )
// }

// export default QuoteGenerator



// QuoteGenerator.jsx
import React, { useState } from 'react';import { quotes } from './Assets/quotesData';

const QuoteGenerator = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchRandomQuote = () => {
        setLoading(true);
        try {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote(randomQuote.text);
            setAuthor(randomQuote.author || 'Unknown');
        } catch (error) {
            console.error('Error fetching quote:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
          <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100' >
             <div className='max-w-lg p-6 bg-white rounded-lg shadow-lg' >
                 {
                    loading ? (
                        <p className='text-xl text-gray-500' >Loading.....</p>
                    ):
                    (
                        <>
                            <p className='mb-4 text-2xl font-semibold text-gray-800' > "{quote}" </p>
                            <p className='mb-6 text-lg text-gray-600' > - {author} </p>

                            <button 
                            onClick={fetchRandomQuote}
                            className='px-6 py-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600' >
                                Get New Quote
                            </button>
                        </>
                    )
                }
            </div>
         </div>
    </>
    );
};

export default QuoteGenerator;
