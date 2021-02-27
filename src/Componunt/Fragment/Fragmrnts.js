import React from 'react'
import FragmentChild from './FragmentChild'

function Fragmrnts() {
    return (
        <table>
            <tfoot>
                <tr>
                    <FragmentChild/>
                </tr>
                </tfoot>
        </table>
    )
}

export default Fragmrnts
