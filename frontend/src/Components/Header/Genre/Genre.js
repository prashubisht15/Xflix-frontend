import React,{useState} from 'react'
import { Box} from '@mui/material'
import './Genre.css'

function Genre({allGenres, selectedGenres, handleGenreChange, handleSort}) {
   
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
                <select 
                    onChange={e => {
                        handleSort(e.target.value); 
                    }}
                    className="sort-select"
                >
                    <option className="select-options" id="release-date-option" value="releaseDate">Release Date</option>
                    <option className="select-options" id="view-count-option" value="viewCount">View Count</option>
                </select>
            </Box>
    )
}

export default Genre
 