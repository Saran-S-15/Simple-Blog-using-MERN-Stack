import React from 'react'
import { Outlet } from 'react-router-dom';
import BottomAppBar from '../Appbar/BottomAppBar';

function Web() {
  return (
    <div>
      <BottomAppBar/>
      <Outlet/>
    </div>
  )
}

export default Web;