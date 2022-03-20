import React from "react";

import { BaseComponent } from "../../base/js";

import { propTypes } from "./propTypes";

import '../styles/index.scss';

export const Button = ({ text, flexDisplay, link }) => {
    const bHref = <a href={ link }>
        <div className="cmp-button">
            <span>{ text }</span>
        </div>
    </a>;

    const bSimple = <div className="cmp-button">
        <span>{ text }</span>
    </div>;

    return (
        <BaseComponent flexDisplay={ flexDisplay }>
            { link ? bHref : bSimple }
        </BaseComponent>
    )
};

Button.propTypes = propTypes;