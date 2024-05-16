import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/Logo-V-3-fondo-azul.png";
import ImageSEO from "../../components/ImageSEO";

function Header() {
    return (
        <header id="facto_header" className="navigation position-absolute w-100">
            <nav className="bg-dark bg-opacity-75 navbar navbar-dark navbar-expand-lg p-0">
                <div className="container">
                    <Link className="navbar-brand" to={"./#"}>
                        <ImageSEO alt={"logo"} src={logo} sources={[]} style={{width: "184px", height: "54px"}}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
                        <div className={"w-100"}>
                            <div className={"d-flex justify-content-center"}>
                                <ul className="align-items-center align-items-lg-start mb-2 mb-lg-0 me-lg-0 ms-lg-auto navbar-nav">
                                    <li className="nav-item ms-0 ms-lg-2">
                                        <Link className="nav-link active" to={"./#"}>
                                            <i className="fas fa-desktop-alt"></i> Probar la DEMO
                                        </Link>
                                    </li>
                                    <li className="nav-item ms-0 ms-lg-2">
                                        <Link className="nav-link active" to={"tel:+56442020550"}>
                                            <i className="fas fa-phone"></i> +56442020550
                                        </Link>
                                    </li>
                                    <li className="nav-item ms-0 ms-lg-2">
                                        <Link className="btn btn-success btn-sm my-1" to={"./registrarse"}>
                                            <i className="fas fa-sign-in-alt"></i> Registrarme
                                        </Link>
                                    </li>
                                    <li className="nav-item ms-0 ms-lg-2">
                                        <Link className="btn btn-secondary btn-sm my-1" to={"./ingresar"}>
                                            <i className="fas fa-user"></i> Iniciar sesión
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <hr className={"my-0 text-light"}/>
                            <div className={"d-flex justify-content-center"}>
                                <ul className="align-items-center align-items-lg-start justify-content-lg-between mb-2 mb-lg-0 navbar-nav w-100">
                                    <li className="nav-item dropdown">
                                        <button className="nav-link active dropdown-toggle w-100" id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            Funcionalidades
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12 col-lg-4 mb-3">
                                                        <h5>
                                                            <i className="fa-solid fa-cash-register"></i> Ventas
                                                        </h5>
                                                        <ul className={"list-unstyled"}>
                                                            <li><Link to={'./facturacion'}
                                                                      className={"dropdown-item"}>Facturación</Link>
                                                            </li>
                                                            <li><Link to={'./facturacion'}
                                                                      className={"dropdown-item"}>Punto de venta</Link>
                                                            </li>
                                                            <li><Link to={'./facturacion'}
                                                                      className={"dropdown-item"}>Caja y cobranza</Link>
                                                            </li>
                                                            <li><Link to={'./facturacion'}
                                                                      className={"dropdown-item"}>API/E-commerce</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 col-lg-4 mb-3">
                                                        <h5>
                                                            <i className="fa-solid fa-user-gear"></i> Administración
                                                        </h5>
                                                        <ul className={"list-unstyled"}>
                                                            <li><Link to={'./facturacion'}
                                                                      className={"dropdown-item"}>Inventario</Link>
                                                            </li>
                                                            <li><Link to={'./facturacion'}
                                                                      className={"dropdown-item"}>Remuneraciones</Link>
                                                            </li>
                                                            <li><Link to={'./facturacion'}
                                                                      className={"dropdown-item"}>Contabilidad</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 col-lg-4 mb-3">
                                                        <h5>
                                                            <i className="fa-solid fa-credit-card"></i> Pago con un Link
                                                        </h5>
                                                        <ul className={"list-unstyled"}>
                                                            <li><Link to={'./facturacion'}
                                                                      className={"dropdown-item"}>Pago en linea</Link>
                                                            </li>
                                                        </ul>
                                                        <h5 className={"mt-3"}>
                                                            <i className="fa-solid fa-dollar-sign"></i> Pago presencial
                                                        </h5>
                                                        <ul className={"list-unstyled"}>
                                                            <li><Link to={'./facturacion'}
                                                                      className={"dropdown-item"}>Pago con QR</Link>
                                                            </li>
                                                            <li><Link to={'./facturacion'}
                                                                      className={"dropdown-item"}>Redelcom</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={"./funcionalidades"} className={"dropdown-item text-end"}>Todas
                                                las funcionalidades</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to={"./precios"}>
                                            Precios
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to={"./producto/certificado-digital/"}>
                                            Certificado digital
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <button className="nav-link active dropdown-toggle w-100" id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            Conócenos
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link to={'./nosotros'}
                                                      className={"dropdown-item"}>Nosotros</Link>
                                            </li>
                                            <li><Link to={'./conoce-facto'}
                                                      className={"dropdown-item"}>Nuestro modelo gratuito</Link>
                                            </li>
                                            <li><Link to={'./seguridad'}
                                                      className={"dropdown-item"}>Seguridad</Link>
                                            </li>
                                            <li><Link to={'./blog'}
                                                      className={"dropdown-item"}>Blog</Link>
                                            </li>
                                            <li><Link to={'./facto-en-la-prensa'}
                                                      className={"dropdown-item"}>Facto en la prensa</Link>
                                            </li>
                                            <li><Link to={'./beneficios'}
                                                      className={"dropdown-item"}>Beneficios</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <button className="nav-link active dropdown-toggle w-100" id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            Ayuda
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navbarDropdown">
                                            <li><Link to={'./ayuda'}
                                                      className={"dropdown-item"}>Contacto</Link>
                                            </li>
                                            <li><Link to={'./capacitate'}
                                                      className={"dropdown-item"}>Capacitate gratis</Link>
                                            </li>
                                            <li><Link to={'./capacitaciones'}
                                                      className={"dropdown-item"}>Capacitaciones personalizadas</Link>
                                            </li>
                                            <li><Link to={'./condiciones-de-uso'}
                                                      className={"dropdown-item"}>Condiciones de uso</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
