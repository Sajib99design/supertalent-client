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
        .catch((err) => console.log(err));
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
      console.log(error);
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
      console.log(error);
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
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-center mb-8">
        My Accepted Jobs
      </h2>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You haven’t accepted any task yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <img
                  src={task.coverImage}
                  alt={task.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{task.title}</h3>
                <p className="text-gray-600 mb-1">
                  Category: <span className="font-medium">{task.category}</span>
                </p>
                <p className="text-gray-600 mb-1">
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

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleDone(task._id)}
                  disabled={task.status === "done"}
                  className={`flex-1 py-2 rounded-lg text-white font-medium ${task.status === "done"
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                    }`}
                >
                  ✅ Done
                </button>

                <button
                  onClick={() => handleCancel(task._id)}
                  className="flex-1 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600"
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
