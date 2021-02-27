import React from 'react'

function KeyIndex() {
    const friendNames = ['Santosh', 'Ajith', 'Supreeth']
    const friendMap = friendNames.map((names, index) => <h2 key={index}>{index} {names}</h2>)
    return (
        <div>
            {
                friendMap
            }
        </div>
    )
}

export default KeyIndex

const friendNames = ['Santosh', 'Ajith', 'Supreeth']