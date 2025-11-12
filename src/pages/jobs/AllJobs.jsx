import React, { useEffect, useState } from 'react';
import useAxios from '../../hook/useAxios';
import { Link } from 'react-router';
import useAuth from '../../hook/useAuth';
import { Bars } from 'react-loader-spinner';

function AllJobs() {
    const { loading, setLoading } = useAuth();
    const [jobs, setJobs] = useState([]);
    const axiosInstance = useAxios();

    useEffect(() => {
        setLoading(true);
        axiosInstance
            .get('/alljobs')
            .then(res => {
                setJobs(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching jobs:', err);
            });
    }, [axiosInstance]);

    // 👉 handle view details
    const handleViewDetails = (id) => {

    };

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'><Bars
                height="40"
                width="40"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            /></div>
        )
    }

    return (
        <div className="p-5 mx-auto max-w-[1400px]">
            <h2 className="title  mb-6 text-center">All Jobs</h2>

            {jobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobs.map(job => (
                        <div
                            key={job._id}
                            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-md"
                        >
                            <div className="flex justify-between h-full bg-gray-200 dark:bg-gray-400  flex-col">
                                {/* Image */}
                                <figure className="h-48 overflow-hidden">
                                    <img
                                        src={job.coverImage || job.cover}
                                        alt={job.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 rounded-t-md"
                                    />
                                </figure>

                                {/* Content */}
                                <div className="p-4 space-y-3 ">
                                    <h3 className="text-center sub-title  text-blue-900">{job.title}</h3>
                                    <div className="flex justify-between my-5 border-b-1 border-blue-200 pb-3">
                                        <span className="text-sm text-orange-800">{job.postedBy}</span>
                                        <p className="text-orange-800 text-sm">{job.category}</p>
                                    </div>
                                    {/* Summary (limited text) */}
                                    <p className="text-lg font-medium text-[#222222]/90 hover:text-orange-800">
                                        {job.summary?.length > 100
                                            ? job.summary.slice(0, 200) + '...'
                                            : job.summary}
                                    </p>

                                    <p className="text-gray-500 text-xs">
                                        Posted on: {new Date(job.postedDate).toLocaleDateString()}
                                    </p>

                                    {/* View Details Button */}


                                    <Link to={`/jobdetails/${job._id}`} className='btn w-full mt-2   text-white rounded-full  bg-gradient-to-r from-[#632EE3] to-orange-900   border-none text-white  hover:bg-gradient-to-r hover:from-orange-900 hover:to-[#632EE3] '>  View Details </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">No jobs available.</p>
            )}
        </div>
    );
}

export default AllJobs;
