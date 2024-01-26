import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashboardContext } from '../pages/DashboardLayout'


const SmallSideBar = () => {
  const {showSidebar} = useDashboardContext();

  console.log(showSidebar)

  return (
    <Wrapper>
      Small Side Bar
    </Wrapper>
  )
}

export default SmallSideBar
