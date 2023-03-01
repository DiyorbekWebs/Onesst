import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Home/Home';
import Account from '../Account/Account';
import Section from '../section/Section'
import Layout from '../Layout/Layout';
import Information from '../InformationPage/Information';
function RoutesWrapper() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/accaunt' element={<Account/>}/>
      <Route path='/information' element={<Information/>}/>

      
    </Routes>

    </>
  )
}

export default RoutesWrapper