import React from 'react'
import Logo from './Logo/Logo'
import SearchBar from './SearchBar/SearchBar'
import Upload from './Upload/Upload'
import './Header.css'
import { Box } from '@mui/material'
import { Grid } from '@mui/material'
import Genre from './Genre/Genre'
import Age from './Age/Age'

const Header = ({allGenres,age,videoList,handleGenreChange,handleContentChange,selectedGenres,selectedContent}) => {
  return (
    <Box className="header">
        <Box id="nav">
            <Logo />
            <SearchBar />
            <Upload />
        </Box>
        <Grid container className="Grid-genre">
            <Genre allGenres={allGenres} handleGenreChange={handleGenreChange} selectedGenres={selectedGenres}/>
        </Grid >
        <Grid container className="Grid-age">
            <Age age={age} handleContentChange={handleContentChange} selectedContent={selectedContent}/>
        </Grid>
    </Box>
  )
}

export default Header




