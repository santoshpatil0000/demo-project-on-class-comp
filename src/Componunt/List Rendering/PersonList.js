import React from 'react'

function PersonList({detail}) {
    return (
        <div>
             <h2>I am {detail.name}. I am {detail.age} age and I am having {detail.skill} skill in my domain</h2>;
        
            </div>
    )
}

export default PersonList
