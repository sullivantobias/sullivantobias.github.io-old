import React from 'react';

import { Header } from "./Sections/header/js";
import { Navigation } from "./Components/navigation/js";
import { About } from "./Sections/about-me/js";
import { Projects } from "./Sections/projects/js";
import { Contact } from "./Sections/contact/js";
import { Footer } from "./Sections/footer/js";
import { BackToTop } from "./Components/backtotop/js";

import { navigationLinks } from "./Utils/navigationLinks";
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

const App = () => {

    return (
        <React.Fragment>
            <Header marker={'header'} tag={'header'} flexDisplay={'flex-just-center-xs'} />
            <Navigation navigationLinks={navigationLinks} flexDisplay={'container-fluid navigation'} />
            <About tag={'section'} marker={'about'} />
            <Projects tag={'section'} marker={'projects'} flexDisplay={'flex-just-center-xs'} />
            <Contact tag={'section'} marker={'more'} flexDisplay={'flex-just-center-xs '} />
            <Footer tag={'footer'} marker={'footer'} flexDisplay={'flex-just-center-xs'} />
            <BackToTop posY={0} icon={faArrowAltCircleUp} />
        </React.Fragment>
    )
};

export default App;
