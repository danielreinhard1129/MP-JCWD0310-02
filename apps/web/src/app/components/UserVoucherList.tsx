'use client';
import { Tabs } from '@/components/ui/tabs';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Clipboard } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { format } from 'date-fns';
import useGetUserVoucher from '../hooks/api/user/useGetUserVoucher';

const UserVoucherList = () => {
  const { data, isLoading } = useGetUserVoucher();
  const [copy, setCopy] = useState(false);
  const dataTable = () => {
    if (!isLoading && data) {
      const userVOucher = data.data.map((val) => {
        return val.userVoucher.map((value) => {
          return (
            <TableRow>
              <TableCell>
                <Image
                  src={'/coupon.png'}
                  alt="coupon"
                  width={100}
                  height={100}
                />
              </TableCell>
              <TableCell>
                <Label>{!value.isUsed ? 'No Used' : 'Used'}</Label>
              </TableCell>
              <TableCell>
                <Label>{format(value.voucher.endDate, 'dd-MM-yyyy')}</Label>
              </TableCell>
              <TableCell>
                <Label>{value.voucher.nominal}% off in all transaction</Label>
              </TableCell>
              <TableCell>
                <Card className="flex shadow-none flex-row justify-around border-0 items-center gap-4">
                  <Label>{value.voucher.code}</Label>
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(value.voucher.code);
                    }}
                    className="flex flex-row gap-1 p-4 h-2"
                  >
                    <Clipboard width={15} />
                    Copy
                  </Button>
                </Card>
              </TableCell>
            </TableRow>
          );
        });
      });
      const userReward = data.data.map((val, indx) => {
        return val.userReward.map((valueReward) => {
          return (
            <TableRow>
              <TableCell>
                <Image
                  src={'/coupon.png'}
                  alt="coupon"
                  width={100}
                  height={100}
                />
              </TableCell>
              <TableCell>
                <Label>
                  {val.userReward[indx].isUsed ? 'Used' : 'Not used'}
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  {format(valueReward.reward.endDate, 'dd-MM-yyyy')}
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  {valueReward.reward.percentage}% off in all transaction
                </Label>
              </TableCell>
              <TableCell>
                <Card className="flex shadow-none flex-row justify-around border-0 items-center gap-4">
                  <Label>No code for this voucher</Label>
                  {/* <Button
                    onClick={() => {
                      navigator.clipboard.writeText('TampanKu');
                    }}
                    className="flex flex-row gap-1 p-4 h-2"
                  >
                    <Clipboard width={15} />
                    Copy
                  </Button> */}
                </Card>
              </TableCell>
            </TableRow>
          );
        });
      });
      return (
        <>
          {userReward}
          {userVOucher}
        </>
      );
    }
  };

  return (
    <Tabs className="flex flex-col gap-4">
      <Table>
        <TableCaption>Your voucher list.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Event</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Expired date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Voucher Code</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{dataTable()}</TableBody>
      </Table>
      {isLoading && (
        <div className="mt-8 flex flex-row justify-center">
          <Label className="text-3xl">Loading...</Label>
        </div>
      )}
      {!isLoading && !data ? (
        <div className="mt-8 flex flex-row justify-center">
          <Label className="text-3xl">No data found!</Label>
        </div>
      ) : (
        ''
      )}
    </Tabs>
  );
};

export default UserVoucherList;
