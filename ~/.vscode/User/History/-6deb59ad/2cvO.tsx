'use client';

import { appConfig } from '@/utils/config';
import Image from 'next/image';
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
    <div className="flex gap-4">
      {imageResults?.map((image, index) => {
        return (
          <div
            key={index}
            className="relative h-[200px] w-[300px] rounded-md border"
          >
            <Image
              src={images ? `${appConfig.baseUrl}/${image}` : image}
              alt="thumbnail"
              objectFit="containt"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PreviewImages;
