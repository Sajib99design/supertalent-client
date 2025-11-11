// import React, { useEffect, useState } from 'react'
// import Banner from '../../components/Banner'
// import { SuperCard } from '../../components/SuperCard';
// import useAxios from '../../hook/useAxios';
// import useAuth from '../../hook/useAuth';
// import { Bars, ProgressBar } from 'react-loader-spinner';


// function Home() {
//     const { loading } = useAuth();
//     const [latestData, setLatestData] = useState([]);

//     const axiosInstance = useAxios();
//     useEffect(() => {
//         axiosInstance.get('/latestjobs')
//             .then(data => {
//                 setLatestData(data.data);

//             })
//             .catch(err => {
//                 // console.error(err);
//             });
//     }, [axiosInstance]);

//     if (loading) {
//         return (
//             <div className='flex justify-center items-center h-screen'><Bars
//                 height="40"
//                 width="40"
//                 color="#4fa94d"
//                 ariaLabel="bars-loading"
//                 wrapperStyle={{}}
//                 wrapperClass=""
//                 visible={true}
//             /></div>
//         )

//     }

//     return (
//         <div>
//             <Banner></Banner>
//             <div className="text-center title font-bold mt-10">Latest Super Products </div>
//             <div className="grid md:grid-cols-4  gap-3 mt-10">
//                 {latestData.map(model => <SuperCard key={model._id} model={model} />)}
//             </div>
//         </div>
//     )
// }

// export default Home



import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import { SuperCard } from "../../components/SuperCard";
import useAxios from "../../hook/useAxios";
import useAuth from "../../hook/useAuth";
import { Bars } from "react-loader-spinner";
import { Briefcase, Code, PenTool, Layers, ArrowUpRight } from "lucide-react";
import TopCategories from "./TopCategories ";


function Home() {
    const { loading } = useAuth();
    const [latestData, setLatestData] = useState([]);
    const axiosInstance = useAxios();

    useEffect(() => {
        axiosInstance
            .get("/latestjobs")
            .then((data) => {
                setLatestData(data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [axiosInstance]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Bars
                    height="40"
                    width="40"
                    color="#632EE3"
                    ariaLabel="bars-loading"
                    visible={true}
                />
            </div>
        );
    }

    return (
        <div className="pb-20">
            {/* ---------- Banner ---------- */}
            <Banner />

            {/* ---------- Latest Jobs Section ---------- */}
            <section className="max-w-7xl mx-auto px-4 mt-16">
                <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#632EE3] to-orange-900 bg-clip-text text-transparent">
                    Latest Super Jobs
                </h2>

                <div className="grid md:grid-cols-3  gap-6 mt-10">
                    {latestData.map((model) => (
                        <SuperCard key={model._id} model={model} />
                    ))}
                </div>
            </section>

            {/* ---------- Top Categories Section ---------- */}

            <section>
                <TopCategories></TopCategories>
            </section>

            {/* ---------- About Platform Section ----------- */}
            <section className="mx-auto mt-20  bg-gradient-to-l from-[#632EE3]/10 to-orange-900/10 md:py-16  py-6 ">
                <div className="grid md:grid-cols-2 gap-10 items-center md:px-10 px-3">
                    <img
                        src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                        alt="About Platform"
                        className="rounded-2xl shadow-lg"
                    />

                    <div className="space-y-4 max-sm:text-center">
                        <h2 className="title">
                            About the Platform
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Welcome to <span className="font-semibold">JobConnect</span> — a
                            modern job platform where you can create, manage, and accept tasks
                            effortlessly. We connect passionate developers, designers, and
                            professionals with real-world opportunities.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Post your job today or explore hundreds of listings to find your
                            next project. Whether you are an employer or freelancer, our
                            platform ensures trust, transparency, and speed.
                        </p>
                        <button className="mt-4 bg-gradient-to-r from-[#632EE3] to-orange-900 text-white font-semibold py-3 px-6 rounded-full hover:opacity-80 transition">
                            Create a Job
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
