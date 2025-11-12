import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../hook/useAxios";
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { Bars } from "react-loader-spinner";

const JobDetails = () => {
    const [isAccepted, setIsAccepted] = useState(false);
    const { id } = useParams();
    const [jobData, setJobData] = useState(null);
    const axiosInstance = useAxios();
    const axiosInstanceSecure = useAxiosSecure();
    const { user } = useAuth();

    useEffect(() => {
        axiosInstanceSecure
            .get(`/alljobs/${id}`)
            .then((res) => setJobData(res.data))
            .catch((err) => console.error(err));
    }, [id, axiosInstanceSecure]);

    // handle accept job
    const handleAcceptJob = () => {
        if (!user) {
            toast.error("Please login to accept a job!");
            return;
        }

        if (user.email === jobData.userEmail) {
            toast.error("You cannot accept your own job!");
            return;
        }

        const acceptedTask = {
            jobId: jobData._id,
            title: jobData.title,
            category: jobData.category,
            coverImage: jobData.coverImage,
            postedBy: jobData.postedBy,
            userEmail: user.email,
            userName: user.displayName,
            acceptedDate: new Date(),
        };

        axiosInstanceSecure
            .post("/accepted-tasks", acceptedTask)
            .then((res) => {
                if (res.data.insertedId) {
                    setIsAccepted(true);
                    toast.success("Job accepted successfully!");
                }
            })
            .catch((err) => {

                toast.error("Failed to accept the job!");
            });
    };

    if (!jobData) {
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
        <div className="max-w-3xl mx-auto bg-white dark:bg-[#16295d] shadow-lg rounded-2xl overflow-hidden mt-8 border border-gray-200">
            {/* Cover Image */}
            <img
                src={jobData.coverImage}
                alt={jobData.title}
                className="w-full h-56 sm:h-72 object-cover"
            />

            {/* Content */}
            <div className="p-4 sm:p-6 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-300 capitalize">
                    {jobData.title}
                </h2>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-600">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full w-fit text-center">
                        {jobData.category}
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="font-medium">Posted by:</span> {jobData.postedBy}
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="font-medium">Date:</span>{" "}
                        {new Date(jobData.postedDate).toLocaleDateString()}
                    </span>
                </div>

                <hr className="my-3 border-gray-200" />

                <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800  dark:text-purple-500">
                        Job Summary
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base dark:text-gray-400">
                        {jobData.summary}
                    </p>
                </div>

                {/* Apply Button */}
                <div className="pt-4">
                    <button
                        onClick={handleAcceptJob}
                        disabled={isAccepted}
                        className={`w-full  hover:opacity-70 text-white py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 ${isAccepted ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"} `}
                    >
                        Accept Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
