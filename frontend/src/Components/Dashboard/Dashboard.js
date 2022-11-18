import React from 'react'
import { Grid } from '@mui/material'

const Dashboard = ( {allgenres,videoList}) => {
  return (
    <div>
        <Grid container>
            <GenreList allGenres={allGenres}/>
        </Grid>
        <Grid item xs={12}>
            <Explore videoList={videoList}/>
        </Grid>
      
    </div>
  )
}

export default Dashboard
