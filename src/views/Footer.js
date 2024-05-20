import React from "react";
import ImageSEO from "../components/ImageSEO";
import logo from "../assets/footer/facto-footer-logo.svg";
import sell_automation from "../assets/footer/facto-footer-automatiza-tus-ventas.webp";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="col-12 footer-body text-light">
                <div className="container">
                    <div className="row pt-5 pb-3 fs-7">
                        <div className="col-md-4 order-2 order-md-1 order-lg-1 mb-4 mb-md-0 mb-lg-0">
                            <p className="txt-contents text-light mb-4">
                                <b>Funcionalidades</b>
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a className="text-decoration-none txt-contents text-light"
                                       href="./facturacion">Facturación</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-decoration-none txt-contents text-light"
                                       href="./pago-en-linea">Pago en línea</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-decoration-none txt-contents text-light"
                                       href="./producto/certificado-digital">
                                        Certificado digital
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-decoration-none txt-contents text-light"
                                       href="./contabilidad">Contabilidad</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-decoration-none txt-contents text-light"
                                       href="./funcionalidades">Todas las funcionalidades</a>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="col-md-4 order-3 order-md-2 order-lg-2 d-flex justify-content-lg-center mb-4 mb-md-0 mb-lg-0">
                            <div className="d-inline-block">
                                <p className="txt-contents text-light mb-4">
                                    <b>Clientes</b>
                                </p>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a className="text-decoration-none txt-contents text-light"
                                           href="./ingresar">Ingresar a mi cuenta</a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="text-decoration-none txt-contents text-light"
                                           href="./precios">Precios</a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="text-decoration-none txt-contents text-light"
                                           href="./ayuda">Centro de ayuda</a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="text-decoration-none txt-contents text-light"
                                           href="./seguridad">Seguridad</a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="text-decoration-none txt-contents text-light"
                                           href="./conoce-facto">Nuestro modelo gratuito</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-md-4 order-4 order-md-3 order-lg-3 mb-5 d-flex justify-content-lg-end mb-4 mb-md-0 mb-lg-0">
                            <div className="d-inline-block">
                                <p className="txt-contents text-light mb-4">
                                    <b>Información Corporativa</b>
                                </p>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a className="text-decoration-none text-light"
                                           href="tel:+56442020550">
                                            <div className="col-auto col-md-12 col-lg-12 d-inline-flex row m-0 p-0">
                                                <div className="col-1 col-md-2 col-lg-1 p-0">
                                                    <i className="fa-solid fa-phone"></i>
                                                </div>
                                                <div className="col-auto col-md-10 col-lg-11">
                                                    +56442020550
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="text-decoration-none text-light"
                                           href="mailto: ventas@facto.cl">
                                            <div className="col-auto col-md-12 col-lg-12 d-inline-flex row m-0 p-0">
                                                <div className="col-1 col-md-2 col-lg-1 p-0">
                                                    <i className="fa-solid fa-envelope"></i>
                                                </div>
                                                <div className="col-auto col-md-10 col-lg-11">
                                                    ventas@facto.cl
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="text-decoration-none text-light"
                                           href="./blog">
                                            <div className="col-auto col-md-12 col-lg-12 d-inline-flex row m-0 p-0">
                                                <div className="col-1 col-md-2 col-lg-1 p-0">
                                                    <i className="fa-solid fa-book"></i>
                                                </div>
                                                <div className="col-auto col-md-10 col-lg-11">
                                                    Blog
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="text-decoration-none text-light"
                                           href="./ayuda">
                                            <div className="col-auto col-md-12 col-lg-12 d-inline-flex row m-0 p-0">
                                                <div className="col-1 col-md-2 col-lg-1 p-0">
                                                    <i className="fa-solid fas fa-headset"></i>
                                                </div>
                                                <div className="col-auto col-md-10 col-lg-11">
                                                    Contacto
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="text-decoration-none text-light"
                                           href="https://portal.chiletrabajos.cl/empresa/facto">
                                            <div className="col-auto col-md-12 col-lg-12 d-inline-flex row m-0 p-0">
                                                <div className="col-1 col-md-2 col-lg-1 p-0">
                                                    <i className="fa-solid fa-network-wired"></i>
                                                </div>
                                                <div className="col-auto col-md-10 col-lg-11">
                                                    Trabaja con nosotros
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 order-1 order-md-4 order-lg-4 mb-4 mb-md-0 mb-lg-0 mt-0 mt-md-5 mt-lg-5 text-center text-lg-start">
                            <ImageSEO placeholderSrc={logo} defaultSrc={logo} alt={"Logo footer"} width={"191"} height={"45"} sources={[]}/>
                        </div>
                        <div
                            className="col-md-4 offset-md-4 order-5 order-md-5 order-lg-5 text-center text-md-end text-lg-end p-0 mb-4 mb-md-0 mb-lg-0 mt-0 mt-md-5 mt-lg-5">
                            <ImageSEO placeholderSrc={sell_automation} defaultSrc={sell_automation} alt={"Automatiza tus venta"} width={"191"} height={"77"} sources={[]}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 footer-bottom text-light">
                <div className="container py-3 fs-8">
                    <div className="row row-cols-4 d-flex justify-content-between">
                        <div className="col-12 col-md-3 col-lg-auto m-0 p-0 order-2 list-group justify-content-center">
                            <div
                                className="text-center text-md-start text-lg-start text-color-white list-unstyled mb-3 mb-md-0 mb-lg-0">
                                <a className="text-decoration-none text-light"
                                   href="https://www.facto.cl/condiciones-de-uso/">
                                    <i className="fa-sharp fa-solid fa-circle-small m-1"></i>
                                    Términos y condiciones de uso
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-auto m-0 p-0 order-3 list-group justify-content-center">
                            <div className="text-center text-color-white list-unstyled mb-3 mb-md-0 mb-lg-0">
                                <a className="text-decoration-none text-light"
                                   href="https://www.facto.cl/seguridad/">
                                    <i className="fa-sharp fa-solid fa-circle-small m-1"></i>
                                    Políticas de privacidad
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-auto m-0 p-0 order-4 list-group justify-content-center">
                            <div className="text-center text-light list-unstyled mb-3 mb-md-0 mb-lg-0">
                                <span className="text-decoration-none">
                                    <i className="fa-sharp fa-solid fa-circle-small m-1"></i>
                                    © FACTO Spa, 2024. Todos los derechos reservados
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-auto m-0 p-0 order-1 order-md-4 order-lg-4">
                            <div className="row justify-content-center align-items-center h-100 m-0 p-0">
                                <div
                                    className="col-3 p-0 facto-footer-icon-social text-center text-md-end text-lg-end mb-3 mb-md-0 mb-lg-0">
                                    <Link to="https://www.instagram.com/facto_oficial"
                                       aria-label="Instagram" target="_blank">
                                        <i className="fab fa-instagram text-light fs-3 px-0 px-lg-3"></i>
                                    </Link>
                                </div>
                                <div
                                    className="col-3 p-0 facto-footer-icon-social text-center text-md-end text-lg-end mb-3 mb-md-0 mb-lg-0">
                                    <Link to="https://www.facebook.com/facto.cl/"
                                       aria-label="Facebook" target="_blank">
                                        <i className="fab fa-facebook-square text-light fs-3 px-0 px-lg-3"></i>
                                    </Link>
                                </div>
                                <div
                                    className="col-3 p-0 facto-footer-icon-social text-center text-md-end text-lg-end mb-3 mb-md-0 mb-lg-0">
                                    <Link to="https://www.linkedin.com/company/factocl" aria-label="Linkedin"
                                       target="_blank">
                                        <i className="fab fa-linkedin text-light fs-3 px-0 px-lg-3"></i>
                                    </Link>
                                </div>
                                <div
                                    className="col-3 p-0 facto-footer-icon-social text-center text-md-end text-lg-end mb-3 mb-md-0 mb-lg-0">
                                    <Link to="https://www.youtube.com/channel/UCMFPmqT3EVEWn3nqVKuVeFA"
                                       aria-label="Youtube" target="_blank">
                                        <i className="fa-brands fa-square-youtube text-light fs-3 px-0 px-lg-3"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
