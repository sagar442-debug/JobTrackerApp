import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import SmallSideBar from '../components/SmallSideBar'
import { BigSideBar, Navbar } from '../components'

function DashboardLayout() {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar/>
        <BigSideBar/>
        <div>
          <Navbar/>
          <div className="dashboard-page">
            <Outlet/> 
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default DashboardLayout
