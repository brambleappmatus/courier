'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Overview } from '@/components/dashboard/overview';
import { DeliveryStatus } from '@/components/dashboard/delivery-status';
import { CourierPerformance } from '@/components/dashboard/courier-performance';

export function DashboardContent() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Deliveries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">+0.3 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">On-Time Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.2%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Delivery Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Delivery Status</CardTitle>
          </CardHeader>
          <CardContent>
            <DeliveryStatus />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Courier Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <CourierPerformance />
        </CardContent>
      </Card>
    </div>
  );
}