import React from 'react'

function HeroNames({heros}) {
    if (heros == 'Arun') {
        throw Error ('Not a hero...he is superman')
    }
    return (
        <div>
            {heros}
        </div>
    )
}

export default HeroNames

