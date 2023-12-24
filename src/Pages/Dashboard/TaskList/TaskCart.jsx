import Swal from "sweetalert2";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const TaskCart = ({ task, refetch }) => {
    const { _id, title, description, tag, deadline } = task;
    // console.log(title);
    const axiosPrivate = useAxiosPrivate();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPrivate.delete(`/tasks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Task has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="collapse collapse-arrow bg-base-200 mt-5">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title font-bold">
                {title}
                {deadline}
            </div>
            <div className="collapse-content">
                <p className=" text-xs">{description}</p>
                <div className=" flex justify-between">
                    <p className=" underline italic">{tag}</p>
                    <button onClick={() => handleDelete(_id)} className=" btn btn-link">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default TaskCart;