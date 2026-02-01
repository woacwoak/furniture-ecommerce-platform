import './Heading.css'

const Heading1 = ({text}) => {
    return <h1 className="mainheading">{text}</h1>
}

const Heading2 = ({text}) => {
    return <h3 className="subheading">{text}</h3>
}

export {Heading1, Heading2};