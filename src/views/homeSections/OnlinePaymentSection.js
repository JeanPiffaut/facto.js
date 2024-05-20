import React, {memo} from "react";
import {Link} from "react-router-dom";
import ImageSEO from "../../components/ImageSEO";
import pago_en_linea from "../../assets/home/pago-en-linea.webp";

export const OnlinePaymentSection = memo(() => (
    <section className={"py-5 footer-body"}>
        <div className="container align-items-center d-flex">
            <div className="row">
                <div className="align-items-center col-12 col-lg-6 d-flex mb-5 mb-lg-0">
                    <div className="text-center text-lg-end">
                        <div className="d-flex justify-content-center justify-content-lg-end">
                            <div className="border border-white rounded-4 d-flex justify-content-center align-items-center mb-2 p-1">
                                <p className="m-0 text-white">¡Recomendado!</p>
                            </div>
                        </div>
                        <h2 className="text-light fw-semibold">Pago en línea</h2>
                        <div className="d-flex justify-content-lg-end justify-content-center">
                            <div className="border-1 border-top pt-2" style={{ width: "280px" }}></div>
                        </div>
                        <div className={""}>
                            <p className="h3 text-light fw-semibold">
                                La forma más fácil y rápida <br />
                                de aumentar tus ingresos
                            </p>
                            <p className="text-light">
                                Desde ahora tus cotizaciones y facturas vienen incluidas con un link de pago directo, el cual permitirá a
                                tus clientes realizar el pago de los documentos al instante.
                            </p>
                            <Link className="btn btn-success" to={"./pago-en-linea"}>
                                ¡Más información!
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <ImageSEO
                        defaultSrc={pago_en_linea}
                        placeholderSrc={pago_en_linea}
                        alt={"Pago en línea"}
                        height={"auto"}
                        width={"100%"}
                        sources={[
                            { srcSet: pago_en_linea, type: "image/webp", media: "(min-width: 320px)" },
                            { srcSet: pago_en_linea, type: "image/webp", media: "(min-width: 450px)" }
                        ]}
                    />
                </div>
            </div>
        </div>
    </section>
));