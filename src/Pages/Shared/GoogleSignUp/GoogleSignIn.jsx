import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const GoogleSignIn = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);

                const googleUser = {
                    name: res.user?.displayName,
                    email: res.user?.eamil,
                    image: res.user?.photoURL,
                }

                axiosPublic.post("/users", googleUser)
                    .then(res => {
                        console.log("google signIn", res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your account has been created successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        navigate("/dashboard/taskList");
                    })
            })
            .catch();
    }


    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn rounded-none border border-black p-2 flex justify-center w-full">
                <button className="text-3xl"><FcGoogle></FcGoogle></button>
            </button>
        </div>
    );
};

export default GoogleSignIn;