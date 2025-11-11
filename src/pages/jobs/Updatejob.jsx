import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { Bars } from 'react-loader-spinner';
import { Edit3, X } from 'lucide-react';
import useAuth from '../../hook/useAuth';
import Swal from 'sweetalert2';

function Updatejob() {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { user } = useAuth();
    const [updateData, setUpdateData] = useState(null);
    const axiosInstanceSecure = useAxiosSecure();
    const [editingJob, setEditingJob] = useState(null);

    useEffect(() => {
        setLoading(true);
        axiosInstanceSecure
            .get(`/updatejob/${id}`)
            .then((res) => {
                setUpdateData(res.data);
            })
            .catch((err) => {
                // console.error('Fetch job error:', err);
                Swal.fire('Error', 'Failed to load job data', 'error');
            })
            .finally(() => setLoading(false));
    }, [axiosInstanceSecure, id]);

    const handleUpdatePost = (dataEdit) => {
        setEditingJob(dataEdit);
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        if (!editingJob) return;

        const form = e.target;
        const updatedJob = {
            title: form.title.value,
            category: form.category.value,
            summary: form.summary.value,
            coverImage: form.coverImage.value,
        };

        axiosInstanceSecure
            .put(`/myaddjobs/${editingJob._id}?email=${user?.email}`, updatedJob)
            .then((res) => {
                const modifiedCount = res?.data?.modifiedCount ?? (res?.data?.acknowledged ? 1 : 0);

                if (modifiedCount > 0) {
                    Swal.fire('Updated!', 'Job updated successfully!', 'success');

                    setUpdateData((prev) => {
                        if (Array.isArray(prev)) {
                            return prev.map((j) =>
                                j._id === editingJob._id ? { ...j, ...updatedJob } : j
                            );
                        } else if (prev && typeof prev === 'object') {
                            if (prev._id === editingJob._id) {
                                return { ...prev, ...updatedJob };
                            }
                            return prev;
                        } else {
                            return { ...editingJob, ...updatedJob };
                        }
                    });

                    setEditingJob(null);
                } else {
                    Swal.fire('Info', 'No changes were made.', 'info');
                }
            })
            .catch((err) => {
                Swal.fire('Error', 'Failed to update job.', 'error');
            });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Bars
                    height="40"
                    width="40"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }

    if (!updateData) {
        return <div className="text-center py-10">No job data found.</div>;
    }

    return (
        <>
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden mt-8 border border-gray-200">
                {/* Cover Image */}
                <img
                    src={updateData.coverImage}
                    alt={updateData.title}
                    className="w-full h-56 sm:h-72 object-cover"
                />

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 capitalize">
                        {updateData.title}
                    </h2>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-600">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full w-fit text-center">
                            {updateData.category}
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="font-medium">Posted by:</span> {updateData.postedBy}
                        </span>
                    </div>

                    <hr className="my-3 border-gray-200" />

                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                            Job Summary
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            {updateData.summary}
                        </p>
                    </div>

                    {/* Apply Button */}
                    <div className="pt-4">
                        <button
                            onClick={() => handleUpdatePost(updateData)}
                            className="px-3 py-1.5 text-xs rounded-md text-white bg-blue-700 hover:bg-blue-500 flex items-center gap-1"
                        >
                            <Edit3 className="w-3.5 h-3.5" /> Modify
                        </button>
                    </div>
                </div>
            </div>

            {/* Update Modal */}
            {editingJob && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
                        <button
                            onClick={() => setEditingJob(null)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Update Job</h2>

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
                                <button type="submit" className="btn btn-sm bg-blue-700 hover:bg-blue-600 text-white">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Updatejob;
