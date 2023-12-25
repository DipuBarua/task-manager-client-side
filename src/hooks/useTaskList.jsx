import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useTaskList = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const result = await axiosPublic.get(`/tasks/${user.email}`)
            return result.data;
        }
    })
    return [tasks, refetch]
};

export default useTaskList;