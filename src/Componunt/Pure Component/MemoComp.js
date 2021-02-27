import React from 'react'

function MemoComp({props}) {
    console.log('-------React Memo Component------')
    return (
        <div>
            React memo componenmt {props.myName3}
        </div>
    )
}

export default React.memo(MemoComp)
