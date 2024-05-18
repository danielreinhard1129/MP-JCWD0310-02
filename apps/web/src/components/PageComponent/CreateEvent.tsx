import React from 'react'
import { Heading } from '../Common/Heading';
import { Separator } from '../ui/separator';
import { useRouter } from 'next/navigation';
import CreateEventForm from '../Dashboard/CreateEventForm';

const CreateEvent = () => {
    const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Create Event"
          description="People are waiting for your events!"
        />
      </div>
      <Separator />
      <div>
        <CreateEventForm/>
      </div>
    </>
  )
}

export default CreateEvent