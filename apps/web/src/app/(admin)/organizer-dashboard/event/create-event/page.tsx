'use client';
import React from 'react';
import { Tabs, TabsContent} from '@/components/ui/tabs';
import CreateEvent from '@/components/PageComponent/CreateEvent';
import RoleGuard from '@/app/hoc/RoleGuard';

const CreateEventPage = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="flex flex-col">
              <div className="flex-1 space-y-4 md:p-8">
                <CreateEvent />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RoleGuard(CreateEventPage);
