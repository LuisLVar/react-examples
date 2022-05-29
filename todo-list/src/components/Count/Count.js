import React, { memo } from 'react'

const Count = ({ count, increment }) => {

    console.log('-------------------- Count ----------------------')

    return (
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>
    )
}

export default memo(Count);
