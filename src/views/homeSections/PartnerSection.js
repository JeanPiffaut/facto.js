import React, {memo} from "react";
import {PartnerLink} from "./PartnerLink";
import chile_mass from "../../assets/home/Logo-ChileMass.webp";
import google_cloud from "../../assets/home/logo-google-cloud.webp";
import pymes_en_linea from "../../assets/home/logo_pymes_en_linea_a_extend_gob.png";
import et_pay from "../../assets/home/etpay.webp";
import oh_co_work from "../../assets/home/ohco-work.webp";
import incuba_tec from "../../assets/home/logo-incubatec-color.webp";
import {Link} from "react-router-dom";
import ImageSEO from "../../components/ImageSEO";
import logo_mer from "../../assets/home/logo_mer.webp";
import diario_fin from "../../assets/home/diario-financiero.webp";
import logo_sii from "../../assets/home/sii.webp";
import logo_corfo from "../../assets/home/logo-corfo.webp";
import logo_previred from "../../assets/home/previred.webp";

export const PartnerSection = memo(() => (
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
                <PartnerLink src={chile_mass} alt={"ChileMass"} to={"https://www.chilemass.org/"} height={"67"}/>
                <PartnerLink src={google_cloud} alt={"Google Cloud"} to={"https://cloud.google.com/"} height={"39"}/>
                <PartnerLink src={pymes_en_linea} alt={"Pymes en Línea"}
                             to={"https://pymesenlinea.cl/alianza/full-digitalizacion-para-tu-negocio-automatiza-todo-tu-proceso-de-venta-y-facturacion-con-30-de-descuento-exclusivo"}
                             height={"67"}/>
                <PartnerLink src={et_pay} alt={"ET Pay"} to={"https://www.etpay.com/"} height={"46"}/>
                <PartnerLink src={oh_co_work} alt={"Oh Co Work"} to={"https://ohco.work/perks"} height={"52"}/>
                <PartnerLink src={incuba_tec} alt={"IncubaTec"} to={"https://incubatec.cl/"} height={"64"}/>
            </div>
            <hr className={"my-5"}/>
            <div className="row">
                <div className="col-12 col-sm-6 mb-3 mb-lg-0">
                    <Link className="bg-body-secondary border-0 card h-100" to={"./facto-en-la-prensa"}>
                        <div className="card-body d-flex justify-content-center align-items-center">
                            <ImageSEO defaultSrc={logo_mer} placeholderSrc={logo_mer} alt={"logo_mer"} width={"auto"}
                                      height={"16"} sources={[]}/>
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
                <PartnerLink src={logo_sii} alt={"SII"}
                             to={"https://www.sii.cl/servicios_online/1039-emp_prov_fe-1184.html"} width={"150"}/>
                <PartnerLink src={logo_corfo} alt={"Corfo"} to={"https://corfo.cl/sites/cpp/homecorfo"} width={"150"}/>
                <PartnerLink src={logo_previred} alt={"Previred"}
                             to={"https://www.previred.com/web/previred/softwares-gratuito"} width={"200"}/>
            </div>
        </div>
    </section>
));