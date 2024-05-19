'use client';
import React from 'react';
import useGetEvents from '@/app/hooks/api/event/useGetEvents';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { EventList } from '@/components/PageComponent/EventList';
import RoleGuard from '@/app/hoc/RoleGuard';

const ManageEventPage = () => {
  const { data } = useGetEvents({});
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="flex flex-col">
              <div className="flex-1 space-y-4 md:p-8">
                <EventList data={data} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RoleGuard(ManageEventPage);
