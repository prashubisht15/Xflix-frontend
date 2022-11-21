import React from 'react'
import { Grid } from '@mui/material'
import './Explore.css'
import {Link} from 'react-router-dom'
// import moment from "moment"

const Explore = ({videoList}) => {
    console.log(videoList.length)
  return ( 
      <Grid container className="video-grid">
        {
            
            videoList && videoList.length>0?(
                videoList.map((video)=>(
                    <Grid
                        key={video._id}
                        item
                        xs={12}
                        md={3}
                        style={{padding:".5%",
                                }}
                                >
                        <Link to={`/video/${video._id}`} style={{textDecoration: 'none'}}>
                            <Grid container className="video-tile">
                                <Grid item xs={12}>
                                    <img src={video.previewImage} alt="PREVIEW_IMAGE" className="preview-image"></img>
                                </Grid>
                                <Grid item xs={12} >
                                    <p className='video-title'>{video.title}</p>                                    
                                    {/* <p className='video-sub-title'>{moment(video.releaseDate).fromNow()}</p>    */}
                                    <p className='video-sub-title'>{video.releaseDate}</p>                                  
                                </Grid>
                                <Grid item xs={12} >
                                    <p className='video-sub-title'>{video.genre}{"|"}{video.contentRating}</p>                                                                        
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>

                ))
            ):
            (
                <div className='no-videos'>
                    <p>No video found</p>
                </div>
            )
        }
      </Grid>
  )
}

export default Explore
