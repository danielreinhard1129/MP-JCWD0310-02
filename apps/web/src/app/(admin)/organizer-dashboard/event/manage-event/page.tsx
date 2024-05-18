'use client';
import React from 'react';
import useGetEvents from '@/app/hooks/api/event/useGetEvents';
import { Tabs, TabsContent} from '@/components/ui/tabs';
import { EventList } from '@/components/PageComponent/EventList';
import { TransactionList } from '@/components/PageComponent/TransactionList';

const ManageEventPage = () => {
  const { data, isLoading, meta } = useGetEvents({});
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Manage Your Events</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
          </div>
        </div> */}
        <Tabs defaultValue="overview" className="space-y-4">
          {/* <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Notifications
            </TabsTrigger>
          </TabsList> */}
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

export default ManageEventPage;
