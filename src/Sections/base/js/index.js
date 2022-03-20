import React from "react";

import { Title } from '../../../Components/title/js'
import { moutainsSvg, cloudSvg } from "./svgSections";
import { Stars } from "../../utils/Stars";

import { propTypes } from "./propTypes";

import '../styles/index.scss';

export const BaseStructure = ({ title, marker, flexDisplay, tag, children, separator = false, bc, bcSvg, fill, fill2 = "#000", clouds, rotate }) => {
    const classes = `structure structure${ marker ? `-${ marker }` : '' } container-fluid`;
    const sectionClasses = `structure${ marker ? `-${ marker }` : '' }__wrapper flex-row${ flexDisplay ? ' ' + flexDisplay : '' }`;
    const CustomTag = tag;

    return (
        <React.Fragment>
            { separator &&
            <section id={ marker } className='structure separator' style={ { backgroundColor: bc } }>
                { title && <Title title={ title } underlined className={ 'section-title flex-xs-12' }/> }
                { clouds ? cloudSvg(bcSvg, fill, rotate) : moutainsSvg(bcSvg, fill, fill2) }
                { clouds && <Stars/>}
            </section>
            }
            <CustomTag id={ !separator ? marker : undefined } className={ classes }>
                <section className={ sectionClasses }>
                    { children }
                </section>
            </CustomTag>
        </React.Fragment>

    )
};

BaseStructure.propTypes = propTypes;