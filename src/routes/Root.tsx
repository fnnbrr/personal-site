import React from 'react';
import '../Root.css';
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom"

export default function Root() {
    return (
        <div className="Root">
            <header>
                <Header/>
            </header>
            <Outlet />
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}