'use client';
import classes from './image-picker.module.css';
import {useRef, useState} from "react";
import Image from 'next/image';
export default function ImagePicker({label,name}) {
    const [pickedImage, setPickedImage] = useState();
    const ImageInput = useRef();
    function handlePickClick(){
        ImageInput.current.click();
    }
    function handleImageChange(event) {
        const file = event.target.files[0];

        if(!file) {
            return;
        }
const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {pickedImage && <Image src={pickedImage} alt="The image selected by the user" fill />}
                {!pickedImage && <p>No image picked yet.</p>}
                </div>
            <input
                   className={classes.input}
                   type="file"
                   id={name}
                   accept=" image/png, image/jpg, image/jpeg"
                   name={name}
                   ref={ImageInput}
                   onChange={handleImageChange}
            />
            <button className={classes.button} type="button" onClick = {handlePickClick}>
                Pick an Image</button>
    </div>
        </div>
  );
}