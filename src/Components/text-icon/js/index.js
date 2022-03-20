import React from "react";

import { BaseComponent } from "../../base/js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { propTypes } from "./propTypes";

import '../styles/index.scss';

export const TextIcon = ({ text, icon, flexDisplay, className }) =>
    <BaseComponent flexDisplay={ flexDisplay } className={ className }>
        <div className={ 'cmp-text-icon' }>
            { icon && <FontAwesomeIcon icon={ icon } className={ 'icon' }/> }
            { text && <p className="cmp-text">
                { text }
            </p> }
        </div>
    </BaseComponent>

TextIcon.propTypes = propTypes;
