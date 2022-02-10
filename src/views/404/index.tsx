type HomeProps = {
    children?: JSX.Element | JSX.Element[];
}

export default ({children}: HomeProps): JSX.Element => {
    return (
        <div>
            <p>Hello World!</p>
            <span>{children}</span>
        </div>
    )
}