import React from "react";
import Texts from '../texts';

import { BaseComponent } from "../../base/js";

import { propTypes } from "./propTypes";

import '../styles/index.scss';

export const Text = ({ textKey, text, link, flexDisplay, className }) => {
    const txt = textKey ? Texts[textKey] : text;

    return (
        <BaseComponent flexDisplay={ flexDisplay }>
            { link ?
                <a href={ link } target={'_blank'} rel='noopener noreferrer'>
                    <p className={ `cmp-text${ className ? ' ' + className : '' }` }>
                        { txt }
                    </p>
                </a>
                :
                <p className={ `cmp-text${ className ? ' ' + className : '' }` }>
                    { txt }
                </p>
            }

        </BaseComponent>
    )
};

Text.propTypes = propTypes;
