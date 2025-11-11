import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Registration";
import Profile from "../pages/profile/Profile";
import PrivateRoute from "./PrivateRoute";

import AddJobs from "../pages/jobs/AddJobs";
import AllJobs from "../pages/jobs/AllJobs";
import JobDetails from "../pages/jobs/JobDetails";
import MyJobs from "../pages/jobs/Myjobs";
import MyAcceptedTasks from "../pages/jobs/MyAcceptedTasks";
import Updatejob from "../pages/jobs/Updatejob";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: () => fetch('http://localhost:3000/jobs'),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-jobs",
        element: (
          <PrivateRoute>
            <AddJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/jobdetails/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/myjobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/myacceptedjobs",
        element: (
          <PrivateRoute>
            <MyAcceptedTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "/updatejob/:id",
        element: (
          <PrivateRoute>
            <Updatejob />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-jobs",
        element: <AllJobs />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
