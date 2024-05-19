'use client';
import RoleGuard from '@/app/hoc/RoleGuard';
import useGetEvent from '@/app/hooks/api/event/useGetEvent';
import EventDetailManage from '@/components/PageComponent/EventDetailManage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import React, { Suspense } from 'react';

const ManageEventDetailPage = ({ params }: { params: { id: string } }) => {
  const { event, isLoading, refetch } = useGetEvent(Number(params.id));
  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-128px)] w-full flex justify-center items-center">
        <Progress value={99} className="w-[40%] transition-all duration-300" />
      </div>
    );
  }
  if (!event) {
    return (
      <div className="min-h-[calc(100vh-128px)] w-full flex justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle>Oo00oooPpps......</CardTitle>
          </CardHeader>
          <CardContent><Label>We cannot find the events...</Label></CardContent>
        </Card>
      </div>
    );
  }
  if (event) {
    return (
      <div className="flex h-full flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsContent value="overview" className="space-y-4">
              <div className="flex flex-col">
                <div className="flex-1 space-y-4 md:p-8">
                  <EventDetailManage eventData={event} />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }
};

export default RoleGuard(ManageEventDetailPage);
