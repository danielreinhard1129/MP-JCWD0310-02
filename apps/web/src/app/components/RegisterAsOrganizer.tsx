import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const RegisterAsOrganizer = () => {
  return (
    <main>
      <div className="text-center items-center justify-center mx-auto my-10">
        <h1>
          "Transform events into extraordinary adventures with Tunetix! Join our
          team of organizers and set the stage for unforgettable moments."
        </h1>
        <br />
        <Button className="mx-auto">
          <Link href="/organizer-register">Join us as Organizer</Link>
        </Button>
      </div>
    </main>
  );
};

export default RegisterAsOrganizer;
