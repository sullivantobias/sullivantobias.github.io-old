import React from "react";

import { Button } from "../../../Components/button/js";
import { Title } from "../../../Components/title/js";
import { BaseStructure } from "../../base/js";

import { propTypes } from "../../utils/globalProptypes";

import '../styles/index.scss';

export const Header = ({ marker, tag, flexDisplay }) => {
    return (
        <BaseStructure marker={marker} tag={tag} flexDisplay={flexDisplay}>
            <Title title={'Hello, I\'m Sullivan Tobias.'} flexDisplay={'flex-xs-12'} />
            <Button text={'Get to know me'} link={'#about'} />
        </BaseStructure>
    )
};

Header.propTypes = propTypes;
