import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      {/* Header */}
      <header >
        <NavBar />
      </header>

      {/* Main Content */}
      <main className="flex-grow  mx-auto w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
