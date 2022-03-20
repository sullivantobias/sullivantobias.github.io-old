import React from "react";

import { BaseComponent } from "../../base/js";
import { Text } from "../../text/js";
import { Image } from "../../image/js";

import { propTypes } from "./propTypes";

import '../styles/index.scss';

export const Card = ({ flexDisplay, card }) =>
    <BaseComponent flexDisplay={flexDisplay}>
        <div className="cmp-card">
            <a target='_blank' href={card.link} rel='noopener noreferrer'>
                <div className="card">
                    <div className="card_image">
                        <Image props={{ alt: 'weather', src: card.src }} />
                        <Text className={'title'} text={card.title} />
                    </div>
                </div>
            </a>
        </div>
    </BaseComponent>

Card.propTypes = propTypes;
