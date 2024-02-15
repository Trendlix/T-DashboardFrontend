import { storage } from "@/config/firebase.config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

export const imageUpload = ( file, ImageCategory ) =>{
    let imageUrl;
    const storageRef = ref(storage, `/${ImageCategory}/${file.name}${uuidv4()}`)
    const uploadImage = uploadBytesResumable(storageRef, file)
    uploadImage.on('state_changed', 
        (snapshot)=>{
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress} % done`)
            switch(snapshot.state){
                case 'paused': 
                    console.log('Upload is paused')
                    break;
                case 'running': 
                    console.log('Upload is running')
                    break;
            }
        },
        (error) => {
            console.log('Error uploading files: ' + error)
        },
        ()=>{
            getDownloadURL(uploadImage.snapshot.ref).then((downloadURL)=>{
                console.log(`File is uploaded successfully and available at : ${downloadURL}`)
                imageUrl = downloadURL;
            })
        }

    )
    return imageUrl;
}