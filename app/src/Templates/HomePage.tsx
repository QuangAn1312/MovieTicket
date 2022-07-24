import React from 'react'
import { Outlet } from 'react-router-dom';

import HeaderHome from '../Compoments/HeaderHome/HeaderHome';
import Homepage from '../Pages/Homepage/Homepage';


type Props = {}

function HomeTemplate({}: Props) {
  return (
    <div>
        <HeaderHome />
        <Homepage/>
        <Outlet />
    </div>
  )
}

export default HomeTemplate;