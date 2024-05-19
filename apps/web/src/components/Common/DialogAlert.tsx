'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { AlertCircle } from 'lucide-react';
import { Label } from '../ui/label';

interface AlertModalProps {
  title: string;
  description: string;
  name?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const DialogAlert = ({
  title,
  description,
  name,
  isOpen,
  onClose,
}: AlertModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent >
        <DialogHeader className="flex flex-row justify-center items-center">
          <AlertCircle className='' height={20}/>
          <div className='h-full flex justify-center'>
            <Label className='font-bold text-lg'>{title}</Label>
          </div>
        </DialogHeader>
        <div className="flex items-center gap-x-2">
          <DialogDescription className='text-base font-normal text-black'>{description}</DialogDescription>
          <span className="text-lg font-bold text-green-500">{name}</span>
        </div>
        <div className="flex w-full items-center justify-end space-x-2 pt-6">
          <Button variant="destructive" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
