import { Box, ImageListItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CircularProgressWithLabel from './CircularProgressWithLabel'
import { CheckCircleOutline } from '@mui/icons-material'
import {v4 as uuidv4} from 'uuid'
import uploadFileProgress from '../../../firebase/uploadFileProgress'
import addDocument from '../../../firebase/addDocument'

const ProgressItem = ({file}) => {
    const [progress, setProgress] = useState(100);
    const [imageUrl, setImageUrl] = useState(null);
    const currentUser = {uid:'userId'}
    useEffect(()=>{
        const uploadImage = async()=>{
            const imageName = uuidv4() + "." + file.name.split('.').pop()
            try {
                const url = await uploadFileProgress(
                    file,
                    `gallery/${currentUser.uid}`,
                    imageName,
                    setProgress
                )
                const galleryDoc = {
                    imageUrl : url,
                    uid: currentUser.uid,
                    uEmail: 'test@test.com',
                    uName:'John',
                    uPhoto:'',
                }
                await addDocument('gallery' , galleryDoc, imageName)
                setImageUrl(null)
            } catch (error) {
                alert(error.message)
                console.log(error)
            }
        }
        setImageUrl(URL.createObjectURL(file));
        uploadImage()
    },[file]);
  return (
    imageUrl && <ImageListItem cols={1} rows={1}>
        <img src={imageUrl} alt='gallery' loading='lazy' />
        <Box
        sx={backDrop}>
        {progress <100 ?(<CircularProgressWithLabel value={progress}/> ):(
            <CheckCircleOutline sx={{ width:60 , height:60, color:"lightGreen"}} />
        )}
        </Box>
    </ImageListItem>
  )
}

export default ProgressItem

const backDrop ={
            position:'absolute',
            top:0,
            right:0,
            bottom:0,
            left:0,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            background:'rgba(0,0,0,.5)'
}
