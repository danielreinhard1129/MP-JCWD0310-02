'use client';

import { FC } from "react";
import {FileWithPath , useDropzone} from "react-dropzone"

interface DropzoneProps {
    labe: string;
    isError: boolean;
    onDrop: (files:FileWithPath[])=>void;
}

const DropZone: FC<DropzoneProps> = ({isError,labe,onDrop}) => {
  const {getRootProps,getInputProps} = useDropzone({
    accept:{
        'image/*':[],
    },
    maxFiles:1,
    onDrop(acceptedFiles) {
        onDrop(acceptedFiles);
    },

  });  
  return (
    <div>DropZone</div>
  )
}

export default DropZone