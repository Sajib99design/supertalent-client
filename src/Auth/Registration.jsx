import React, { use } from "react";
import { Link, useNavigate } from "react-router";

import { FaGoogle } from "react-icons/fa6";

import { AuthContext } from "../provider/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // 🔹 Password Validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter!");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter!");
      return;
    }


    toast.loading("Creating user...", { id: "create-user" });
    createUser(email, password)
      .then((result) => {
        updateUserProfile(displayName, photoURL);
        toast.success("User created successfully!", { id: "create-user" });
        navigate("/auth/login");

      })
      .catch((error) => {
        toast.error(error.message, { id: "create-user" });
      });
  };

  const handleGoogleSignIn = () => {
    toast.loading("Creating user...", { id: "create-user" });
    signInWithGoogle()
      .then((result) => {
        toast.success("User created successfully!", { id: "create-user" });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, { id: "create-user" });
      });
  };

  return (
    <div className="card  w-full mx-auto max-w-sm ">
      <div className="card-body dark:bg-gray-800  shrink-0 shadow-2xl md:border-l-2 md:border-l-blue-500 md:border-r-2 md:border-r-orange-800 mt-5">

        <h1 className="title text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* email field add */}
            <label className="label">Name</label>
            <input
              type="text"
              name="displayName"
              className="input rounded-full focus:border-0 focus:outline-gray-200 border-[1px] border-blue-800"
              placeholder="Name"
            />

            <label className="label">PhotoURL</label>
            <input
              type="text"
              name="photoURL"
              className="input rounded-full focus:border-0 focus:outline-gray-200 border-[1px] border-blue-800"
              placeholder="Photo URL"
            />
            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200 border-[1px] border-blue-800"
              placeholder="Email"
            />
            {/* password field */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input rounded-full focus:border-0 focus:outline-gray-200 border-[1px] border-blue-800"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-blue-900 to-red-900 hover:bg-black hover:text-blue-500">
              Register
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
          Already have an account? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/auth/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
