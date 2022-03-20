import React from "react";

import { BaseComponent } from "../../base/js";

import { propTypes } from "./propTypes";

import '../styles/index.scss';

export const Separator = ({ flexDisplay, className, width }) =>
    <BaseComponent flexDisplay={ flexDisplay } className={ className }>
        <hr width={ width + '%' } className={ 'cmp-separator' }/>
    </BaseComponent>

Separator.propTypes = propTypes;
