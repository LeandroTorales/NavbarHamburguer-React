import React from 'react'
import styled from 'styled-components'

const StyledBackColor = styled.div`

position: absolute;
    background-color: #7a7a7a;
       top: -2000px;;

    &.active{
        top: 0;
left: 0;
            width: 100%;
    height: 85vh;
    z-index: -1;
    border-radius: 0% 0% 60% 60%;  transition: all .6s;
    }
`

const BackColorComponent = ({propClicked}) => {
  return (
      <>
          <StyledBackColor className={` ${propClicked ? "active" : ""}`}></StyledBackColor>
      </>
  )
}

export default BackColorComponent