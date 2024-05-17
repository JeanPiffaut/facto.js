import React from "react";
import MetaTags from "../components/MetaTags";
import ImageSEO from "../components/ImageSEO";
import {Link} from "react-router-dom";
import banner_bg from "../assets/banner-pago-en-linea/background-des.webp";
import banner_bg_sm from "../assets/banner-pago-en-linea/background-res.webp";
import banner_img from "../assets/banner-pago-en-linea/txt-des.webp";
import banner_img_sm from "../assets/banner-pago-en-linea/txt-res.webp";
import banner_pc_doc from "../assets/home/pc-doc.webp";
import banner_bag from "../assets/home/bag.webp";
import banner_pc_phone from "../assets/home/pc-phone.webp";
import people_use from "../assets/home/people-use.webp";
import woocommerce from "../assets/home/woocommerce-img-home.png";
import jump_seller from "../assets/home/jumpseller-logo-home.webp";
import services from "../assets/home/servicios-integrados.png";
import service_api from "../assets/home/servicioapi.png";
import pago_en_linea from "../assets/home/pago-en-linea.webp";
import home_document from "../assets/home/document.webp";
import home_document_money from "../assets/home/document-money.webp";
import cash_machine from "../assets/home/cash-machine.webp";
import boxes from "../assets/home/boxes.webp";
import people_arrow from "../assets/home/people-arrow.webp";
import chain_money from "../assets/home/chain-money.webp";
import chile_mass from "../assets/home/Logo-ChileMass.webp";
import google_cloud from "../assets/home/logo-google-cloud.webp";
import pymes_en_linea from "../assets/home/logo_pymes_en_linea_a_extend_gob.png";
import et_pay from "../assets/home/etpay.webp";
import oh_co_work from "../assets/home/ohco-work.webp";
import incuba_tec from "../assets/home/logo-incubatec-color.webp";
import logo_mer from "../assets/home/logo_mer.webp";
import diario_fin from "../assets/home/diario-financiero.webp";
import logo_sii from "../assets/home/sii.webp";
import logo_corfo from "../assets/home/logo-corfo.webp";
import logo_previred from "../assets/home/previred.webp";

