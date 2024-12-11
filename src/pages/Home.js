import React, { useState } from 'react'
import Headers from '../component/Headers'
import { Outlet } from 'react-router-dom'
import { EuiPageTemplate } from '@elastic/eui'
import Footer from '../component/Footer'
import SideBar from '../component/SideBar'

export default function Home() {
  const [openSideBar,setOpenSideBar]=useState(false)
  const clickSideBar=()=>setOpenSideBar(!openSideBar)
  return (
    <>
    <EuiPageTemplate>
      <Headers clickSideBar={clickSideBar}/>
        {openSideBar&&
        <EuiPageTemplate.Sidebar minWidth='220px' paddingSize='s'>
            <SideBar/>
        </EuiPageTemplate.Sidebar>
        }
        <Outlet/>
        <Footer/>
    </EuiPageTemplate>
    </>
  )
}
