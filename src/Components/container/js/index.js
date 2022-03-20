import React, { useEffect, useState } from "react";

import { BaseComponent } from "../../base/js";

import { propTypes } from "./propTypes";

import '../styles/index.scss';

export const Container = ({ children, flexDisplay, className, withTransition, isVisible, typeTransition }) => {
    const [containerClass, setContainerClass] = useState(typeTransition);

    useEffect(() => {
        isVisible && setContainerClass('');
    }, [isVisible]);

    const display = withTransition ? `cmp-container__withTransition` : 'cmp-container';

    return (
        <BaseComponent flexDisplay={ `${ flexDisplay ?  flexDisplay + ' ' : '' }${ className ? className : '' }` }>
            <div className={ `${ display }${ containerClass ? ' ' + containerClass : '' } flex-just-center-xs` }>
                { children }
            </div>
        </BaseComponent>
    )
};

Container.propTypes = propTypes;
