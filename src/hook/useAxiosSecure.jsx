import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";


const axiosInstanceSecure = axios.create({
    baseURL: "http://localhost:3000",
});




const useAxiosSecure = () => {
    const { user, signOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // request interceptor
        // Axios এর মাধ‌্যমে সাভারে  headers.Authorization পাঠানো হচ্ছে
        const requestInterceptor = axiosInstanceSecure.interceptors.request.use((config) => {
            config.headers.Authorization = `Bearer ${user.accessToken}`
            return config;
        });

        // response interceptor
        // টুকেন থাকবে না তখন এই  Axios বল্ক কাজ করবে।
        const responseInterceptor = axiosInstanceSecure.interceptors.response.use(res => {
            return res;
        }, err => {
         
            const status = err.status;
            if (status === 401 || status === 403) {
                signOutUser();
                navigate('/auth/register');
            }

        })


        // unmound থেকে বের করে দিলাম
        return () => {
            axiosInstanceSecure.interceptors.request.eject(requestInterceptor)
            axiosInstanceSecure.interceptors.request.eject(responseInterceptor)
        }

    }, [user, signOutUser, navigate])

    return axiosInstanceSecure;
};

export default useAxiosSecure;