import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import { HeaderCenter, HeaderLeft, HeaderRight } from './c-cpns'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'


const AppHeader = memo(() => {

    /** redux */
    const {headerConfig} = useSelector(state=>({
        headerConfig:state.main.headerConfig
    }),shallowEqual)

    const {isFixed} = headerConfig

    console.log(isFixed,'isFixed');

  return (
    
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <HeaderLeft/>
        <HeaderCenter/>
        <HeaderRight/>
    </HeaderWrapper>
  )
})

export default AppHeader