function Home() {
    return (
        <>
            <MetaTags title={"FACTO® - Sistema de ventas y administración gratuito"}
                      description={"Sistema de ventas y administración gratuito de Chile | FACTO emite facturas electrónicas gratis y sin limites"}
                      url={"/"}/>
            <section>
                <div className="banner-bg position-absolute z-n1 w-100">
                    <ImageSEO alt={"banner-bg"}
                              sources={[
                                  {srcSet: banner_bg, type: "image/webp", media: "(min-width: 992px)"},
                                  {srcSet: banner_bg_sm, type: "image/webp", media: "(min-width: 320px)"}
                              ]} defaultSrc={banner_bg} height={"800"} placeholderSrc={banner_bg} width={"100%"}/>
                </div>
                <div className="banner-content container" style={{height: "calc(800px - (283px))"}}>
                    <div className="row mt-4 d-inline-flex">
                        <div className="align-items-center col-12 col-lg-8 d-flex">
                            <ImageSEO alt={"banner-img"} sources={[
                                {srcSet: banner_img, type: "image/webp", media: "(min-width: 992px)"},
                                {srcSet: banner_img_sm, type: "image/webp", media: "(min-width: 320px)"}
                            ]} defaultSrc={banner_img} height={"auto"} placeholderSrc={banner_img} width={"100%"}/>
                        </div>
                        <div className="col-12 col-lg-4">
                            <a className="d-block d-lg-none my-4 btn btn-secondary btn-lg"
                               href="./registrarse">
                                Regístrate en FACTO
                            </a>
                            <div className="card border-0">
                                <div className="card-body">
                                    <form name="formDemo-home" id="formDemo-home"
                                          action="https://conexion.facto.cl/envio_demo.php" method="post"
                                          onSubmit="return validateDemo()" data-hs-cf-bound="true">
                                        <p className="h4 fw-semibold text-center text-light">Prueba nuestra <br/>DEMO en
                                            línea
                                        </p>
                                        <div className="form-floating mb-3">
                                            <input id="name" type="text" name="firstname"
                                                   className="form-control input-facto"
                                                   placeholder="Súper empresa LTDA." required=""/>
                                            <label className="control-label" htmlFor="firstname">Nombre</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input id="email" type="email" name="email"
                                                   className="form-control input-facto"
                                                   placeholder="misuperempresa@mail.com" required=""/>
                                            <label className="control-label" htmlFor="email">Email</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <div className="form-floating mb-3">
                                                <input id="phone" type="text" name="phone"
                                                       className="form-control input-facto" placeholder="Teléfono"
                                                       required=""/>
                                                <label className="control-label" htmlFor="phone">Teléfono</label>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-success">
                                                Prueba FACTO
                                            </button>
                                        </div>
                                        <input type="hidden" name="recaptcha_response" id="demohome-recaptchaResponse"
                                               value="03AFcWeA6_RYq_V0LZx09CQ-kCDbffC_Dp7ri60n1LxxYFmzzR5gO4CqFS88A2b7ZzHQr4WjH0GkyKZXWdik2kwZdIKAN-YyZul-cr-Ay5KNhUdib3uHbmNDuAfnFfUYKeEvdKaK6aAYT8d88CQwN5SmVExWEa4_ZDbv59eBbB-O0iGF0TxF1zIX0BBuMvRMtmrxE9Nu3KQsmR4V_mTg0SpWuq9Ut_-JCFxQRdqyyFXp0ynESsXIgndaSRE3eztt1DFdDcPZV2UZlxx7KvoOl0F-GlozpFsx2DZQUAACUc7v-khMIOhzNhkwdtQI4DAra6tmRdCkZ28AS6haG9ToFZSy9q3auOCmBszoBb_Zu3zSHznJTWKDi60pHDz3ORmexjSpsY63z_kXSrGwwU02WRfdpwDE4m_gJ99euWpM6czj9Qz5ZHldx3LnAG61WimQ92-VMNka5Z3LQ3_GJuw3uzQci_P2XMbQ9RclkrERdbVY1O7_zWG8ombepSQeKpLTdmQ4alwyxq7cS0ogbo1Pk7Jh0kfhj2g-qsT0xN73niOOo-MpwckT93cwt7hFIUf6njUwmth8uEoEve1Edhnzn2vxoy3FPGv5oCPGsd9vrqJg8NoEto2yE4VcFF8pUXJ7YSmTMFgIJS2Q8qzCwMQqSIIre26zISKkJZqXIiXh5XxyUHM5o2-tgpsK2qPlSWfo7fVYEv-Qpt7ndAxCLoIJXgoHrSIgkzdQDeAg"/>
                                    </form>
                                </div>
                            </div>
                            <div className={"d-flex justify-content-center"}>
                                <a className="d-none d-lg-block mt-4 btn btn-secondary btn-lg"
                                   href="./registrarse">
                                    Regístrate en FACTO
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"pb-5"}>
                <div className="container">
                    <div className="bg-light border-0 card shadow">
                        <div className="card-body py-5">
                            <h2 className="text-center fw-semibold">Un sistema de ventas, administración y
                                facturación<br/> que permite <b className={"text-success"}>gestionar tu negocio</b>
                            </h2>
                            <div className="row pt-5">
                                <div className="col-12 col-lg-4 text-center">
                                    <ImageSEO defaultSrc={banner_pc_doc} placeholderSrc={banner_pc_doc} sources={[]}
                                              alt={"Aumenta tus ingresos"} height={"60"} width={"76"}/>
                                    <p className={"h4 fw-semibold mt-2"}>Aumenta <br/>tus ingresos</p>
                                </div>
                                <div className="col-12 col-lg-4 text-center">
                                    <ImageSEO defaultSrc={banner_bag} placeholderSrc={banner_bag} sources={[]}
                                              alt={"Ahorra tiempo"} height={"60"} width={"76"}/>
                                    <p className={"h4 fw-semibold mt-2"}>Ahorra <br/>tiempo</p>
                                </div>
                                <div className="col-12 col-lg-4 text-center">
                                    <ImageSEO defaultSrc={banner_pc_phone} placeholderSrc={banner_pc_phone} sources={[]}
                                              alt={"Úsalo en cualquier dispositivo"} height={"60"} width={"76"}/>
                                    <p className={"h4 fw-semibold mt-2"}>Úsalo en <br/>cualquier dispositivo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-center h1 fw-semibold my-5">
                        FACTO automatiza tu negocio <br/>y aumenta tus <b className={"text-success"}>ingresos
                        mensuales</b>
                    </h2>
                    <div className="row">
                        <div className="col-12 col-lg-6 text-center mb-5 mb-lg-0">
                            <ImageSEO defaultSrc={people_use} placeholderSrc={people_use} sources={[]}
                                      alt={"Diseño completo de funcionalidades para PYMEs y emprendedores"}
                                      width={"auto"} height={"auto"}/>
                        </div>
                        <div className="align-items-center col-12 col-lg-6 d-flex text-center">
                            <div>
                                <h3 className={"h2 fw-semibold"}>Incrementa <span
                                    className="text-success">tus ventas</span>
                                </h3>
                                <div className="d-flex justify-content-center">
                                    <div className="border-1 border-top pt-2" style={{width: "280px"}}></div>
                                </div>
                                <p className={"h4 fw-semibold"}>Con un completo sistema de facturación en tu tienda
                                    física y online.</p>
                                <p className={"fs-7"}>Si estás recién formalizando tu negocio o necesitas más orden y
                                    gestión administrativa para tu empresa ¡FACTO es para ti!</p>
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
                            <h3 className={"h2 fw-semibold"}>Integraciones <span className="text-success">API</span>
                            </h3>
                            <div className="d-flex justify-content-center">
                                <div className="border-1 border-top pt-2" style={{width: "280px"}}></div>
                            </div>
                            <p className="h4 fw-semibold">Conecta tu página web con los <br/>principales E-commerce de
                                Chile <br/></p>
                        </div>
                        <div className="row py-5">
                            <div className="col-6 col-lg-3 d-flex justify-content-center">
                                <Link
                                    className="align-items-center container-cicle-int d-flex justify-content-center mb-5 mb-lg-0"
                                    to={"./producto/integracion-facto-woocommerce/"}>
                                    <ImageSEO defaultSrc={woocommerce} placeholderSrc={woocommerce} sources={[]}
                                              alt={"Woocommerce"} height={"auto"} width={"140"}/>
                                </Link>
                            </div>
                            <div className="col-6 col-lg-3 d-flex justify-content-center">
                                <Link
                                    className="align-items-center container-cicle-int d-flex justify-content-center mb-5 mb-lg-0"
                                    to={"./producto/integracion-facto-jumpseller/"}>
                                    <ImageSEO defaultSrc={jump_seller} placeholderSrc={jump_seller} sources={[]}
                                              alt={"Jumpseller"} height={"auto"} width={"140"}/>
                                </Link>
                            </div>
                            <div className="col-6 col-lg-3 d-flex justify-content-center">
                                <Link
                                    className="align-items-center container-cicle-int d-flex justify-content-center mb-5 mb-lg-0"
                                    to={"./producto/integracion-facto-api/"}>
                                    <ImageSEO defaultSrc={services} placeholderSrc={services} sources={[]}
                                              alt={"Servicios Integrados"} height={"auto"} width={"155"}/>
                                </Link>
                            </div>
                            <div className="col-6 col-lg-3 d-flex justify-content-center">
                                <Link
                                    className="align-items-center container-cicle-int d-flex justify-content-center mb-5 mb-lg-0"
                                    to={"./complementos/servicios-integrados/"}>
                                    <ImageSEO defaultSrc={service_api} placeholderSrc={service_api} sources={[]}
                                              alt={"Servicios API"} height={"auto"} width={"109"}/>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-evenly align-items-center">
                            <p className="txt-contents p-2 fs-7 m-0" style={{maxWidth: "372px"}}>Tus ventas online están
                                sincronizadas con nuestro sistema, tu inventario, stock, facturas y demás con el orden
                                que necesitas en tiempo real.</p>
                            <a className="text-decoration-none p-2"
                               href="./complementos/integracion-facto-e-commerce">
                                Más información <i className=" fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"py-5 footer-body"}>
                <div className="container align-items-center d-flex">
                    <div className="row">
                        <div className="align-items-center col-12 col-lg-6 d-flex mb-5 mb-lg-0">
                            <div className="text-center text-lg-end">
                                <div className="d-flex justify-content-center justify-content-lg-end">
                                    <div
                                        className="border border-white rounded-4 d-flex justify-content-center align-items-center mb-2 p-1">
                                        <p className="m-0 text-white">¡Recomendado!</p>
                                    </div>
                                </div>
                                <h2 className="text-light fw-semibold">Pago en línea</h2>
                                <div className="d-flex justify-content-lg-end justify-content-center">
                                    <div className="border-1 border-top pt-2" style={{width: "280px"}}></div>
                                </div>
                                <div className={""}>
                                    <p className="h3 text-light fw-semibold">La forma más fácil y rápida <br/>de
                                        aumentar tus
                                        ingresos</p>
                                    <p className="text-light">Desde ahora tus cotizaciones y facturas vienen incluidas
                                        con un link de pago directo, el cual permitirá a tus clientes realizar el pago
                                        de los documentos al instante.</p>
                                    <Link className="btn btn-success" to={"./pago-en-linea"}>¡Más información!</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <ImageSEO defaultSrc={pago_en_linea} placeholderSrc={pago_en_linea} alt={"Pago en línea"}
                                      height={"auto"} width={"100%"} sources={[
                                {srcSet: pago_en_linea, type: "image/webp", media: "(min-width: 320px)"},
                                {srcSet: pago_en_linea, type: "image/webp", media: "(min-width: 450px)"}
                            ]}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"py-5 bg-light"}>
                <div className="container">
                    <div className="text-center">
                        <h2 className={"fw-semibold"}>Funcionalidades <span className="text-success">claves</span></h2>
                        <div className="d-flex justify-content-center">
                            <div className="border-1 border-top pt-2" style={{width: "280px"}}></div>
                        </div>
                        <p className="h4 fw-semibold">Para hacer crecer tu negocio</p>
                    </div>
                    <div className="row d-none d-lg-flex">
                        <div className="col-12 col-lg-4 pt-5">
                            <div className="card bg-light shadow border-0">
                                <div className="card-body text-center p-5">
                                    <ImageSEO defaultSrc={home_document} placeholderSrc={home_document} sources={[]}
                                              alt={"Facturación"} width={"auto"} height={"60"}/>
                                    <p className="h4 fw-semibold mt-2">Facturación</p>
                                    <p className={"fs-7 m-0"}>Emite todos tus DTE desde facturas a hasta boletas
                                        electrónicas, guías de despacho y mucho más.<br/>{'\u00A0'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 pt-5">
                            <div className="card bg-light shadow border-0">
                                <div className="card-body text-center p-5">
                                    <ImageSEO defaultSrc={home_document_money} placeholderSrc={home_document_money}
                                              sources={[]} alt={"Cotizaciones"} width={"auto"} height={"60"}/>
                                    <p className="h4 fw-semibold mt-2">Cotizaciones</p>
                                    <p className={"fs-7 m-0"}>Genera y envía tus cotizaciones a tus clientes ,valores y
                                        condiciones personalizadas. Agrega productos de manera rápida y fácil.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 pt-5">
                            <div className="card bg-light shadow border-0">
                                <div className="card-body text-center p-5">
                                    <ImageSEO defaultSrc={cash_machine} placeholderSrc={cash_machine} sources={[]}
                                              alt={"Caja y Cobranza"} width={"auto"} height={"60"}/>
                                    <p className="h4 fw-semibold mt-2">Caja y Cobranza</p>
                                    <p className={"fs-7 m-0"}>Maneja tu caja, apertura, permisos de usuarios y mucho más
                                        ¿Te deben? Activa cobranza automatizada con recordatorio a tus clientes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 pt-5">
                            <div className="card bg-light shadow border-0">
                                <div className="card-body text-center p-5">
                                    <ImageSEO defaultSrc={boxes} placeholderSrc={boxes} sources={[]}
                                              alt={"Inventario y Bodega"} width={"auto"} height={"60"}/>
                                    <p className="h4 fw-semibold mt-2">Inventario y Bodega<br/>{'\u00A0'}</p>
                                    <p className={"fs-7 m-0"}>Controla tu stock, identifica ingresos y egresos de
                                        productos, define costos, precios de venta y bodegas o ubicaciones. Todos
                                        integrados en un solo sistema.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 pt-5">
                            <div className="card bg-light shadow border-0">
                                <div className="card-body text-center p-5">
                                    <ImageSEO defaultSrc={people_arrow} placeholderSrc={people_arrow} sources={[]}
                                              alt={"Clientes y Proveedores"} width={"auto"} height={"60"}/>
                                    <p className="h4 fw-semibold mt-2">Clientes y Proveedores</p>
                                    <p className={"fs-7 m-0"}>Organiza tus clientes y proveedores en un solo lugar:
                                        datos de contacto, detalles de facturación, facturación, información de cuenta
                                        corriente y documentos impagos.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 pt-5">
                            <div className="card bg-light shadow border-0">
                                <div className="card-body text-center p-5">
                                    <ImageSEO defaultSrc={chain_money} placeholderSrc={chain_money} sources={[]}
                                              alt={"Pago en Línea"} width={"auto"} height={"60"}/>
                                    <p className="h4 fw-semibold mt-2">Pago en Línea<br/>{'\u00A0'}</p>
                                    <p className={"fs-7 m-0"}>Cobra con tu link o QR, compártelo dónde quieras y ofrece
                                        medios de pago como tarjeta de crédito, debito o transferencia. Integrado en
                                        facturas y cotizaciones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-lg-none">
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-item active">
                                <div className="col-12 col-lg-4 pt-5">
                                    <div className="card bg-light shadow border-0">
                                        <div className="card-body text-center p-5">
                                            <ImageSEO defaultSrc={home_document} placeholderSrc={home_document}
                                                      sources={[]}
                                                      alt={"Facturación"} width={"auto"} height={"60"}/>
                                            <p className="h4 fw-semibold mt-2">Facturación</p>
                                            <p className={"fs-7 m-0"}>Emite todos tus DTE desde facturas a hasta boletas
                                                electrónicas, guías de despacho y mucho más.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-12 col-lg-4 pt-5">
                                    <div className="card bg-light shadow border-0">
                                        <div className="card-body text-center p-5">
                                            <ImageSEO defaultSrc={home_document_money}
                                                      placeholderSrc={home_document_money}
                                                      sources={[]} alt={"Cotizaciones"} width={"auto"} height={"60"}/>
                                            <p className="h4 fw-semibold mt-2">Cotizaciones</p>
                                            <p className={"fs-7 m-0"}>Genera y envía tus cotizaciones a tus clientes
                                                ,valores y
                                                condiciones personalizadas. Agrega productos de manera rápida y
                                                fácil.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-12 col-lg-4 pt-5">
                                    <div className="card bg-light shadow border-0">
                                        <div className="card-body text-center p-5">
                                            <ImageSEO defaultSrc={cash_machine} placeholderSrc={cash_machine}
                                                      sources={[]}
                                                      alt={"Caja y Cobranza"} width={"auto"} height={"60"}/>
                                            <p className="h4 fw-semibold mt-2">Caja y Cobranza</p>
                                            <p className={"fs-7 m-0"}>Maneja tu caja, apertura, permisos de usuarios y
                                                mucho más
                                                ¿Te deben? Activa cobranza automatizada con recordatorio a tus
                                                clientes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-12 col-lg-4 pt-5">
                                    <div className="card bg-light shadow border-0">
                                        <div className="card-body text-center p-5">
                                            <ImageSEO defaultSrc={boxes} placeholderSrc={boxes} sources={[]}
                                                      alt={"Inventario y Bodega"} width={"auto"} height={"60"}/>
                                            <p className="h4 fw-semibold mt-2">Inventario y Bodega</p>
                                            <p className={"fs-7 m-0"}>Controla tu stock, identifica ingresos y egresos
                                                de productos, define costos, precios de venta y bodegas o ubicaciones.
                                                Todos integrados en un solo sistema.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-12 col-lg-4 pt-5">
                                    <div className="card bg-light shadow border-0">
                                        <div className="card-body text-center p-5">
                                            <ImageSEO defaultSrc={people_arrow} placeholderSrc={people_arrow}
                                                      sources={[]}
                                                      alt={"Clientes y Proveedores"} width={"auto"} height={"60"}/>
                                            <p className="h4 fw-semibold mt-2">Clientes y Proveedores</p>
                                            <p className={"fs-7 m-0"}>Organiza tus clientes y proveedores en un solo
                                                lugar: datos de contacto, detalles de facturación, facturación,
                                                información de cuenta corriente y documentos impagos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-12 col-lg-4 pt-5">
                                    <div className="card bg-light shadow border-0">
                                        <div className="card-body text-center p-5">
                                            <ImageSEO defaultSrc={chain_money} placeholderSrc={chain_money} sources={[]}
                                                      alt={"Pago en Línea"} width={"auto"} height={"60"}/>
                                            <p className="h4 fw-semibold mt-2">Pago en Línea</p>
                                            <p className={"fs-7 m-0"}>Cobra con tu link o QR, compártelo dónde quieras y
                                                ofrece medios de pago como tarjeta de crédito, debito o transferencia.
                                                Integrado en facturas y cotizaciones.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 d-none d-lg-flex">
                        <div className="col-12 text-center">
                            <Link to={"./funcionalidades"} className={"btn btn-success"}>Ver funcionalidades</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"py-5"}>
                <div className="container">
                    <div className="text-center">
                        <h2 className={"fw-semibold"}>Nuestros <span className="text-success">Partners</span></h2>
                        <div className="d-flex justify-content-center">
                            <div className="border-1 border-top pt-2" style={{width: "280px"}}></div>
                        </div>
                        <p className="h4 fw-semibold">Ellos confían y difunden <br/> nuestros servicios</p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4 mt-3 mt-lg-5">
                            <Link className="bg-body-secondary border-0 card h-100" to={"https://www.chilemass.org/"}
                                  target={"_blank"}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <ImageSEO defaultSrc={chile_mass} placeholderSrc={chile_mass} alt={"ChileMass"}
                                              width={"auto"} height={"67"} sources={[]}/>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 mt-3 mt-lg-5">
                            <Link className="bg-body-secondary border-0 card h-100" to={"https://cloud.google.com/"}
                                  target={"_blank"}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <ImageSEO defaultSrc={google_cloud} placeholderSrc={google_cloud}
                                              alt={"google_cloud"} width={"auto"} height={"39"} sources={[]}/>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 mt-3 mt-lg-5">
                            <Link className="bg-body-secondary border-0 card h-100"
                                  to={"https://pymesenlinea.cl/alianza/full-digitalizacion-para-tu-negocio-automatiza-todo-tu-proceso-de-venta-y-facturacion-con-30-de-descuento-exclusivo"}
                                  target={"_blank"}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <ImageSEO defaultSrc={pymes_en_linea} placeholderSrc={pymes_en_linea}
                                              alt={"pymes_en_linea"} width={"auto"} height={"67"} sources={[]}/>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 mt-3 mt-lg-5">
                            <Link className="bg-body-secondary border-0 card h-100" to={"https://www.etpay.com/"}
                                  target={"_blank"}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <ImageSEO defaultSrc={et_pay} placeholderSrc={et_pay} alt={"et_pay"} width={"auto"}
                                              height={"46"} sources={[]}/>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 mt-3 mt-lg-5">
                            <Link className="bg-body-secondary border-0 card h-100" to={"https://ohco.work/perks"}
                                  target={"_blank"}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <ImageSEO defaultSrc={oh_co_work} placeholderSrc={oh_co_work} alt={"oh_co_work"}
                                              width={"auto"} height={"52"} sources={[]}/>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 mt-3 mt-lg-5">
                            <Link className="bg-body-secondary border-0 card h-100" to={"https://incubatec.cl/"}
                                  target={"_blank"}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <ImageSEO defaultSrc={incuba_tec} placeholderSrc={incuba_tec} alt={"incuba_tec"}
                                              width={"auto"} height={"64"} sources={[]}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <hr className={"my-5"}/>
                    <div className="row">
                        <div className="col-12 col-sm-6 mb-3 mb-lg-0">
                            <Link className="bg-body-secondary border-0 card h-100" to={"./facto-en-la-prensa"}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <ImageSEO defaultSrc={logo_mer} placeholderSrc={logo_mer} alt={"logo_mer"}
                                              width={"auto"} height={"16"} sources={[]}/>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6">
                            <Link className="bg-body-secondary border-0 card h-100"
                                  to={"https://www.df.cl/df-lab/innovacion-y-startups/como-una-startup-chilena-asesoro-a-la-reserva-federal-para-crear-sistema#:~:text=Facto%2C%20una%20startup%20chilena%20fundada,estandarizar%20el%20sistema%20de%20ese"}
                                  target={"_blank"}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <ImageSEO defaultSrc={diario_fin} placeholderSrc={diario_fin} alt={"diario_fin"}
                                              width={"auto"} height={"16"} sources={[]}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center my-5">
                        <h2 className="fw-semibold">Ellos nos validan y apoyan</h2>
                    </div>
                    <div className="row">
                        <div className="align-items-center col-12 col-lg-4 d-flex justify-content-center mb-3 mb-lg-0">
                            <Link to={"https://www.sii.cl/servicios_online/1039-emp_prov_fe-1184.html"} target={"_blank"}>
                                <ImageSEO defaultSrc={logo_sii} placeholderSrc={logo_sii} alt={"logo_sii"}
                                          width={"150"} height={"auto"} sources={[]}/>
                            </Link>
                        </div>
                        <div className="align-items-center col-12 col-lg-4 d-flex justify-content-center mb-3 mb-lg-0">
                            <Link to={"https://corfo.cl/sites/cpp/homecorfo"} target={"_blank"}>
                                <ImageSEO defaultSrc={logo_corfo} placeholderSrc={logo_corfo} alt={"logo_corfo"}
                                          width={"150"} height={"auto"} sources={[]}/>
                            </Link>
                        </div>
                        <div className="align-items-center col-12 col-lg-4 d-flex justify-content-center mb-3 mb-lg-0">
                            <Link to={"https://www.previred.com/web/previred/softwares-gratuito"} target={"_blank"}>
                                <ImageSEO defaultSrc={logo_previred} placeholderSrc={logo_previred}
                                          alt={"logo_previred"}
                                          width={"200"} height={"auto"} sources={[]}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
