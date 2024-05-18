'use client';
import useGetEvents from '@/app/hooks/api/event/useGetEvents';
import { CalendarDateRangePicker } from '@/components/Dashboard/DateRangePicker';
import { Overview } from '@/components/Dashboard/Overview';
import { OverviewBar } from '@/components/Dashboard/OverviewBar';
import MonthPicker from '@/components/MonthPicker';
import { TransactionList } from '@/components/PageComponent/TransactionList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React, { useState } from 'react';

const DashboardTransactionPage = () => {
  const [month, setMonth] = useState(new Date());
  const { data, isLoading, meta } = useGetEvents({});
  const [analytics, setAnalytics] = useState(false);
  const transactionData = [
    {
      id: 1,
      event: 'DWP',
      amounts: '20000',
      quantity: '2',
      status: 'progress',
      user: 'muksal',
      date: new Date(),
    },
    {
      id: 2,
      event: 'DWP',
      amounts: '10000',
      quantity: '1',
      status: 'done',
      user: 'muksil',
      date: new Date(),
    },
    {
      id: 3,
      event: 'DWP',
      amounts: '10000',
      quantity: '1',
      status: 'failed',
      user: 'muklis',
      date: new Date(),
    },
    {
      id: 4,
      event: 'DWP',
      amounts: '10000',
      quantity: '1',
      status: 'failed',
      user: 'muklis',
      date: new Date(),
    },
    {
      id: 5,
      event: 'DWP',
      amounts: '10000',
      quantity: '1',
      status: 'failed',
      user: 'muklis',
      date: new Date(),
    },
    {
      id: 6,
      event: 'DWP',
      amounts: '10000',
      quantity: '1',
      status: 'failed',
      user: 'muklis',
      date: new Date(),
    },
    {
      id: 7,
      event: 'DWP',
      amounts: '10000',
      quantity: '1',
      status: 'failed',
      user: 'muklis',
      date: new Date(),
    },
    {
      id: 8,
      event: 'DWP',
      amounts: '10000',
      quantity: '1',
      status: 'failed',
      user: 'muklis',
      date: new Date(),
    },
    {
      id: 9,
      event: 'DWP',
      amounts: '10000',
      quantity: '1',
      status: 'failed',
      user: 'muklis',
      date: new Date(),
    },
    {
      id: 10,
      event: 'DWP',
      amounts: '10000',
      quantity: '1',
      status: 'failed',
      user: 'muklis',
      date: new Date(),
    },
    {
      id: 11,
      event: 'DWP',
      amounts: '10000',
      quantity: '1',
      status: 'failed',
      user: 'muklis',
      date: new Date(),
    },
    {
      id: 12,
      event: 'DWP',
      amounts: '10000',
      quantity: '1',
      status: 'failed',
      user: 'muklis',
      date: new Date(),
    },
  ];
  const chartData = [
    {
      name: 'jan',
      data: [
        { title: 'Ticket Sales', name: 'sales', value: 12 },
        {
          title: 'Attendance',
          name: 'attendance',
          value: 10,
        },
      ],
    },
    {
      name: 'feb',
      data: [
        { title: 'Ticket Sales', name: 'sales', value: 16 },
        {
          title: 'Attendance',
          name: 'attendance',
          value: 12,
        },
      ],
    },
    {
      name: 'mar',
      data: [
        { title: 'Ticket Sales', name: 'sales', value: 33 },
        {
          title: 'Attendance',
          name: 'attendance',
          value: 28,
        },
      ],
    },
    {
      name: 'apr',
      data: [
        { title: 'Ticket Sales', name: 'sales', value: 18 },
        {
          title: 'Attendance',
          name: 'attendance',
          value: 15,
        },
      ],
    },
  ];
  const barData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="flex h-full flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Transaction History
            </h2>
            <div className="flex items-center space-x-2">
              <MonthPicker
                currentMonth={month}
                onMonthChange={(e) => {
                  setMonth(e);
                }}
              />
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="flex flex-col">
                <div className="flex-1 space-y-4 md:p-8">
                  <TransactionList data={transactionData} />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="analytics">
              <Card>
                <CardHeader></CardHeader>
                <CardContent className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4 w-full">
                    <CardTitle>Analytic chart overall transaction</CardTitle>
                    <Overview data={chartData} />
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <CardTitle>
                      Events attendance based on ticket type{' '}
                    </CardTitle>
                    <OverviewBar data={barData} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default DashboardTransactionPage;
