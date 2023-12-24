import task_banner from "../../assets/task_banner.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Banner = () => {

    AOS.init();

    return (
        <div className=" min-h-screen">
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${task_banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-start text-neutral-content flex-col md:flex-row">
                    <div className=" max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">
                            <span className=" ">Manage work</span> <br /> Efficiently
                        </h1>
                        <p className="mb-5">Plan, Track and Organise your work.
                            <br />An Intranet platform to Manage projects, organise work and focus on what’s important.</p>
                    </div>



                    <div data-aos="flip-left">
                        <Link to={'/dashboard/taskList'}>
                            <button className="btn btn-warning rounded-full min-h-32 min-w-32 font-bold border-2 border-white text-xl">Let’s <br />Explore</button>
                        </Link>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Banner;