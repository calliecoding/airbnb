import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import { HeaderCenter, HeaderLeft, HeaderRight } from './c-cpns'


const AppHeader = memo(() => {
  return (
    
    <HeaderWrapper className='header'>
        <HeaderLeft/>
        <HeaderCenter/>
        <HeaderRight/>
    </HeaderWrapper>
  )
})

export default AppHeader