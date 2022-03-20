import React from "react";

import { BaseStructure } from "../../base/js";
import { Text } from "../../../Components/text/js";

import { propTypes } from "../../utils/globalProptypes";

import '../styles/index.scss';

export const Footer = ({ marker, tag, flexDisplay }) =>
    <BaseStructure marker={ marker }
                   tag={ tag }
                   flexDisplay={ flexDisplay }
                   separator
                   fill={ "#fff" }
                   clouds
                   rotate
                   bcSvg={ '#000f08' }>
        <Text text={ 'CodeSandbox' } flexDisplay={ "flex-xs-6 flex-md-2" }
              link={ 'https://codesandbox.io/u/sullivantobias' }/>
        <Text text={ 'CodePen' } flexDisplay={ "flex-xs-6 flex-md-2" }
              link={ 'https://codepen.io/sullivantobias' }/>
        <Text flexDisplay={ "flex-xs-12 flex-md-8" }
              text={ `© ${ new Date().getFullYear() } SULLIVAN TOBIAS` }/>
    </BaseStructure>

Footer.propTypes = propTypes;
