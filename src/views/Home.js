import React, {memo, Suspense} from "react";
import MetaTags from "../components/MetaTags";
import ImageSEO from "../components/ImageSEO";
import {Link} from "react-router-dom";
import banner_bg from "../assets/banner-pago-en-linea/background-des.webp";
import banner_bg_min from "../assets/banner-pago-en-linea/background-des_11zon.webp";
import banner_bg_sm from "../assets/banner-pago-en-linea/background-res.webp";
import banner_img from "../assets/banner-pago-en-linea/txt-des.webp";
import banner_img_sm from "../assets/banner-pago-en-linea/txt-res.webp";
import banner_img_sm_min from "../assets/banner-pago-en-linea/txt-res_11zon.webp";
import banner_pc_doc from "../assets/home/pc-doc.webp";
import banner_bag from "../assets/home/bag.webp";
import banner_pc_phone from "../assets/home/pc-phone.webp";
import people_use from "../assets/home/people-use.webp";
import woocommerce from "../assets/home/woocommerce-img-home.png";
import jump_seller from "../assets/home/jumpseller-logo-home.webp";
import services from "../assets/home/servicios-integrados.png";
import service_api from "../assets/home/servicioapi.png";
import {PartnerSection} from "./homeSections/PartnerSection";
import {OnlinePaymentSection} from "./homeSections/OnlinePaymentSection";
import {PrincipalFunctionsSection} from "./homeSections/PrincipalFunctionsSection";
import {IntegrationLink} from "./homeSections/IntegrationLink";

const Home = memo(() => {
    return (
        <>
            <MetaTags
                title={"FACTO® - Sistema de ventas y administración gratuito"}
                description={
                    "Sistema de ventas y administración gratuito de Chile | FACTO emite facturas electrónicas gratis y sin límites"
                }
                url={"/"}
            >
                <link rel="preload" fetchPriority="auto" as="image" href={banner_bg_min} type="image/webp"/>
                <link rel="preload" fetchPriority="auto" as="image" href={banner_img_sm_min} type="image/webp"/>
                <link rel="preload" fetchPriority="high" as="image" href={banner_img_sm} type="image/webp"/>
                <link rel="preload" fetchPriority="high" as="image" href={banner_bg} type="image/webp"/>
            </MetaTags>
            <BannerSection/>
            <DescriptionSection/>
            <Suspense fallback={<div>Loading Other sections...</div>}>
                <OnlinePaymentSection/>
                <PrincipalFunctionsSection/>
                <PartnerSection/>
            </Suspense>
        </>
    );
});

const DemoForm = memo(() => (
    <form
        name="formDemo-home"
        id="formDemo-home"
        action="https://conexion.facto.cl/envio_demo.php"
        method="post"
        onSubmit="return validateDemo()"
        data-hs-cf-bound="true"
    >
        <p className="h4 fw-semibold text-center">
            Prueba nuestra <br/>
            DEMO en línea
        </p>
        <div className="form-floating mb-3 text-dark">
            <input
                id="name"
                type="text"
                name="firstname"
                className="form-control input-facto"
                placeholder="Súper empresa LTDA."
                required
            />
            <label className="control-label" htmlFor="firstname">
                Nombre
            </label>
        </div>
        <div className="form-floating mb-3 text-dark">
            <input
                id="email"
                type="email"
                name="email"
                className="form-control input-facto"
                placeholder="misuperempresa@mail.com"
                required
            />
            <label className="control-label" htmlFor="email">
                Email
            </label>
        </div>
        <div className="form-floating mb-3">
            <div className="form-floating mb-3 text-dark">
                <input
                    id="phone"
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Teléfono"
                    required
                />
                <label className="control-label" htmlFor="phone">
                    Teléfono
                </label>
            </div>
        </div>
        <div className="text-center">
            <button type="submit" className="btn btn-success">
                Prueba FACTO
            </button>
        </div>
        <input type="hidden" name="recaptcha_response" id="demohome-recaptchaResponse" value=""/>
    </form>
));

const BannerSection = memo(() => (
    <section className={"pb-5 pb-lg-0"}>
        <div className="banner-bg position-absolute z-n1 w-100">
            <ImageSEO
                alt="banner-bg"
                sources={[
                    {srcSet: banner_bg, type: "image/webp", media: "(min-width: 992px)"},
                    {srcSet: banner_bg_sm, type: "image/webp", media: "(min-width: 320px)"},
                ]}
                defaultSrc={banner_bg}
                placeholderSrc={banner_bg_min}
                width="1326"
                height="781"
                isCritic={true}
                style={{width:"100%",height:"800",aspectRatio:"auto 1326/781"}}
            />
        </div>
        <div className="banner-content container">
            <div className="row mt-4 d-inline-flex">
                <div className="align-items-center col-12 col-lg-8 d-flex">
                    <ImageSEO
                        alt={"banner-img"}
                        sources={[
                            {srcSet: banner_img, type: "image/webp", media: "(min-width: 992px)"},
                            {srcSet: banner_img_sm, type: "image/webp", media: "(min-width: 320px)"},
                        ]}
                        defaultSrc={banner_img}
                        height={"auto"}
                        placeholderSrc={banner_img_sm_min}
                        width={"100%"}
                        isCritic={true}
                    />
                </div>
                <div className="col-12 col-lg-4">
                    <a className="d-block d-lg-none my-4 btn btn-secondary btn-lg" href="./registrarse">
                        Regístrate en FACTO
                    </a>
                    <div className="card border-0 d-none d-lg-block text-light">
                        <div className="card-body">
                            <DemoForm/>
                        </div>
                    </div>
                    <div className="card border-0 d-block d-lg-none bg-light text-dark shadow">
                        <div className="card-body">
                            <DemoForm/>
                        </div>
                    </div>
                    <div className={"d-flex justify-content-center"}>
                        <a className="d-none d-lg-block mt-4 btn btn-secondary btn-lg" href="./registrarse">
                            Regístrate en FACTO
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
));

