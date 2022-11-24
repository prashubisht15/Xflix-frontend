import { useSnackbar } from 'notistack'
import React, {useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import { Grid } from '@mui/material';
import axios from 'axios';
import Explore from '../Explore/Explore';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const endpoint = 'https://a3ec66ea-7b96-4a37-ab9c-67a84676de74.mock.pstmn.io/v1/videos'

const VideoPage = (props) => {
    const params = useParams()
    const [video,setVideo]=useState(null)
    const [allVideos, setAllVideos] = useState([])
    const [videoId, setvideoId] = useState(null)
    const {enqueueSnackbar} = useSnackbar();

    const getVideoData = async(id)=>{
        let response;
        try
        {
            response = await axios.get(`${endpoint}/${id}`)
            setVideo(response.data)
        }catch(e)
        {
            if (e.response) {
                enqueueSnackbar(e.response.message, { variant: "error" })
            } else {
                enqueueSnackbar("something went wrong. Check that backend is running",
                    { variant: "error" })
            }
        }
    }
    const getAllVideos= async()=>{
        let response=[];
        try{
            response = await axios.get(`${endpoint}`)
            setAllVideos(response.data.videos)
        }catch(e){
            if (e.response) {
                enqueueSnackbar(e.response.message, { variant: "error" })
            } else {
                enqueueSnackbar("something went wrong. Check that backend is running",
                    { variant: "error" })
            }
        }
        
    }
    const handleVoteChange=(id,vote,change)=>{
        let reqObj={
            vote,change
        }
        changeVote(id,reqObj)
    }


    const changeVote =async(videoId, reqObj)=>{
        try{
            await axios.patch(`${endpoint}/${videoId}/vote`)
            getVideoData(params.id)
        }catch(e)
        {   if (e.response) {
            enqueueSnackbar(e.respose.message, { variant: "error" })
        } else {
            enqueueSnackbar("something went wrong. Check that backend is running",
                { variant: "error" })
        }

        }
    }
    useEffect(()=>{
        // setvideoId(params.id)
        getVideoData(params.id)
      
    },[params.id]);

    useEffect(()=>{
        // setvideoId(params.id)
        getAllVideos()
    },[]);

  return (
    <>
        <Grid container>
            {video ?(
                <Grid item xs={12}>
                    <VideoPlayer video={video} handleVoteChange={handleVoteChange}/>
                </Grid>
            ):(
                <div> Loading...</div>
            )
            }
            <Link to={`/video/${params._id}`}>link</Link>
            <Grid item xs={12}>
                <Explore videoList={allVideos}/>
            </Grid>
            
        </Grid>
    </>
  )
}

export default VideoPage
