import React from 'react';
import PropTypes from 'prop-types';

const ImageSEO = ({ alt, defaultSrc, sources, width, height, placeholderSrc }) => {
    return (
        <picture>
            {sources.map((source, index) => (
                <source key={index} srcSet={source.srcSet} type={source.type} media={source.media} />
            ))}
            <img
                src={placeholderSrc}
                data-src={defaultSrc}
                alt={alt}
                loading="lazy"
                width={width}
                height={height}
                className="lazyload"
            />
        </picture>
    );
};

ImageSEO.propTypes = {
    alt: PropTypes.string.isRequired,
    defaultSrc: PropTypes.string.isRequired,
    sources: PropTypes.arrayOf(
        PropTypes.shape({
            srcSet: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            media: PropTypes.string.isRequired,
        })
    ).isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    placeholderSrc: PropTypes.string.isRequired,
};

export default ImageSEO;
