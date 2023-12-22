import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Task Manager | Home</title>
            </Helmet>

            <Navbar></Navbar>
            <p className=" text-3xl">This is home page</p>

            <Footer></Footer>
        </div>
    );
};

export default Home;