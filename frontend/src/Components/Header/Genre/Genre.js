import React from 'react'
import { Box} from '@mui/material'
import Button from '@mui/material/Button';
import './Genre.css'

function Genre({allGenres, selectedGenres, handleGenreChange}) {
   
    return (
    
            <Box className='genreBox'>
                <ul className='genreItems'>
                    {
                        allGenres.map((genre) => 
                        <li key={genre.value}
                        onClick={()=>handleGenreChange(genre)}
                        className={selectedGenres.includes(genre.value)?"genreItemsActive":"genreItems"}    
                        >
                                {genre.label}
                        </li>)
                    }
                </ul>
                <Button variant='contained' className='sort-btn'>Contained</Button>
            </Box>
    )
}

export default Genre
 