'use client';
import { useAppSelector } from '@/app/redux/hook';
import {
  BadgeDollarSign,
  CalendarCheck2,
  LineChart,
  Ticket,
} from 'lucide-react';
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  Card,
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CalendarDateRangePicker } from '@/components/Dashboard/DateRangePicker';
import { Overview } from '@/components/Dashboard/Overview';
import { RecentEvent } from '@/components/Dashboard/RecentEvent';

const OrganizerDashboardPage = () => {
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
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between gap-4 space-y-2">
          <h2 className="md:text-3xl text-2xl font-bold tracking-tight">
            Dashboard
          </h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker className="" />
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="w-full md:w-auto">
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
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Ticket Revenue
                  </CardTitle>
                  <BadgeDollarSign />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Average Ticket Price
                  </CardTitle>
                  <LineChart />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$150,00</div>
                  <p className="text-xs text-muted-foreground">
                    +21% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Ticket Sold
                  </CardTitle>
                  <Ticket />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+1,000</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Events
                  </CardTitle>
                  <CalendarCheck2 />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">69</div>
                  <p className="text-xs text-muted-foreground">
                    5 events since this month
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Total Ticket Sold in This Month</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  {/* Chart Statistic */}
                  <Overview data={chartData} />
                </CardContent>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Transaction History */}
                  <RecentEvent />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default OrganizerDashboardPage;
