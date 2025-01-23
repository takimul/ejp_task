

"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BlogDetail = ({ params }) => {
    // Unwrap params to get the id properly
    const { id } = React.use(params); // React.use() unwraps the params

    const [data, setData] = useState(null);

    useEffect(() => {
        // Ensure we have the id before making the API call
        if (id) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => {
                    setData(response.data); // The data will be in response.data
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [id]); // Adding id to the dependency array

    if (!data) {
        return <div>Loading...</div>; // Show loading text until data is fetched
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
            {/* Header */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h1>

            {/* Body */}
            <p className="text-gray-700 mb-4">{data.body}</p>

            {/* Button */}
            <div className="flex justify-start mt-6">
                <button 
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                    onClick={() => window.history.back()}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default BlogDetail;
