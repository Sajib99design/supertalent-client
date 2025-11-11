import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import { useLoaderData } from 'react-router'
import { SuperCard } from '../../components/SuperCard';
import useAxios from '../../hook/useAxios';
import useAuth from '../../hook/useAuth';
import { Bars, ProgressBar } from 'react-loader-spinner';


function Home() {
    const { loading } = useAuth();
    const [latestData, setLatestData] = useState([]);

    const axiosInstance = useAxios();
    useEffect(() => {
        axiosInstance.get('/latestjobs')
            .then(data => {
                setLatestData(data.data);

            })
            .catch(err => {
                console.error(err);
            });
    }, [axiosInstance]);

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
        <div>
            <Banner></Banner>
            <div className="text-center title font-bold mt-10">Latest Super Products </div>
            <div className="grid md:grid-cols-4  gap-3 mt-10">
                {latestData.map(model => <SuperCard key={model._id} model={model} />)}
            </div>
        </div>
    )
}

export default Home
