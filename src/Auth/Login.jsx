import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Login = () => {
    const { signInUser, signInWithGoogle } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                event.target.reset();
                navigate(location.state || "/");
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",

                });
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                navigate(location?.state || "/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="card bg-base-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body border-l-2 border-l-blue-500 border-r-2 border-r-orange-800 mt-5 border-gray-200">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form onSubmit={handleLogIn}>
                    <fieldset className="fieldset">

                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input border-[1px] border-blue-800  rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Email"
                        />

                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="input border-[1px] border-blue-800 rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Password"
                        />
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-blue-900 to-red-900 hover:bg-black hover:text-blue-500">
                            Login
                        </button>
                    </fieldset>
                </form>

                <button
                    onClick={handleGoogleSignIn}
                    className="btn bg-white rounded-full text-black border-[1px] border-orange-800"
                >
                    <FaGoogle />
                    Login with Google
                </button>
                <p className="text-center">
                    New to our website? Please  <Link
                        className="text-blue-500 hover:text-blue-800"
                        to="/auth/register"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
