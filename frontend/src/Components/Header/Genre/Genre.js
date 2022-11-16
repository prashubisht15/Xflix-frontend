import React from 'react'
import { Box} from '@mui/material'
import { NavLink, BrowserRouter } from "react-router-dom";
import Button from '@mui/material/Button';
import './Genre.css'
const btnArray = ['All Genre', 'Education', 'Sports', 'Music','lifestyle']

function Genre() {
    let activeStyle = {
        color : "gray",
        textDecoration: "None",
        background : "white",
        padding : "5px 8px 5px 8px",
        borderRadius : "25px",
        boxSizing : "border-box"
      };

    return (
        <BrowserRouter>
            <Box className='genreBox'>
                <ul className='genreItems'>
                    {
                        btnArray.map((ele,idx) => <li key={idx}>
                            <NavLink
                                to="messages"
                                style={({ isActive}) =>(
                                isActive ? activeStyle : undefined

                        )}
                            >
                                {ele}
                            </NavLink></li>)
                    }
                </ul>
                <Button variant='contained'>Contained</Button>
            </Box>
        </BrowserRouter>
    )
}

export default Genre
