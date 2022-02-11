import React from 'react';
import "./styles.css";

type PresentationProps = {

}

export default ({}: PresentationProps): JSX.Element => {
    return (
        <div className={"presentation__wrapper"}>
            <div className={"presentation__container container section"}>
                <h2 className={"presentation__mainTitle"}>Michel Camargo</h2>
                <p className={"presentation__mainDescription"}>Estudante e desenvolvedor web</p>

                <div className={"presentation__socialContainer"}>
                    <button className={"social__button social__buttonLinkedin"}>
                        <a className={"social__link social__linkLinkedin"}
                           rel="noopener noreferrer"
                           href={"https://www.linkedin.com/in/michelscamargo/"}
                           target="_blank"
                        >
                            LinkedIn
                        </a>
                    </button>

                    <button className={"social__button social__buttonGithub"}>
                        <a className={"social__link social__linkGithub"}
                           rel="noopener noreferrer"
                           href={"https://github.com/michelcamargo"}
                           target="_blank"
                        >
                            GitHub
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}