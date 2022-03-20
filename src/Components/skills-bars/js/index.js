import React, { useEffect, useState } from "react";

import { BaseComponent } from "../../base/js";
import { TextIcon } from "../../text-icon/js";

import { propTypes } from "./propTypes";

import '../styles/index.scss';

export const SkillBars = ({ flexDisplay, skills, isVisible }) => {
    const [barClass, setBarClass] = useState('hidden');

    useEffect(() => {
        isVisible && setBarClass('');
    }, [isVisible]);

    return (
        <BaseComponent flexDisplay={ flexDisplay }>
            <div className={ `cmp-skillBars ${ barClass }` }>
                { skills.map((skill, index) =>
                    <div
                        className={ 'cmp-skillBars__wrapper' }
                        key={ index }
                    >
                        <div className={ 'cmp-skillBars__wrapper--type' }>
                            <TextIcon className={ skill.class } icon={ skill.type } text={ skill.text && skill.text }/>
                        </div>
                        <div className={ `cmp-skillBars__wrapper--bar ${ barClass }` }
                             style={ { width: `${ skill.level }%` } }>
                            <span className={ 'cmp-skillBars__wrapper--bar--percentage' }>{ skill.level }%</span>
                        </div>
                    </div>
                ) }
            </div>
        </BaseComponent>
    )
};

SkillBars.propTypes = propTypes;
