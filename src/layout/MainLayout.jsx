import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

function MainLayout() {
    return (
        <div className="max-w-[1400px] mx-auto h-fit">
            <header>
                <NavBar> </NavBar>
            </header>
            <div>
                <Outlet> </Outlet>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default MainLayout
