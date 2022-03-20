import React from "react";

import { BaseComponent } from "../../base/js";

import { propTypes } from "./propTypes"

import '../styles/index.scss';

export const Title = ({ title, flexDisplay, underlined, tag, className }) => {
    const underline = underlined ? ' underlined' : '';
    const CustomTitle = tag ? `h${ tag }` : 'h1';

    return (
        <BaseComponent flexDisplay={ flexDisplay } className={ className }>
            <CustomTitle className={ `cmp-title${ underline }` }>
                { title }
            </CustomTitle>
            { underlined && <div className='underline'></div> }
        </BaseComponent>
    )
};

Title.propTypes = propTypes;