import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "https://super-server2.vercel.app",
});


const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
