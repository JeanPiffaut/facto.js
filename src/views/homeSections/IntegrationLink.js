import React, {memo} from "react";
import {Link} from "react-router-dom";
import ImageSEO from "../../components/ImageSEO";

export const IntegrationLink = memo(({ src, alt, to, width }) => (
    <div className="col-6 col-lg-3 d-flex justify-content-center">
        <Link className="align-items-center container-cicle-int d-flex justify-content-center mb-5 mb-lg-0" to={to}>
            <ImageSEO defaultSrc={src} placeholderSrc={src} sources={[]} alt={alt} height={"auto"} width={width} loading="lazy" />
        </Link>
    </div>
));