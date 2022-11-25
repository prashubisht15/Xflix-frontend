import React,{useState} from 'react'
import {Box} from '@mui/system'
import { Button, TextField } from '@mui/material'

import './SearchBar.css'
const SearchBar = ({handleSearch}) => {

  return (
    <Box className="searchBox"
    sx={{
      width: 500,
      maxWidth: "100%"
    }}>
        <TextField
          fullWidth
          id="search"
          placeholder="Search"
          onChange={(e)=>handleSearch(e.target.value)}
        />
        <button className='btn'>search</button>
      
    </Box>
  
  )
}

export default SearchBar
