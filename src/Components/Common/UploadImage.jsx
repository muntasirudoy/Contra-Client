
import React from 'react'
import { BiUpload } from 'react-icons/bi';

const UploadImage = ({ option, setImages }) => {

    const myWidget = cloudinary.createUploadWidget({
        cloudName: 'dxf9h9jqf',
        uploadPreset: 'tueuiijb',
        clientAllowedFormats: option == "pdf" ? ["pdf"] : ["jpg", "png", "webp"]
    }, (error, result) => {

        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
            setImages((img) => [...img, result.info])
        }

    })






    return (
        <div>
            <BiUpload onClick={() => myWidget.open()} />

        </div>
    )
}

export default UploadImage