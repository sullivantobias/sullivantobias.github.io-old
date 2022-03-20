import React from "react";

import { BaseComponent } from "../../base/js";

import { propTypes } from "./propTypes";

import '../styles/index.scss';

export const Image = ({ flexDisplay, props }) =>
    <BaseComponent flexDisplay={flexDisplay}>
        <div className="cmp-image">
            <img alt={props.alt} {...props} />
        </div>
    </BaseComponent>

Image.propTypes = propTypes;
