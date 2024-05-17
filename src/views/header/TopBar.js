import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 0) {
                setVisible(false);
                document.getElementById('facto_header').classList.add('move-up');
                document.getElementById('facto_header').classList.remove('move-down');
            } else {
                setVisible(true);
                document.getElementById('facto_header').classList.add('move-down');
                document.getElementById('facto_header').classList.remove('move-up');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="topbar" className={`container-fluid bg-black ${visible ? 'show' : 'hide'}`}>
            <p className="text-center mb-0 py-3 text-light fs-7">
                ⬇️ 💲 ¿Bajas ventas? Aumenta tus ingresos con Pago en Línea FACTO{' '}
                <Link
                    className="text-white text-decoration-underline"
                    style={{ cursor: 'pointer' }}
                    to="https://share.hsforms.com/1YiEWaQLNS-2-v0u9F-ybww490ua"
                >
                    ¡Solicítalo aquí!
                </Link>
            </p>
        </div>
    );
};

export default TopBar;
