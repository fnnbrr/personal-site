import React from 'react';
import '../Root.css';
import Header from "../Header";
import Footer from "../Footer";

export default function Root() {
    return (
        <div className="Root">
            <header>
                <Header/>
            </header>
            <div className={"Root-header"}>
                <p>Finnbarr O'Callahan</p>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}