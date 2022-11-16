import React from 'react'
import {Box} from '@mui/system'
import { TextField } from '@mui/material'
import './SearchBar.css'
const SearchBar = () => {
  return (
    <Box
    sx={{
      width: 500,
      maxWidth: "100%"
    }}>
      <TextField
        fullWidth
        id="search"
        placeholder="Search"
      />
    </Box>
  )
}

export default SearchBar
