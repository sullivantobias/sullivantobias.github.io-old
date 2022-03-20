import React, { useEffect, useRef, useState } from "react";

import { BaseComponent } from "../../base/js";

import { propTypes } from "./propTypes";

import '../styles/index.scss';

export const Navigation = ({ navigationLinks, flexDisplay }) => {
    const [isFixed, setIsFixed] = useState('');
    const [currentSection, setCurrentSection] = useState(undefined);

    const navRef = useRef();

    useEffect(() => {
        const navTop = navRef.current.offsetTop;
        const root = document.querySelector('#root').classList;
        const structures = document.querySelectorAll('section[id]');

        window.addEventListener('scroll', () => {
            const wTop = window.pageYOffset;

            structures.forEach(section => {
                if (wTop + 50 > section.offsetTop) {
                    setCurrentSection(section)
                }
            });

            if (wTop > navTop) {
                root.add('fixedNavigation');
                setIsFixed(' fixed')
            } else {
                root.remove('fixedNavigation');
                setIsFixed('');
            }
        });
    }, []);

    const links = navigationLinks.map((link, index) =>
        <a className={ currentSection && currentSection.id === link.href ? 'active' : '' }
           key={ index } href={ `#${ link.href }` }>
            <li>{ link.title }</li>
        </a>);

    return (
        <BaseComponent flexDisplay={ `${ flexDisplay }${ isFixed }` }>
            <ul className={ 'cmp-navigation flex-row flex-just-around-xs' } ref={ navRef }>
                { links }
            </ul>
        </BaseComponent>
    )
};

Navigation.propTypes = propTypes;
