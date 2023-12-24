import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const CreateTask = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <Helmet>
                <title>
                    Task Manager | Create Task
                </title>
            </Helmet>

            <div className="w-4/5 mx-auto shadow-2xl shadow-yellow-200 bg-base-100 mb-10">

                <h2 className=" pt-5 text-4xl font-bold text-center">Create Your Task</h2>

                <form onSubmit={handleSubmit(onSubmit)} className=" card-body">
                    <div className=" md:flex flex-col gap-10 w-full">

                        <div className=" flex-1 space-y-2">

                            {/* Title  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" {...register("title", { required: true })} placeholder="Title" className="input input-bordered" required />
                            </div>

                            {/* description  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea type="text" {...register("description", { required: true })} placeholder="Description" className="textarea textarea-bordered textarea-md w-full max-w-xl" required />
                            </div>

                            {/* description  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label>
                                <input type="datetime-local" {...register("deadline", { required: true })} placeholder="deadline" className="input input-bordered" required />
                            </div>

                            {/* Priority  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Priority</span>
                                </label>
                                <select defaultValue={'default'} {...register("tag", { required: true })} className=" p-2">
                                    <option disabled value="default">Select priority</option>
                                    <option value="low">Low</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="high">High</option>
                                </select>
                            </div>


                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Done</button>
                        </div>

                    </div>

                </form>
            </div>


        </div>
    );
};

export default CreateTask;