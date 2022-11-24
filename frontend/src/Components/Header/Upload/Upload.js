import React,{useState} from 'react'
import Button from '@mui/material/Button'
import './Upload.css'
import CloseIcon from "@mui/icons-material/Close"

import { Dialog,Grid, IconButton } from '@mui/material'
import UploadForm from './UploadForm'

function Upload({allGenres, age}) {
  
  const [open, setOpen] = useState(false)
  const handleClose=()=>{
    setOpen(false)
  }
  const handleOpen=()=>{
    setOpen(true)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Grid container className="dialog">
          <Grid item xs={10}>
            <h3 className="form-header">Upload Video</h3>
          </Grid>
          <Grid item xs={2}>
            <IconButton className={"close-button"} onClick={handleClose}>
              <CloseIcon/>
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <UploadForm genres={allGenres} ages={age} onClose={handleClose}/>
          </Grid>
        </Grid>
      </Dialog>
        <Button id='upload' variant="contained" onClick={handleOpen}>Upload</Button>
    </div>
  
  )
}

export default Upload
