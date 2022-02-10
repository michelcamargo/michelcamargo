import React from 'react';

type NotFoundProps = {
    children?: JSX.Element | JSX.Element[];
}

export default ({children}: NotFoundProps): JSX.Element => {
    return (
        <div>
            <p>Opa!? Tá perdido, amigo?</p>
            <span>{children}</span>
        </div>
    )
}