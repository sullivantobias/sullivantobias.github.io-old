import React, { useRef } from "react";
import Avatar from '../../../images/avatar.png'

import TrackVisibility from "react-on-screen";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BaseStructure } from "../../base/js";
import { Title } from "../../../Components/title/js";
import { Text } from "../../../Components/text/js";
import { Image } from "../../../Components/image/js";
import { Container } from "../../../Components/container/js";
import { Separator } from "../../../Components/separator/js";

import { faArrowAltCircleUp, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import { propTypes } from "../../utils/globalProptypes";

import '../styles/index.scss';

export const Contact = ({ marker, tag, flexDisplay }) => {
    const buttonRef = useRef();
    const titleRef = useRef();
    const navRef = useRef();

    const handleClick = () => {
        buttonRef.current.classList.toggle('active');
        titleRef.current.classList.toggle('active');
        navRef.current.classList.toggle('active');
    };

    const linksArray = [
        {
            href: "https://www.linkedin.com/in/sullivan-tobias-340807157/",
            class: "linkedIn",
            icon: faLinkedinIn,
            text: "See my profile",
            target: '_blank'
        },
        {
            href: "https://github.com/sullivantobias",
            class: "github",
            icon: faGithub,
            text: "Check my repositories",
            target: '_blank'
        },
        {
            href: "mailto:sullytobias@gmail.com",
            class: "gmail",
            icon: faGoogle,
            text: "Send me an email"
        }];

    const links = linksArray.map((link, index) =>
        <a key={index} target={link.target} href={link.href} className={link.class}>
            <FontAwesomeIcon icon={link.icon} />
            <Text text={link.text} />
            <FontAwesomeIcon icon={faChevronCircleRight} />
        </a>);

    return (
        <BaseStructure title={'More'} marker={marker} tag={tag} flexDisplay={flexDisplay} separator bc={'rgb(1,41,63)'} fill={'#fff'} clouds>
            <Container flexDisplay={'flex-xs-12 flex-md-6 leftPanel'}>
                <Text className={'mentions'} text={'Passions'} flexDisplay={'flex-xs-12'} />
                <TrackVisibility partialVisibility once className={'flex-xs-12'}>
                    <Container withTransition typeTransition={'leftToRight'}>
                        <Text text={'Games'} className={'games'} flexDisplay={'flex-xs-12'} />
                        <Text className={'geoguessr'} text={'GeoGuessr'} link={'https://www.geoguessr.com/'} />
                        <Text className={'aiDungeon'} text={'Ai Dungeon'} link={'https://en.wikipedia.org/wiki/AI_Dungeon'} />
                    </Container>
                </TrackVisibility>
                <Separator width={50} flexDisplay={'flex-xs-12'} />
                <TrackVisibility partialVisibility once className={'flex-xs-12'}>
                    <Container withTransition typeTransition={'leftToRight'}>
                        <Text text={'Challenge'} className={'challenge'} flexDisplay={'flex-xs-12'} />
                        <Text className={'hackerrank'} text={'HackerRank'} link={'https://www.hackerrank.com/'} />
                    </Container>
                </TrackVisibility>
                <Separator width={50} flexDisplay={'flex-xs-12'} />
                <TrackVisibility partialVisibility once className={'flex-xs-12'}>
                    <Container withTransition typeTransition={'leftToRight'}>
                        <Text text={'Extra'} className={'extra'} flexDisplay={'flex-xs-12'} />
                        <Text className={'music'} text={'Music'} />
                        <Text className={'astronomy'} text={'Astronomy'} />
                        <Text className={'reading'} text={'Reading'} />
                        <Text className={'blockchain'} text={'Blockchain'} link='https://fr.wikipedia.org/wiki/Blockchain' />
                    </Container>
                </TrackVisibility>
            </Container>
            <TrackVisibility partialVisibility once className={'component flex-xs-12 flex-md-6 rightPanel'}>
                <Text text={'Contact'} flexDisplay={'flex-xs-12 contact-title'} />
                <Container className="contact-area" withTransition typeTransition={'rightToLeft'}>
                    <div className="contact">
                        <section>
                            <div className="content">
                                <Image props={{
                                    src: Avatar,
                                    alt: "Profile Image"
                                }} />

                                <aside>
                                    <Title title={'Sullivan Tobias'} />
                                </aside>

                                <button onClick={handleClick} ref={buttonRef}>
                                    <span>Contact Me</span>
                                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                                </button>
                            </div>

                            <div className="title" ref={titleRef}><p>Contact Me</p></div>
                        </section>

                        <nav ref={navRef}>
                            {links}
                        </nav>
                    </div>
                </Container>
            </TrackVisibility>
        </BaseStructure>
    )
};

Contact.propTypes = propTypes;
