import { FaHome, FaTasks } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className=" flex">
            {/* Dashboard Slidebar  */}
            <div className=" md:w-64 min-h-screen bg-slate-400">
                <li className=" menu-title"> <p className=" text-2xl">Task Manager</p> Manage Your Tasks</li>
                <ul className=" menu">
                    {
                        <>
                            <li>
                                <NavLink to={'/dashboard/createTask'}>
                                    <FaTasks className=""></FaTasks>
                                    Create Task
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={'/dashboard/taskList'}>
                                    <FaTasks className=""></FaTasks>
                                    Task List
                                </NavLink>
                            </li>
                        </>
                    }

                    <div className=" divider"></div>

                    {/* shared nav link  */}
                    <li>
                        <NavLink to={'/'}>
                            <FaHome className=""></FaHome>
                            Home
                        </NavLink>
                    </li>

                </ul>
            </div>

            {/* Dashboard Contents  */}
            <div className=" flex-1 text-center">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;