import React, { useContext, useEffect, useState } from "react";

import toast from "react-hot-toast";
import useAuth from "../../hook/useAuth";
import useAxios from "../../hook/useAxios";
import { Bars } from "react-loader-spinner";
import useAxiosSecure from "../../hook/useAxiosSecure";

const MyAcceptedTasks = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios()
  const axiosInstanceSecure = useAxiosSecure();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (user?.email) {
      axiosInstanceSecure
        .get(`/acceptedTasks/${user.email}`)
        .then((res) => {
          setTasks(res.data)
          setLoading(false)
        }
        )
        .catch((err) =>  {
      toast.error("Failed to mark as done!");
        } );
    }
  }, [user, axiosInstanceSecure]);

  const handleDone = async (id) => {
    try {
      const res = await axiosInstanceSecure.patch(`/acceptedTasks/done/${id}`, {
        status: "done",
      });
      if (res.data.modifiedCount > 0) {
        toast.success("Task marked as DONE ✅");
        setTasks((prev) =>
          prev.map((task) =>
            task._id === id ? { ...task, status: "done" } : task
          )
        );
      }
    } catch (error) {
      toast.error("Failed to mark as done!");
    }
  };


  const handleCancel = async (id) => {
    try {
      const res = await axiosInstanceSecure.delete(`/acceptedTasks/${id}`);
      if (res.data.deletedCount > 0) {
        toast.success("Task cancelled ❌");
        setTasks((prev) => prev.filter((task) => task._id !== id));
      }
    } catch (error) {

      toast.error("Failed to cancel!");
    }
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
    <div className="mx-auto max-w-[1400px] px-4 py-10">
      <h2 className="title text-center mb-8">
        My Accepted Jobs
      </h2>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You haven’t accepted any task yet.
        </p>
      ) : (
        <div className="md:flex  justify-center flex-wrap gap-6">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white  dark:bg-[#16295d] shadow-md   border border-gray-100 flex flex-col justify-between md:w-[32%] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-md"
            >

              {/* Image */}
              <figure className="h-38 overflow-hidden">
                <img
                  src={task.coverImage}
                  alt={task.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 rounded-t-md"
                />
              </figure>
              <h3 className="text-center sub-title  text-blue-900 dark:text-blue-500 my-2">{task.title}</h3>

              <div className="p-3" >
                <div className="flex justify-between mt-4">
                  <p className="text-gray-600 flex mb-1">
                    Payment:{" "}
                    <span className="font-semibold text-green-600">
                      ${task.price}
                    </span>
                  </p>
                  <p className="text-gray-600 mb-3">
                    Status:{" "}
                    <span
                      className={`font-semibold ${task.status === "done"
                        ? "text-green-600"
                        : "text-yellow-600"
                        }`}
                    >
                      {task.status}
                    </span>
                  </p>
                </div>
                <div className="flex justify-between  mt-3 border-b-1 border-blue-200 pb-4">
                  <span className="text-sm text-secondary ">{task.postedBy}</span>
                  <p className="text-orange-800 text-sm">{task.category}</p>
                </div>
              </div>

              <div className="flex gap-3 justify-between my-3 px-3">
                <button
                  onClick={() => handleDone(task._id)}
                  disabled={task.status === "done"}
                  className={` py-2 text-sm  px-5 rounded-md text-white font-medium ${task.status === "done"
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                    }`}
                >
                  ✅ Done
                </button>

                <button
                  onClick={() => handleCancel(task._id)}
                  className=" text-sm  px-5 rounded-md bg-red-700  dark:bg-gray-700  text-white font-medium hover:bg-red-600"
                >
                  ❌ Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAcceptedTasks;
