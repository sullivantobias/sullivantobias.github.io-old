import React from "react";

import Weather from '../../../images/weather.png'
import Chat from '../../../images/chat.png'
import Crypto from '../../../images/crypto.png'
import Moon from '../../../images/moon.png'
import Github from '../../../images/githubresume.png'
import UrlShortener from '../../../images/urlshortener.png'
import SolarSystem from '../../../images/solar-system.png'

import { BaseStructure } from "../../base/js";
import { Stars } from "../../utils/Stars";
import { Card } from "../../../Components/cards/js";

import { propTypes } from "../../utils/globalProptypes";

import '../styles/index.scss';

const projects = [
    {
        title: 'Solar System',
        link: 'https://sullivantobias.github.io/solar-system',
        src: SolarSystem,
    },
    {
        title: 'Crypto Tracker',
        link: 'https://sullivantobias.github.io/Crypto-Tracker',
        src: Crypto,
    },
    {
        title: 'Chat',
        link: 'https://sullivantobias.github.io/chat',
        src: Chat
    },
    {
        title: 'Weather',
        link: 'https://sullivantobias.github.io/weather-app',
        src: Weather,
    },
    {
        title: 'Lunar',
        link: 'https://sullivantobias.github.io/moon-phase',
        src: Moon
    },
    {
        title: 'Github Resume',
        link: 'https://sullivantobias.github.io/github-resume',
        src: Github
    },
    {
        title: 'Url Shortener',
        link: 'https://url-shortener-st.herokuapp.com',
        src: UrlShortener
    }

]

export const Projects = ({ marker, tag, flexDisplay }) =>
        <BaseStructure title={'Projects'} marker={marker} tag={tag} flexDisplay={flexDisplay} separator fill={'#fff'} bcSvg={'rgb(9,76,114)'} clouds rotate>
            <Stars />
            {projects.map((project, index) =>
                <Card flexDisplay='flex-xs-12 flex-md-6 flex-lg-4'
                      key={index}
                      card={project}
                />
            )}
        </BaseStructure>

Projects.propTypes = propTypes;
