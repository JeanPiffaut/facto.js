import React, {memo} from "react";
import {Link} from "react-router-dom";
import ImageSEO from "../../components/ImageSEO";

export const PartnerLink = memo(({src, alt, to, height, width}) => (
    <div className="col-12 col-sm-6 col-lg-4 mt-3 mt-lg-5">
        <Link className="bg-body-secondary border-0 card h-100" to={to} target={"_blank"}>
            <div className="card-body d-flex justify-content-center align-items-center">
                <ImageSEO defaultSrc={src} placeholderSrc={src} alt={alt} width={width || "auto"} height={height}
                          sources={[]} loading="lazy"/>
            </div>
        </Link>
    </div>
));