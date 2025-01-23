

// "use client"
// import axios from 'axios';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

// const HomePage = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then(response => {
//                 setData(response.data); // The data will be in response.data
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

   

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//             {data.map((post) => (
//                 <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
//                     <h3 className="font-bold text-xl">{post.title}</h3>
//                     <p className="text-gray-700">{post.body}</p>
//                     <Link href={`/blog/${post.id}`}><button
                        
//                         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                     >
//                         View Details
//                     </button></Link>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default HomePage;


"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [data, setData] = useState([]); // Holds the full data
    const [visibleCount, setVisibleCount] = useState(10); // Controls how many cards are visible

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setData(response.data); // The full data is set in state
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Handle View More button click
    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 10); // Increase visible count by 10 each time
    };

    return (
        <div className="p-4">
            {/* Display cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.slice(0, visibleCount).map((post) => (
                    <div key={post.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col">
                        <h3 className="font-bold text-xl h-1/3 overflow-auto">{post.title}</h3><hr />
                        <p className="text-gray-700 h-[50%] overflow-auto">{post.body}</p><hr />
                        <Link href={`/blog/${post.id}`}>
                            
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                View Details
                            </button>
                            
                        </Link>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            {visibleCount < data.length && (
                <div className="mt-6 text-center">
                    <button
                        onClick={handleViewMore}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default HomePage;
