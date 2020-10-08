import React, { ReactElement } from 'react'

interface Props {
    age : number;
}

const Age = ({age}: Props): ReactElement => {
    return (
        <div>
            Age: {age}
        </div>
    )
}

export default Age
