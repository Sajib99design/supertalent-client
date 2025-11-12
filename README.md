
# Developer
- 👨‍💻 Developed by: Sajib Ahmeed
- 🌐 Project: SuperTalent
- 🌸 programming-hero: 12 batch



**SuperTalent** is a modern, responsive **Job Marketplace Platform** built with React, Tailwind CSS, and Firebase Authentication.
It connects talented professionals with employers by allowing users to **post, browse, and accept job


#  Live Preview 🌸
- Client:  https://super-client-nu.vercel.app
- Server:  https://super-server-mu.vercel.app




# Clone Repository
git clone  https://github.com/Sajib99design/supertalent-client.git




##  Project Purpose

SuperTalent is designed to create a bridge between **Job Providers** and **Job Seekers**.
It allows users to:

- Post new job opportunities.
- Browse available jobs.
- Apply for jobs they’re interested in.
- Manage their own added and accepted jobs from a secure dashboard.

The goal is to make job searching and hiring fast, easy, and trustworthy.





# Apps Features
**Modern UI/UX:**
Built with Tailwind CSS and DaisyUI for a professional, fully responsive design.

 **Job Management:**
- Add new jobs
- View all jobs
- Update or delete your own job posts

**Job Application System:**
- View detailed job information
- Apply to jobs (cannot apply to your own jobs)

**My Accepted Tasks Page:**
- Displays all the jobs a user has accepted
- Manage tasks with ✅ **DONE** and ❌ **CANCEL** buttons

**Dynamic & Secure Routing:**
Uses `react-router` for navigation and private routes for authentication-protected pages.

**Firebase Authentication:**
Sign up, log in, and log out using Firebase Auth.

**Real-time Notifications:**
Toast messages via `react-hot-toast` & `react-toastify` for smooth UX.

**Modern Animations:**
Interactive animations using **Framer Motion** and **Lucide React** icons.

**Sweet Alerts:**
Confirmation alerts for deleting or updating jobs using `SweetAlert2`.





## 🔐 Protected Routes
Some routes require the user to be **logged in** before access:

| Route | Description | Access |
|-------|--------------|--------|
| `/addJob` | Add new job | 🔒 Protected |
| `/updateJob/:id` | Update job details | 🔒 Protected |
| `/deleteJob/:id` | Delete a job post | 🔒 Protected |
| `/myAddedJobs` | View all jobs created by the logged-in user | 🔒 Protected |
| `/my-accepted-tasks` | View and manage all accepted jobs | 🔒 Protected |

Public routes such as `/`, `/allJobs`, and `/login/register` are open to all users.



## 👤 My Profile Page

Each logged-in user gets a personalized **Profile Page** where they can:
- View and update their personal information
- Manage their added and accepted jobs
- Log out from the system
Profile updates trigger toast notifications and instant UI refresh.



# Additional Features
- Fully Responsive (Mobile, Tablet, Desktop)
- Minimalist UI with Tailwind CSS + DaisyUI
- Toast notifications for success/error messages
- Dedicated Error Page for invalid routes
- Navbar & Footer remain visible on all routes


## 🛠️ Tech Stack

**Frontend:** React, Tailwind CSS, DaisyUI
**Backend/API:** Node.js / Express / MongoBD
**Auth:** Firebase and  Firebase SDK Auth
**HTTP Client:** Axios
**Animation & UX:** Framer Motion, Lucide React, SweetAlert2
**Notifications:** React Hot Toast, Toastify



## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```stall



2. Start dev server
   ```bash
   npm run dev
   ```


3. Build
   ```bash
   npm run build
   ```


## 📦 Dependencies

```json
{
  "@tailwindcss/vite": "^4.1.17",
  "axios": "^1.13.2",
  "daisyui": "^5.4.5",
  "firebase": "^12.5.0",
  "framer-motion": "^12.23.24",
  "lucide-react": "^0.552.0",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.5.0",
  "react-loader-spinner": "^8.0.0",
  "react-router": "^7.9.5",
  "react-toastify": "^11.0.5",
  "sweetalert2": "^11.26.3",
  "tailwindcss": "^4.1.17",
  "toastify-js": "^1.12.0"
}
   ```
