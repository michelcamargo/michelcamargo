import React from 'react';

import Landing from "../../components/Sections/Landing";

function Home(){
    return(
        <Landing>
            <div className={"home__landing"}>
                <div className={"home__centerTextContainer"}>
                    <h2 className={"home__centerText"}>Desenvolvimento Web & UX/UI</h2>
                </div>

                <div className={"home__bottomContainer"}>
                    <div className={"home__bottomDate-"}>25/12</div>
                    <div className={"home__socialContainer"}>
                        <a className="home__socialAnchor" href={"#"}><span className={"home__socialItem"}>Instagram</span></a>
                        <a className="home__socialAnchor" href={"#"}><span className={"home__socialItem"}>Linkedin</span></a>
                        <a className="home__socialAnchor" href={"#"}><span className={"home__socialItem"}>GitHub</span></a>
                    </div>
                </div>
            </div>

            <div className={"home__content"}>

                <div className={"home__actionButtonGroup"}>
                    <div className={"home__actionButton"}>Water.</div>
                    <div className={"home__actionButton"}>Air.</div>
                    <div className={"home__actionButton"}>Wood.</div>
                    <div className={"home__actionButton"}>Sand.</div>
                </div>

                <div className={"home__actionGroupText"}>
                    <p>Lorem ipsão</p>
                </div>

            </div>
        </Landing>
    );
}

export default Home;