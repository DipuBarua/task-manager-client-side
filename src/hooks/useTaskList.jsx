import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useTaskList = () => {
    const axiosPublic = useAxiosPublic();

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const result = await axiosPublic.get("/tasks")
            return result.data;
        }
    })
    return [tasks, refetch]
};

export default useTaskList;