'use client';

import { FC } from "react";

interface PreviewImageProps {
    fileImages? : File[];
    images? : string[];
    onRemoveImages:(index : number) => void;
}

const PreviewImages :FC<PreviewImageProps> = ()=>{
    return (
        <div>

        </div>
    )
};

export default PreviewImages;