import React, { useEffect, useState } from "react";

import { TextIcon } from "../../text-icon/js";

import { propTypes } from './propTypes';

import '../styles/index.scss';

export const BackToTop = ({ posY, icon }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scrollHeight = document.body.scrollHeight;

        window.addEventListener('scroll', () => {
            const ws = window.scrollY;

            if (ws > scrollHeight / 2) setVisible(true);
            else setVisible(false);
        });
    });

    const scroll = () => window.scroll(0, posY);

    return (
        <button title='Back to top'
                id='backToTop' className={ `cmp-backToTop${ visible ? ' visible' : '' }` }
                onClick={ e => {
                    e.preventDefault();
                    scroll();
                } }>
            <TextIcon icon={ icon }/>
        </button>
    )
};

BackToTop.propTypes = propTypes;
