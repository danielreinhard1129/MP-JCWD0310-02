'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Check, Pencil, Trash2, X } from 'lucide-react';
import { AlertModal } from '@/components/Common/AlertModal';
import { Event } from '@/app/types/event.type';
import useDeleteEvent from '@/app/hooks/api/event/useDeleteEvent';

interface CellActionProps {
  data: Event;
}

export function CellActionApproval({ data }: CellActionProps) {
  const router = useRouter();
  const { deleteEvent } = useDeleteEvent();
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [progress, setProgress] = useState(false);
  const handleDeleteAction = (id: number) => {
    setProgress(true);
    deleteEvent(1, 1)
      .then(() => {
        toast.success('Success delete event');
      })
      .catch((err) => {
        toast.error('Something error while delete event');
      })
      .finally(() => {
        setProgress(false);
      });
  };

  return (
    <div className="flex justify-center space-x-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
              onClick={() => {
                router.push(
                  `/organizer-dashboard/event/manage-event/${data.id}`,
                );
              }}
            >
              <Check className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Approve Users</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
              onClick={() => {
                setAlertModalOpen(true);
              }}
            >
              <X className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Discard Users</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertModal
        title="Are you sure to do this action?"
        description="This action cannot be undone."
        name={data.title}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDeleteAction(data.id)}
        loading={progress}
      />
    </div>
  );
}
