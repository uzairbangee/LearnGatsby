import React, { ReactElement } from 'react'

interface Props {
    name: String;
}


const Name = ({name}:  Props): ReactElement => {
    return (
        <div>
            <p>Name: {name} </p>
        </div>
    )
}

export default Name;