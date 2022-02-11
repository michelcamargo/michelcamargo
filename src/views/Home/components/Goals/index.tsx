import React from 'react';
import "./styles.css";

import GoalsImage from "../../../../assets/img/home/goals.png";

type GoalsProps = {
    className?: string;
}

export default ({className}: GoalsProps): JSX.Element => {
    return (
        <div className={"goals__content container section"}>
            <div className={"goals__imageContainer"}>
                <img className={"goals__imageElement"} alt={"Metas"} src={GoalsImage}/>
            </div>
            <div className={"goals__callToAction"}>
                <h5 className={"goals__heading"}>I design and develop experiences that make people's lives <strong>simple</strong>.</h5>
                <p className={"goals__description"}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
            </div>
        </div>
    )
}