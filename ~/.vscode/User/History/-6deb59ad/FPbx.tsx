'use client';

import { FC, useMemo } from 'react';

interface PreviewImageProps {
  fileImages?: File[];
  images?: string[];
  onRemoveImages: (index: number) => void;
}

const PreviewImages: FC<PreviewImageProps> = ({
  onRemoveImages,
  fileImages,
  images,
}) => {
  const imageResults = useMemo(() => {
    if (fileImages) {
      return fileImages.map((image) => URL.createObjectURL(image));
    }
  }, [fileImages, images]);

  return (
    <div className='flex gap-4'>
      {imageResults?.map(()=>{})}
    </div>
  );
};

export default PreviewImages;
