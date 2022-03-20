import React from "react";
import Avatar from '../../../images/avatar.png'

import TrackVisibility from "react-on-screen";

import { Title } from "../../../Components/title/js";
import { BaseStructure } from "../../base/js";
import { SkillBars } from "../../../Components/skills-bars/js";
import { Image } from "../../../Components/image/js";
import { Text } from "../../../Components/text/js";
import { Container } from "../../../Components/container/js";
import { TextIcon } from "../../../Components/text-icon/js";
import { Separator } from "../../../Components/separator/js";

import { faHtml5, faCss3, faJsSquare, faReact, faNode , faApple } from '@fortawesome/free-brands-svg-icons';
import { propTypes } from "../../utils/globalProptypes";

import '../styles/index.scss';

const mainSkills = [
    { type: faHtml5, level: 85, class: 'html' },
    { type: faCss3, level: 80, class: 'css' },
    { type: faJsSquare, level: 85, class: 'js' },
    { type: faReact, level: 80, class: 'react' },
    { type: faNode, level: 80, class: 'node' }
];

const extraSkills = [
    { text: "Handlebars", level: 75 },
    { text: "Redux", level: 70 },
    { text: "MobX", level: 70 },
    { text: "Jest", level: 75 },
    { text: "AEM", level: 70 },
    { text: "GraphQl", level: 65 }
];

export const About = ({ marker, tag, flexDisplay }) => {
    return (
        <BaseStructure marker={marker} tag={tag} flexDisplay={flexDisplay}>
            <Title title={'About Me'} flexDisplay={'flex-xs-12'} underlined />
            <TrackVisibility partialVisibility once className={'flex-xs-12 flex-lg-6 flex-just-center-xs'}>
                <Container withTransition typeTransition={'scale'}
                    className={`about-header-container`}>
                    <Image props={{ src: Avatar, alt: 'avatar' }} />
                    <Text textKey={'description'} className={'description'} />
                </Container>
            </TrackVisibility>
            <TrackVisibility partialVisibility once className={'flex-xs-12 flex-lg-6'}>
                <Text text={'Main Skills'} className={'skillsTitle'} />
                <SkillBars skills={mainSkills} />
                <Text text={'Extra Skills'} className={'skillsTitle'} />
                <SkillBars skills={extraSkills} />
            </TrackVisibility>
            <Container flexDisplay={'flex-xs-12 flex-md-6'}>
                <Title title={'Work environment'} tag={3} />
                <TrackVisibility partialVisibility once className={'flex-xs-12'}>
                    <Container withTransition typeTransition={'leftToRight'}>
                        <TextIcon icon={faApple} className={'flex-xs-6 apple'} />
                    </Container>
                </TrackVisibility>
            </Container>
            <Separator width={70} flexDisplay={'flex-xs-12'} />
        </BaseStructure>
    )
};

About.propTypes = propTypes;
