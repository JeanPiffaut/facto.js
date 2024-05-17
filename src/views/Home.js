import React from "react";
import MetaTags from "../components/MetaTags";
import ImageSEO from "../components/ImageSEO";
import banner_bg from "../assets/banner-pago-en-linea/background-des.webp";
import banner_bg_sm from "../assets/banner-pago-en-linea/background-res.webp";
import banner_img from "../assets/banner-pago-en-linea/txt-des.webp";
import banner_img_sm from "../assets/banner-pago-en-linea/txt-res.webp";
import banner_pc_doc from "../assets/home/pc-doc.webp";
import banner_bag from "../assets/home/bag.webp";
import banner_pc_phone from "../assets/home/pc-phone.webp";

function Home() {
    return (
        <>
            <MetaTags title={"FACTO® - Sistema de ventas y administración gratuito"}
                      description={"Sistema de ventas y administración gratuito de Chile | FACTO emite facturas electrónicas gratis y sin limites"}
                      url={"/"}/>
            <section>
                <div className="banner-bg position-absolute z-n1 w-100">
                    <ImageSEO alt={"banner-bg"} style={{height: '800px', width: '100%'}}
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
                               href="https://www.facto.cl/registrarse">
                                Regístrate en FACTO
                            </a>
                            <div className="card border-0">
                                <div className="card-body">
                                    <form name="formDemo-home" id="formDemo-home"
                                          action="https://conexion.facto.cl/envio_demo.php" method="post"
                                          onSubmit="return validateDemo()" data-hs-cf-bound="true">
                                        <h3 className="fw-semibold text-center text-light">Prueba nuestra <br/>DEMO en línea
                                        </h3>
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
                                   href="https://www.facto.cl/registrarse">
                                    Regístrate en FACTO
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"mb-5"}>
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
                                    <h3 className={"fw-semibold mt-2"}>Aumenta <br/>tus ingresos</h3>
                                </div>
                                <div className="col-12 col-lg-4 text-center">
                                    <ImageSEO defaultSrc={banner_bag} placeholderSrc={banner_bag} sources={[]}
                                              alt={"Ahorra tiempo"} height={"60"} width={"76"}/>
                                    <h3 className={"fw-semibold mt-2"}>Ahorra <br/>tiempo</h3>
                                </div>
                                <div className="col-12 col-lg-4 text-center">
                                    <ImageSEO defaultSrc={banner_pc_phone} placeholderSrc={banner_pc_phone} sources={[]}
                                              alt={"Úsalo en cualquier dispositivo"} height={"60"} width={"76"}/>
                                    <h3 className={"fw-semibold mt-2"}>Úsalo en <br/>cualquier dispositivo</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-center h1 fw-semibold mt-5">
                        FACTO automatiza tu negocio <br/>y aumenta tus <b className={"text-success"}>ingresos mensuales</b>
                    </h2>
                </div>
            </section>
        </>
    );
}

export default Home;
