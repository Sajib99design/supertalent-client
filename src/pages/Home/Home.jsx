import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import { SuperCard } from "../../components/SuperCard";
import useAxios from "../../hook/useAxios";
import useAuth from "../../hook/useAuth";
import { Bars } from "react-loader-spinner";
import TopCategories from "./TopCategories ";
import About from "./About";


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
            <section><About /></section>
        </div>
    );
}

export default Home;
