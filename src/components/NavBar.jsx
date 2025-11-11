import { Link, NavLink } from "react-router";
import { IoLogoModelS } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaGear, FaUser } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { ImBoxAdd } from "react-icons/im";
import { IoPersonAddSharp } from 'react-icons/io5';
import { use, useEffect, useState } from "react";
import { AuthContext } from '../provider/AuthContext'
import { Briefcase, LucidePackageCheck, Plus } from "lucide-react";

function NavBar() {
    const { user, signOutUser } = use(AuthContext);
    console.log(user);
    return (
        <div className="navbar py-0 min-h-0 z-1 shadow-sm  glass-card max-w-7xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <NavLink to={"/"}>
                                <GoHomeFill />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/all-jobs">
                                <Briefcase size={14} /> All Jobs
                            </NavLink>
                        </li>

                        {
                            user && (
                                <>

                                    <li>
                                        <NavLink to="/add-jobs">
                                            <Plus size={15} />  Add Jobs
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/myjobs">
                                            <ImBoxAdd /> My Jobs
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/myacceptedjobs">
                                            <LucidePackageCheck size={16} /> My Accepted Jobs
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/profile"}>
                                            <CgProfile />  Profile
                                        </NavLink>
                                    </li>
                                </>
                            )
                        }
                        <li>
                            <NavLink to="/auth/register">
                                <IoPersonAddSharp size={14} /> Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link to={"/"} className="flex items-center gap-1 text-xl font-bold">
                    Super
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex my-3">
                <ul className="menu menu-horizontal px-1">
                    <li className="border-e-1 border-blue-300 text-blue-800">
                        <NavLink to={"/"}>
                            <GoHomeFill />
                            Home
                        </NavLink>
                    </li>
                    <li className="border-e-1 border-blue-300 text-blue-800">
                        <NavLink to="/all-jobs">
                            <Briefcase size={14} /> All Jobs
                        </NavLink>
                    </li>
                    <li className="border-e-1 border-blue-300 text-blue-800">
                        <NavLink to="/auth/register">
                            <IoPersonAddSharp size={14} /> Register
                        </NavLink>
                    </li >
                    {
                        user && (
                            <>

                                <li className="border-e-1 border-blue-300 text-blue-800">
                                    <NavLink to="/add-jobs">
                                        <Plus size={15} />  Add Jobs
                                    </NavLink>
                                </li>
                                <li className="border-e-1 border-blue-300 text-blue-800">
                                    <NavLink to="/myjobs">
                                        <ImBoxAdd /> My Jobs
                                    </NavLink>
                                </li >
                                <li className="border-e-1 border-blue-300 text-blue-800">
                                    <NavLink to="/myacceptedjobs">
                                        <LucidePackageCheck size={16} /> My Accepted Jobs
                                    </NavLink>
                                </li>
                                <li className=" text-blue-800">
                                    <NavLink to={"/profile"}>
                                        <CgProfile />  Profile
                                    </NavLink>
                                </li>
                            </>
                        )
                    }


                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div>
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="dark" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
                {user ? (
                    <div className="dropdown dropdown-end z-50">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-9 border-2 border-gray-300 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    referrerPolicy="no-referrer"
                                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                        >
                            <div className=" pb-3 border-b border-b-gray-200">
                                <li className="text-sm font-bold text-orange-700">{user.displayName}</li>
                                <li className="text-xs text-blue-700">{user.email}</li>
                            </div>
                            <li className="mt-3">
                                <NavLink to={"/profile"}>
                                    <FaUser /> Profile
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/myjobs">
                                    <ImBoxAdd /> My Jobs
                                </NavLink>
                            </li>

                            <li >
                                <NavLink to="/myacceptedjobs">
                                    <LucidePackageCheck size={16} /> My Accepted Jobs
                                </NavLink>
                            </li>

                            <li>
                                <a>
                                    {" "}
                                    <FaGear /> Settings
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={signOutUser}
                                    className="btn btn-xs text-left btn-primary text-white"
                                >
                                    <IoLogOut /> Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Link
                        to={"/auth/login"}
                        className="btn rounded-full border-gray-300  btn-sm btn-primary text-white"
                    >
                        {" "}
                        <IoLogIn /> Login
                    </Link>
                )}
            </div>
        </div>
    );
}

export default NavBar
