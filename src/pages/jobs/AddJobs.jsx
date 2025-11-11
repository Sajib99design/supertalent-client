import React, { use, useEffect, useState } from 'react'
import useAuth from './../../hook/useAuth';
import useAxiosSecure from './../../hook/useAxiosSecure';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


function AddJobs() {
    const { user } = useAuth();
    const axiosInstanceSecure = useAxiosSecure();

    const today = new Date().toISOString().slice(0, 10);
    const fullTimestamp = new Date().toISOString();

    const handlePostJobs = (e) => {
        e.preventDefault();
        const newJob = {
            title: e.target.title.value,
            postedBy: user?.displayName,
            userEmail: user?.email,
            category: e.target.category.value,
            summary: e.target.summary.value,
            coverImage: e.target.cover.value,
            postedDate: today,

        };

        axiosInstanceSecure.post('/jobs', newJob)
            .then(data => {
                console.log('Response:', data.data);
                if (data.data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your Post has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset();
                }
            })
            .catch(err => {
                // console.error('Error posting job:', err);
                // Handle error case with a different toast message
                Swal.fire({
                    icon: "error",
                    title: "Your Job Post not send",
                    showConfirmButton: false,
                    timer: 3000,
                    toast: true,
                });
            });

    }



    return (
        <div className="card  border-l-1 border-l-blue-500 border-r-1 border-r-orange-800 bg-base-100 w-full max-w-md mx-auto shadow-2xl mt-5 rounded">
            <div className="card-body mt-3 p-6 relative">
                <h2 className="text-2xl font-bold title text-center mb-6">Add New Job</h2>
                <form onSubmit={handlePostJobs} className=" newJob space-y-4">
                    {/* Title Field */}
                    <div >
                        <label className="label">Title</label>
                        <input
                            type="text"
                            name="title"
                            required
                            className="input  w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Title"
                        />
                    </div>
                    {/* post by  */}

                    <div>
                        <label className="label font-medium">Posted By </label>
                        <input
                            type="text"
                            name="name"
                            required
                            readOnly
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200 bg-gray-100 cursor-not-allowed"
                            defaultValue={user?.displayName || 'N/A'}
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <label className="label font-medium">Category</label>
                        <select
                            defaultValue={""}
                            name="category"
                            required
                            className="select w-full rounded-full focus:border-0 focus:outline-gray-200 border-[1px] border-blue-800 "
                        >
                            <option value="" disabled>Select category</option>
                            <option value="Web">Web Development</option>
                            <option value="Graphics">Graphics Designing</option>
                            <option value="Digital">Digital Marketing</option>
                            <option value="Brand">Brand Identity Designer</option>
                            <option value="Developer">Full Stack Developer (Python/Django)</option>
                            <option value="SEO">SEO Specialist</option>
                            <option value="Campaign">PPC Campaign Manager</option>
                            <option value="Ui">UI/UX Designer</option>
                        </select>
                    </div>
                    {/* Summary Textarea */}
                    <div>
                        <label className="label font-medium">Summary</label>
                        <textarea
                            name="summary"
                            required
                            rows="3"
                            className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px] border-[1px] border-blue-800 "
                            placeholder="Enter description "
                        ></textarea>
                    </div>
                    {/* Thumbnail URL */}
                    <div>
                        <label className="label font-medium">Cover Img Url</label>
                        <input
                            type="url"
                            name="cover"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>
                    {/* user email  */}
                    <div>
                        <label className="label font-medium">Email  </label>
                        <input
                            type="text"
                            name="email"
                            required
                            readOnly // Make it read-only
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200 bg-gray-100 cursor-not-allowed"
                            defaultValue={user?.email || 'N/A'}
                        />
                    </div>

                    {/* Posted Date (Auto-filled default and Readonly) */}
                    <div>
                        <label className="label font-medium">Posted Date </label>
                        <input
                            type="date"
                            name="date"
                            required
                            readOnly // Make it read-only
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200 bg-gray-100 cursor-not-allowed"
                            // Set today's date as the default value
                            defaultValue={today}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn w-full text-white mt-6 rounded-full btn-primary hover:opacity-80 "
                    >
                        Add Job
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddJobs
