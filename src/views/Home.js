import logoSVG from '../assets/logo.svg';
import logo from '../assets/logo192.png';
import meta_image from '../assets/meta-image.png';
import React from "react";
import {Link} from "react-router-dom";
import {t} from "i18next";
import ImageSEO from "../components/ImageSEO";
import MetaTags from "../components/MetaTags";
import JsonLd from "../components/JsonLd";

function Home() {
    return (
        <div className="App">
            <JsonLd basicInfo={{
                type: "WebSide",
                url: "/",
                name: t('app_title'),
                description: t('app_description')
            }}/>
            <MetaTags title={t('app_title')} description={t('app_description')}
                      image={meta_image} url={"/"}/>

            <header className="App-header">
                <ImageSEO src={logo} alt={"logo"} className={"App-logo"}
                          sources={[{srcSet: logoSVG, type: "image/svg+xml"}]}/>
                <p>{t('edit_save_1')}<code>src/App.js</code>{t('edit_save_2')}</p>
                <Link
                    className="App-link"
                    to="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('learn_react')}
                </Link>
            </header>
        </div>
    );
}

export default Home;
