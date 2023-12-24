import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const LogIn = () => {

    const { logIn } = useAuth();
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        logIn(email, password)
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Log In",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/");
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <Helmet>
                <title>Task Manager | LogIn</title>
            </Helmet>

            <div className="hero min-h-screen bg-slate-400">

                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl shadow-blue-300 bg-base-100 rounded-none my-20">

                    <form onSubmit={handleLogIn} className="card-body">
                        <h2 className=" text-center text-3xl font-bold">Log In</h2>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="LogIn" className="btn btn-outline hover:bg-blue-600 rounded-none text-xl" />
                        </div>

                        {/* SocialLogin */}
                        {/* <GoogleLogin></GoogleLogin> */}

                        <div className=" border border-black p-2">
                            <p>Have an account? if no, please <Link to={'/signup'}><button className="btn-link font-semibold text-blue-600">Sign Up</button></Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default LogIn;