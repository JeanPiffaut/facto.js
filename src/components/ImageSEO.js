import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente ImageSEO
 * @param {object} sources - Objeto que contiene arrays de {srcSet, type} para diferentes formatos de imagen.
 * @param {string} src - La URL de la imagen por defecto (fallback).
 * @param {string} alt - Texto alternativo para la imagen.
 * @param {string} title - Título de la imagen (opcional).
 * @param {string} className - Clases CSS adicionales (opcional).
 * @param {object} style - Estilos en línea adicionales (opcional).
 * @param {string} loading - Define si la imagen debe cargar de forma "lazy" o "eager" (opcional).
 */
const ImageSEO = ({ sources, src, alt, title, className, style, loading = 'lazy' }) => {
    return (
        <picture>
            {sources.map(({ srcSet, type }) => (
                <source key={type} srcSet={srcSet} type={type} />
            ))}
            <img
                src={src}
                alt={alt}
                title={title || alt}
                className={className}
                style={style}
                loading={loading}
                onError={(e) => {
                    e.target.src = 'path_to_default_image.jpg'; // Ruta a una imagen de reserva
                }}
            />
        </picture>
    );
};

ImageSEO.propTypes = {
    sources: PropTypes.arrayOf(
        PropTypes.shape({
            srcSet: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        })
    ).isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    loading: PropTypes.oneOf(['lazy', 'eager'])
};

export default ImageSEO;
