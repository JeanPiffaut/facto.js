import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import {LoadingProvider} from "./components/LoadingScreen";
import Header from "./views/header/Header";
import TopBar from "./views/header/TopBar";
import Footer from "./views/Footer";

function App() {
    return (
        <LoadingProvider>
            <BrowserRouter>
                <TopBar/>
                <Header/>
                <main>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route/>
                    </Routes>
                </main>
                <Footer/>
            </BrowserRouter>
        </LoadingProvider>
    );
}

export default App;