const DescriptionSection = memo(() => (
    <section className={"pb-5"}>
        <div className="container">
            <div className="bg-light border-0 card shadow">
                <div className="card-body py-5">
                    <h2 className="text-center fw-semibold">
                        Un sistema de ventas, administración y facturación<br/> que permite <b
                        className={"text-success"}>gestionar
                        tu negocio</b>
                    </h2>
                    <div className="row pt-5">
                        <div className="col-12 col-lg-4 text-center">
                            <ImageSEO defaultSrc={banner_pc_doc} placeholderSrc={banner_pc_doc} sources={[]}
                                      alt={"Aumenta tus ingresos"} height={"60"} width={"76"} loading="lazy"/>
                            <p className={"h4 fw-semibold mt-2"}>
                                Aumenta <br/>
                                tus ingresos
                            </p>
                        </div>
                        <div className="col-12 col-lg-4 text-center">
                            <ImageSEO defaultSrc={banner_bag} placeholderSrc={banner_bag} sources={[]}
                                      alt={"Ahorra tiempo"} height={"60"} width={"76"} loading="lazy"/>
                            <p className={"h4 fw-semibold mt-2"}>
                                Ahorra <br/>
                                tiempo
                            </p>
                        </div>
                        <div className="col-12 col-lg-4 text-center">
                            <ImageSEO defaultSrc={banner_pc_phone} placeholderSrc={banner_pc_phone} sources={[]}
                                      alt={"Úsalo en cualquier dispositivo"} height={"60"} width={"76"} loading="lazy"/>
                            <p className={"h4 fw-semibold mt-2"}>
                                Úsalo en <br/>
                                cualquier dispositivo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-center h1 fw-semibold my-5">
                FACTO automatiza tu negocio <br/>
                y aumenta tus <b className={"text-success"}>ingresos mensuales</b>
            </h2>
            <div className="row">
                <div className="col-12 col-lg-6 text-center mb-5 mb-lg-0">
                    <ImageSEO defaultSrc={people_use} placeholderSrc={people_use} sources={[]}
                              alt={"Diseño completo de funcionalidades para PYMEs y emprendedores"} width={"auto"}
                              height={"auto"} loading="lazy"/>
                </div>
                <div className="align-items-center col-12 col-lg-6 d-flex text-center">
                    <div>
                        <h3 className={"h2 fw-semibold"}>
                            Incrementa <span className="text-success">tus ventas</span>
                        </h3>
                        <div className="d-flex justify-content-center">
                            <div className="border-1 border-top pt-2" style={{width: "280px"}}></div>
                        </div>
                        <p className={"h4 fw-semibold"}>Con un completo sistema de facturación en tu tienda física y
                            online.</p>
                        <p className={"fs-7"}>
                            Si estás recién formalizando tu negocio o necesitas más orden y gestión administrativa para
                            tu empresa ¡FACTO es para ti!
                        </p>
                        <div className={""}>
                            <Link className="btn btn-success" to={"./registrarse"}>
                                Registrarme en FACTO
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center mt-5">
                    <h3 className={"h2 fw-semibold"}>
                        Integraciones <span className="text-success">API</span>
                    </h3>
                    <div className="d-flex justify-content-center">
                        <div className="border-1 border-top pt-2" style={{width: "280px"}}></div>
                    </div>
                    <p className="h4 fw-semibold">
                        Conecta tu página web con los <br/>
                        principales E-commerce de Chile <br/>
                    </p>
                </div>
                <div className="row py-5">
                    <IntegrationLink src={woocommerce} alt={"Woocommerce"}
                                     to={"./producto/integracion-facto-woocommerce/"} width={"140"}/>
                    <IntegrationLink src={jump_seller} alt={"Jumpseller"}
                                     to={"./producto/integracion-facto-jumpseller/"} width={"140"}/>
                    <IntegrationLink src={services} alt={"Servicios Integrados"}
                                     to={"./producto/integracion-facto-api/"} width={"155"}/>
                    <IntegrationLink src={service_api} alt={"Servicios API"} to={"./complementos/servicios-integrados/"}
                                     width={"109"}/>
                </div>
                <div className="d-flex justify-content-center justify-content-lg-evenly align-items-center">
                    <p className="txt-contents p-2 fs-7 m-0" style={{maxWidth: "372px"}}>
                        Tus ventas online están sincronizadas con nuestro sistema, tu inventario, stock, facturas y
                        demás con el orden que necesitas en tiempo real.
                    </p>
                    <a className="text-decoration-none p-2" href="./complementos/integracion-facto-e-commerce">
                        Más información <i className=" fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
));

export default Home;
