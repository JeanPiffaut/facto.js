import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import {LoadingProvider} from "./components/LoadingScreen";
import {useTranslation} from "react-i18next";
import Header from "./views/Header";

function App() {
    useTranslation();

    return (
        <LoadingProvider>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route/>
                </Routes>
            </BrowserRouter>
        </LoadingProvider>
    );
}

export default App;
