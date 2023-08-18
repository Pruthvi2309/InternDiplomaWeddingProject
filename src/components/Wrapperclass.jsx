import React from 'react'
import styled from 'styled-components' 
function Wrapperclass() {
  return (
    <Wrapper>
            <div  className='heading'>
                <h1>Hello</h1>
            </div>
    </Wrapper>


  )
}
const Wrapper = styled.section`
.heading{
    color:yellow;
    fontSize:50opx;
    text-align:center;
    margin:50px;
}`
export default Wrapperclass
