import React, { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import { DollarSign, Edit3, Trash2, X } from "lucide-react";
import { Bars } from "react-loader-spinner";
import { useNavigate } from "react-router";

const MyJobs = () => {
    const { user } = useAuth();
    const axiosInstanceSecure = useAxiosSecure();
    const [myAlljobs, setmyAlljobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingJob, setEditingJob] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.email) return;
        axiosInstanceSecure
            .get(`/myaddjobs?email=${user.email}`)
            .then((res) => {
                setmyAlljobs(res.data);
                setLoading(false);
            })
            .catch(() => {
                Swal.fire("Error", "Failed to load your jobs. Please try again.", "error");
                setLoading(false);
            });
    }, [user, axiosInstanceSecure]);

    //  Delete
    const handleDeletePost = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstanceSecure
                    .delete(`/myaddjobs/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire("Removed!", "Your job has been deleted.", "success");
                            const remainJobs = myAlljobs.filter((j) => j._id !== id);
                            setmyAlljobs(remainJobs);
                        }
                    })
                    .catch(() => Swal.fire("Error", "Failed to remove job.", "error"));
            }
        });
    };

    // Update
    const handleUpdatePost = (job) => {
        navigate(`/updatejob/${job}`)

    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedJob = {
            title: form.title.value,
            category: form.category.value,
            summary: form.summary.value,
            coverImage: form.coverImage.value,
        };

        axiosInstanceSecure
            .put(`/myaddjobs/${editingJob._id}?email=${user.email}`, updatedJob)
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire("Updated!", "Job updated successfully!", "success");
                    setmyAlljobs((prev) =>
                        prev.map((j) =>
                            j._id === editingJob._id ? { ...j, ...updatedJob } : j
                        )
                    );
                    setEditingJob(null);
                } else {
                    Swal.fire("Info", "No changes were made.", "info");
                }
            })
            .catch(() => Swal.fire("Error", "Failed to update job.", "error"));
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

    if (!myAlljobs.length) {
        return (
            <div className="flex justify-center items-center h-60">
                <h2 className="text-xl text-gray-600 font-semibold">
                    You haven’t added any jobs yet.
                </h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen  p-4 sm:p-8 font-inter mx-auto max-w-[1400px]">
            <h1 className="title mb-8 text-center">
                My Job Posts
            </h1>

            <div className="overflow-x-auto bg-white dark:bg-gray-400 shadow-2xl rounded-2xl border border-gray-200">
                <table className="min-w-full myjobPost divide-y divide-gray-200 text-sm">
                    <thead className="bg-indigo-50">
                        <tr>
                            <th className="">
                                SL
                            </th>
                            <th>
                                Job Title
                            </th>
                            <th>
                                Name & Email
                            </th>
                            <th>
                                Salary
                            </th>
                            <th>
                                Update
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 ">
                        {myAlljobs.map((Job, index) => (
                            <tr
                                key={Job._id}
                                className="bg-white dark:bg-gray-300 hover:bg-indigo-50 transition-colors duration-150"
                            >
                                <td className="px-3 sm:px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                                    {index + 1}
                                </td>
                                <td className="px-3 sm:px-6 py-4 whitespace-nowrap font-semibold text-orange-700 dark">
                                    {Job.title} <br />
                                    {/* {Job.summary} */}
                                </td>
                                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-gray-500">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-800 font-bold text-xs mr-3">
                                            {Job.postedBy ? Job.postedBy[0].toUpperCase() : "B"}
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">
                                                {Job.postedBy}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {Job.userEmail}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-3 sm:px-6 py-4 text-green-600 font-semibold">
                                    <DollarSign className="inline w-4 h-4 mr-1" /> N/A
                                </td>
                                <td className="px-3 ">
                                    <button
                                        onClick={() => handleUpdatePost(Job._id)}
                                        className="px-3 py-1.5 text-xs rounded-md text-white bg-blue-700 hover:bg-blue-500 flex items-center gap-1"
                                    >
                                        <Edit3 className="w-3.5 h-3.5" /> Modify
                                    </button>
                                </td>
                                <td className="px-3 sm:px-6 py-4 whitespace-nowrap flex justify-center gap-2"><button
                                    onClick={() => handleDeletePost(Job._id)}
                                    className="px-3 py-1.5 text-xs rounded-md text-white bg-red-600 hover:bg-red-700 flex items-center justify-center gap-1"
                                >
                                    <Trash2 className="w-3.5 h-3.5" /> Remove
                                </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {editingJob && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
                        <button
                            onClick={() => setEditingJob(null)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
                            Update Job
                        </h2>

                        <form onSubmit={handleUpdateSubmit} className="space-y-3">
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Title</label>
                                <input
                                    name="title"
                                    defaultValue={editingJob.title}
                                    className="input input-bordered w-full mt-1"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700">Category</label>
                                <input
                                    name="category"
                                    defaultValue={editingJob.category}
                                    className="input input-bordered w-full mt-1"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700">Image URL</label>
                                <input
                                    name="coverImage"
                                    defaultValue={editingJob.coverImage}
                                    className="input input-bordered w-full mt-1"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700">Summary</label>
                                <textarea
                                    name="summary"
                                    defaultValue={editingJob.summary}
                                    className="textarea textarea-bordered w-full mt-1"
                                    rows="3"
                                ></textarea>
                            </div>

                            <div className="flex justify-end gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setEditingJob(null)}
                                    className="btn btn-sm btn-ghost"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-sm bg-blue-700 hover:bg-blue-600 text-white"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyJobs;
