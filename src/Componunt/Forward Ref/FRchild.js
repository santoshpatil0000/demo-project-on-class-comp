import React from 'react'





// function FRchild() {
//     return (
//         <div>
//             <input type='text' />
//         </div>
//     )
// }

const FRchild = React.forwardRef((props , reference) => {
    return (
        <div>
            <input type='text' ref={reference}/>
            <p>{props.myName}</p>
        </div>
    )
})


export default FRchild
