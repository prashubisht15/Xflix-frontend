import React,{useState} from 'react'
import { useSnackbar } from 'notistack';
import axios from 'axios'
import {Button, MenuItem, Stack, TextField} from '@mui/material'
import './Upload.css'
const UploadForm = ({genres, ages, onClose, refresh}) => {
  const endpoint = 'https://a3ec66ea-7b96-4a37-ab9c-67a84676de74.mock.pstmn.io/v1/videos'
  const [formData, setFormData] = useState({
    videoLink : '',
    title : '',
    genre : '',
    contentRating : '',
    releaseDate : '',
    previewImage : ''
  })
  const {enqueueSnackbar} = useSnackbar()
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState('someError')
  const handleChange=(event)=>
  {
    const newFormData = {
      ...formData,
      [event.target.name]:event.target.value
    }
    setFormData(newFormData)
  }
  const handleSubmit=()=>{
    postVideoAPI(formData)
  }
  const postVideoAPI= async(reqBody)=>{
    try{
      await axios.post(endpoint, reqBody)
      setIsError(false)
      setError('')
      refresh()
      onClose()
    }
    catch(e){
      if(e.response){
        setIsError(true)
        setError(e.response.data.message)
      }
      else{
        enqueueSnackbar("something went wrong. Check that backend is running",
        { variant: "error" })
      }
    }
  }
  return (
    <>
      <Stack spacing={3}>
        <Stack spacing={1.5}>
            <TextField
              required
              id="upload-btn-video"
              className="form-element"
              variant="outlined"
              label="Video Link"
              name="videoLink"
              placeholder="Video Link"
              helperText="This Link will be used"
              fullWidth
              value={formData.videoLink}
              onChange={handleChange}/>

            <TextField
              required
              id="upload-btn-image"
              className="form-element"
              variant="outlined"
              label="Preview Image"
              name="previewImage"
              placeholder="Thumbnail Image Link"
              helperText="This Link will be used to previewImage"
              fullWidth
              value={formData.previewImage}
              onChange={handleChange}/>

            <TextField
              required
              id="upload-btn-title"
              className="form-element"
              variant="outlined"
              label="title"
              name="videoLink"
              placeholder="title"
              helperText="This is the title"
              fullWidth
              value={formData.title}
              onChange={handleChange}/>

            <TextField
              select
              required
              id="upload-btn-genre"
              className="select-input form-element"
              label="genre"
              name="genre"
              
              helperText="This is the genre"
              fullWidth
              value={formData.genre}
              onChange={handleChange }>
              {
                genres.filter((options)=>options.value !=="All")
                .map((options)=>(
                  <MenuItem key={"genre-option"} value={options.value}>
                    {options.label}
                  </MenuItem>
                ))
              }</TextField>

            <TextField
              select
              required
              id="upload-btn-age"
              className="select-input form-element"
              label="age"
              name="age"
              
              helperText="This is the age"
              fullWidth
              value={formData.contentRating}
              onChange={handleChange }>
              {
                ages.map((options)=>(
                  <MenuItem key={"genre-option"} value={options.value}>
                    {options.value}
                  </MenuItem>
                ))
              }</TextField>

            <TextField
              type="date"
              id="upload-btn-release-date"
              className="form-element"
              label="Release Date"
              name="releaseDate"
              placeholder="title"
              helperText="This will be used to sort videos"
              InputLabelProps={{
                shrink:true
              }}
              fullWidth
              value={formData.releaseDate}
              onChange={handleChange}/>
        </Stack>
        <Stack direction="row">
          <Button
            id="upload-btn-submit"
            variant="contained"
            color="primary"
            type="submit"
            style={{marginRight:"10px"}}
            onClick={handleSubmit}
            >
              Upload Video
            </Button>
            <Button
              id="upload-btn-cancel"
              type="submit"
              sx={{color:"white"}}
              onClick={()=>onClose()}
              >
                  Cancel
            </Button>
          </Stack> 
          {isError &&(
            <div className="error-msg">Something went wrong - {error }</div>
          )}
      </Stack>
    </>
  )
}

export default UploadForm
