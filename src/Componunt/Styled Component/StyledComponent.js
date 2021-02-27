import React from 'react'
import styled, { css } from "styled-components";

const Atag = styled.div `
color : red;
font-size: 48px
`

const Name = styled.div `
color : green;
font-size : 48px;
text-align: right;
color : ${props => props.colors ? props.colors : "pink"};
text-align : ${props => props.position ? props.position : "left"}

`

const Multi = styled.div `
${props => props.trial && css`
color : blue;
font-size : 58px;
background-color : yellow;
`}
`

const ext = styled(Multi) `
border-radius : 8px;
color : maroon;

`

function StyledComponent() {
    return (
        <div>
            <Multi trial>
                Santosh
            </Multi>
            <Name colors = "yellow">
                Ajit
            </Name>
            <ext> 
                Hi overthinker 
            </ext>
        </div>
    )
}

export default StyledComponent
