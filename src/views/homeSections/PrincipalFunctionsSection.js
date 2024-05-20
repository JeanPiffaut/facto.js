import React, {memo} from "react";
import home_document from "../../assets/home/document.webp";
import home_document_money from "../../assets/home/document-money.webp";
import cash_machine from "../../assets/home/cash-machine.webp";
import boxes from "../../assets/home/boxes.webp";
import people_arrow from "../../assets/home/people-arrow.webp";
import chain_money from "../../assets/home/chain-money.webp";
import {CarouselItem} from "./CarouselItem";
import {Link} from "react-router-dom";
import {FeatureCard} from "./FeatureCard";

export const PrincipalFunctionsSection = memo(() => (
    <section className={"py-5 bg-light"}>
        <div className="container">
            <div className="text-center">
                <h2 className={"fw-semibold"}>Funcionalidades <span className="text-success">claves</span></h2>
                <div className="d-flex justify-content-center">
                    <div className="border-1 border-top pt-2" style={{ width: "280px" }}></div>
                </div>
                <p className="h4 fw-semibold">Para hacer crecer tu negocio</p>
            </div>
            <div className="row d-none d-lg-flex">
                <FeatureCard src={home_document} alt={"Facturación"} text={"Facturación"} description={"Emite todos tus DTE desde facturas hasta boletas electrónicas, guías de despacho y mucho más."} />
                <FeatureCard src={home_document_money} alt={"Cotizaciones"} text={"Cotizaciones"} description={"Genera y envía tus cotizaciones a tus clientes, valores y condiciones personalizadas. Agrega productos de manera rápida y fácil."} />
                <FeatureCard src={cash_machine} alt={"Caja y Cobranza"} text={"Caja y Cobranza"} description={"Maneja tu caja, apertura, permisos de usuarios y mucho más. ¿Te deben? Activa cobranza automatizada con recordatorio a tus clientes."} />
                <FeatureCard src={boxes} alt={"Inventario y Bodega"} text={"Inventario y Bodega"} description={"Controla tu stock, identifica ingresos y egresos de productos, define costos, precios de venta y bodegas o ubicaciones. Todos integrados en un solo sistema."} />
                <FeatureCard src={people_arrow} alt={"Clientes y Proveedores"} text={"Clientes y Proveedores"} description={"Organiza tus clientes y proveedores en un solo lugar: datos de contacto, detalles de facturación, información de cuenta corriente y documentos impagos."} />
                <FeatureCard src={chain_money} alt={"Pago en Línea"} text={"Pago en Línea"} description={"Cobra con tu link o QR, compártelo dónde quieras y ofrece medios de pago como tarjeta de crédito, débito o transferencia. Integrado en facturas y cotizaciones."} />
            </div>
            <div className="row d-lg-none pt-5">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <CarouselItem src={home_document} alt={"Facturación"} text={"Facturación"} description={"Emite todos tus DTE desde facturas hasta boletas electrónicas, guías de despacho y mucho más."} isFirst={true}/>
                        <CarouselItem src={home_document_money} alt={"Cotizaciones"} text={"Cotizaciones"} description={"Genera y envía tus cotizaciones a tus clientes, valores y condiciones personalizadas. Agrega productos de manera rápida y fácil."} />
                        <CarouselItem src={cash_machine} alt={"Caja y Cobranza"} text={"Caja y Cobranza"} description={"Maneja tu caja, apertura, permisos de usuarios y mucho más. ¿Te deben? Activa cobranza automatizada con recordatorio a tus clientes."} />
                        <CarouselItem src={boxes} alt={"Inventario y Bodega"} text={"Inventario y Bodega"} description={"Controla tu stock, identifica ingresos y egresos de productos, define costos, precios de venta y bodegas o ubicaciones. Todos integrados en un solo sistema."} />
                        <CarouselItem src={people_arrow} alt={"Clientes y Proveedores"} text={"Clientes y Proveedores"} description={"Organiza tus clientes y proveedores en un solo lugar: datos de contacto, detalles de facturación, información de cuenta corriente y documentos impagos."} />
                        <CarouselItem src={chain_money} alt={"Pago en Línea"} text={"Pago en Línea"} description={"Cobra con tu link o QR, compártelo dónde quieras y ofrece medios de pago como tarjeta de crédito, débito o transferencia. Integrado en facturas y cotizaciones."} />
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
));