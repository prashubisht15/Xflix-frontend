import React from 'react'
import { Box } from '@mui/material'
import './Age.css'
import {NavLink, BrowserRouter } from 'react-router-dom'

const ageArray = ['Any age group', '7+', '12+', '16+', '18+']
const Age = () => {
    let activeStyle = {
        color : "gray",
        textDecoration: "None",
        background : "white",
        padding : "5px 15px 5px 15px",
        borderRadius : "25px",
        boxSizing : "border-box"
      };
    return (
        <BrowserRouter>
        
            <Box className="ageBox">
                <ul className='ageItems'>
                    {
                        ageArray.map((ele, idx) => <li key={idx}>
                            <NavLink
                                    to="messages"
                                    style={({ isActive}) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                {ele}
                            </NavLink></li>)
                    }
                </ul>
            </Box>
        </BrowserRouter>
    )
}

export default Age
