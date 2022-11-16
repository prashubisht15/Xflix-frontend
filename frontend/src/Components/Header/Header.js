import React from 'react'
import Logo from './Logo/Logo'
import SearchBar from './SearchBar/SearchBar'
import Upload from './Upload/Upload'
import './Header.css'
import { Box } from '@mui/material'
import Genre from './Genre/Genre'
import Age from './Age/Age'
const Header = () => {
  return (
    <Box className="header">
        <Box id="nav">
            <Logo />
            <SearchBar />
            <Upload />
        </Box>
            <Genre/>
            <Age/>
        

    </Box>
  )
}

export default Header




