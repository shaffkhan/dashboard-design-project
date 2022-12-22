import React, { Children } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Topbar from '../components/Topbar/Topbar'

const Layout = ({props}) => {
  return (
    <>
    <Topbar/>
    <Sidebar/>
    {Children}
    </>
  )
}

export default Layout