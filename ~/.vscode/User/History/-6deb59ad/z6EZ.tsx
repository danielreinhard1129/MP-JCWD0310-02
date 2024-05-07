'use client';

import { appConfig } from '@/utils/config';
import Image from 'next/image';
import { FC, useMemo } from 'react';
import { Button } from './button';
import { Trash2 } from 'lucide-react';

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
            <Button><Trash2 className='h-6 w-6'/></Button>
          </div>
        );
      })}
    </div>
  );
};

export default PreviewImages;
