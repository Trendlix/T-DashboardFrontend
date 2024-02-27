import { storage } from "@/config/firebase.config";
import { ref, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

export const imageUpload = (file, ImageCategory) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `/${ImageCategory}/${file.name}${uuidv4()}`);
      const uploadImage = uploadBytesResumable(storageRef, file);
  
      uploadImage.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          console.log('Error uploading files: ' + error);
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadImage.snapshot.ref);
            console.log(`File is uploaded successfully and available at: ${downloadURL}`);
            resolve(downloadURL);
          } catch (error) {
            console.log('Error getting download URL: ' + error);
            reject(error);
          }
        }
      );
    });
  };

export const imageDelete = async (imageUrl) => {
    try {
        const modifiedUrl = imageUrl.split('?')[0];
        const storageRef = ref(storage, modifiedUrl);
        await deleteObject(storageRef)
        console.log('image deleted successfully!')
    } catch (error) {
        console.log('error deleting image: ' + error.message)
        
    }

}