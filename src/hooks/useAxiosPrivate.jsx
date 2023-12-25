import axios from "axios";

const axiosPrivate = axios.create({
    baseURL: "https://task-manager-server-side-rho.vercel.app"
});

const useAxiosPrivate = () => {
    return axiosPrivate;
};

export default useAxiosPrivate;