import React from 'react';
import "./styles.css";

type HomeProps = {

}

export default ({}: HomeProps): JSX.Element => {
    return (
        <div className={"home__wrapper"}>
            <div className={"home__presentation container section"}>
                <h2 className={"home__mainTitle"}>Michel Camargo</h2>
                <p className={"home__mainDescription"}>Estudante e desenvolvedor web</p>

                <div className={"home__socialContainer"}>
                    <button className={"social__button social__buttonLinkedin"}>
                        <a className={"social__link social__linkLinkedin"}
                           href={"https://www.linkedin.com/in/michelscamargo/"}
                           target="_blank"
                        >
                            LinkedIn
                        </a>
                    </button>

                    <button className={"social__button social__buttonGithub"}>
                        <a className={"social__link social__linkGithub"}
                           href={"https://github.com/michelcamargo"}
                           target="_blank"
                        >
                            GitHub
                        </a>
                    </button>
                </div>
            </div>
            <div className={"home__services container section"}>
                <div className={"home__servicesContainer"}>
                    <div className={"home__leftService"}>
                        <img src={"#"} alt={"Serviço"} />
                    </div>

                    <div className={"home__rightService"}>
                        <h4>Desenvolvimento web</h4>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}