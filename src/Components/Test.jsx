import React, { useState } from 'react'
import { ref, getDownloadURL, uploadBytesResumable, } from "firebase/storage";
import { storage } from '../dbconfig';
const initialState = {
    productName: "",
    quantity: 1,
    cost: 0,
    price: 0,
    size: 10,
    category: "",
    sku: "",
    tags: [],
    description: "",
    features: [],
    images: [],
  };
const Test = () => {

  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const [URLs, setURLs] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleImageChange = (e) => {
    let allImages = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      allImages.push(newImage);
    }
    setImages(allImages);
  };

  const uploadImages = (files) => {
    const promises = [];
    files.map((file) => {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setURLs([...URLs, downloadURL])
            console.log("File available at", downloadURL);
          });
        }
      );
    });
    Promise.all(promises)
      .then(() => alert("All images uploaded"))
      .catch((err) => console.log(err));
  };

  const handleFormSubmit = async () => {
      uploadImages(images);
      console.log("images: ", images);
      console.log("urls", URLs);
  };
  return (
    <div>
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleFormSubmit}>upload</button>
    </div>
  )
}

export default Test