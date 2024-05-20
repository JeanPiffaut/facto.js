import React, {memo} from "react";
import ImageSEO from "../../components/ImageSEO";

export const CarouselItem = memo(({src, alt, text, description, isFirst = false}) => (
    <div className={"carousel-item " + (isFirst ? "active" : "")}>
        <div className="col-12 col-lg-4 d-flex">
            <div className="card bg-light border-0">
                <div className="card-body text-center p-5">
                    <ImageSEO defaultSrc={src} placeholderSrc={src} sources={[]} alt={alt} width={"auto"} height={"60"}/>
                    <p className="h4 fw-semibold mt-2">{text}</p>
                    <p className={"fs-7 m-0"}>{description}</p>
                </div>
            </div>
        </div>
    </div>
));