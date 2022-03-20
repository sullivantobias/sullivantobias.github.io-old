import React from "react";

import { propTypes } from './propTypes';

import '../styles/index.scss';

export const BaseComponent = ({ flexDisplay, children, className }) => {
    const classes = `component${ flexDisplay ? ` ${ flexDisplay }` : '' }${ className ? ' ' + className : '' }`;

    return (
        <div className={ classes }>
            { children }
        </div>
    )
};

BaseComponent.propTypes = propTypes;
