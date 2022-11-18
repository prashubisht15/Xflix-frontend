import React from 'react'
import Header from '../Header/Header';

import Dashboard from '../Dashboard/Dashboard';
import { useState } from 'react';

const Home = () => {
    const allGenres=[
     {   label:"All", value:"All"},
     {   label:"Educattion", value:"Educattion"},
     {   label:"Sports", value:"Sports"},
     {   label:"Comedy", value:"Comedy"},
     {   label:"Lifestyle", value:"LifeStyle"},
    ]
    const [videoList,setVideoList] = useState([])
  return (
    <div>
      <Dashboard allGenres/>
    </div>
  )
}

export default Home
