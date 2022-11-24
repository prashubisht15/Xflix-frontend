import React from 'react'
import {Box} from '@mui/system'
import { TextField } from '@mui/material'
// import InputAdornment from '@material-ui/core/InputAdornment';
// import { SearchOutlined } from '@material-ui/icons';
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

        // InputProps={{
        //   endAdornment: (
        //     <InputAdornment position="start">
        //        <SearchOutlined />
        //     </InputAdornment>
        //    ),
        //   }}
      />
    </Box>
  
  )
}

export default SearchBar
