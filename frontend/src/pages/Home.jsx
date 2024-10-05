import React, { useState } from 'react'
import '../Style/Home.css';
import Header from  '../components/Header'
import Menu from '../components/menu';
import Fooddisp from '../components/fooddisp';
import AppDownlod from '../components/appDownlod';
export default function Home() {

  const [category,setcategory]=useState("All")

  return (
    <div>
      <Header/>
      <Menu category={category} setcategory={setcategory}/>
      <Fooddisp category={category} />
      <AppDownlod/>
    </div>
  )
}
