'use client';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import useGetUserVoucher from '@/app/hooks/api/user/useGetUserVoucher';
import useGetEvent from '@/app/hooks/api/event/useGetEvent';
import SkeletonBlogDetail from '@/app/(root)/event/[id]/components/SkeletonEventDetail';
import { notFound } from 'next/navigation';
import { Card, CardContent } from './ui/card';
import { ShoppingCart } from 'lucide-react';
import { Separator } from './ui/separator';
import { Event } from '@/app/types/event.type';
import { useCreateTransactionEvent } from '@/app/hooks/api/user/useTransactionEvent';
import { useAppSelector } from '@/app/redux/hook';

const CheckoutDialog = ({ eventData }: { eventData: Event }) => {
  const { userId } = useAppSelector((state) => state.user);
  const { data } = useGetUserVoucher();
  const { event, isLoading } = useGetEvent(Number(1));
  const [qty, setQty] = useState<number>(0);
  const [seats, setSeats] = useState<number>(25);
  const { createTransactionEvent } = useCreateTransactionEvent();
  const [voucher, setVoucher] = useState<number>(0);
  const priceFormat = new Intl.NumberFormat('id-ID', {
    currency: 'IDR',
    style: 'currency',
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4">
        <SkeletonBlogDetail />
      </div>
    );
  }

  const handleSubmit = () => {
    const data = {
      eventId: eventData.id,
      qty: 1,
      total: 1,
      uuid: '9966',
      userId: 1,
      paymentProof: '',
      voucherId: 1,
    };
    const result = createTransactionEvent(data);
  };

  if (!event) {
    return notFound();
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Checkout</Button>
        </DialogTrigger>
        <DialogContent className="max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Checkout</DialogTitle>
            <DialogDescription>
              Enter your payment details to complete the purchase.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Label htmlFor="name">Available Seats : {eventData.limit}</Label>
            <Separator />
            <div className="flex justify-between flex-row items-center">
              <Label htmlFor="name">
                Early Bids : {qty} x {priceFormat.format(eventData.price)}
              </Label>
              <div className="flex gap-4">
                <Button
                  onClick={() => {
                    if (qty > 0) {
                      setQty(qty - 1);
                      setSeats(seats + 1);
                    }
                  }}
                >
                  -
                </Button>
                <Button
                  onClick={() => {
                    if (qty >= 0 && seats > 0) {
                      setQty(qty + 1);
                      setSeats(seats - 1);
                    }
                  }}
                >
                  +
                </Button>
              </div>
            </div>
            <div>
              <Dialog>
                <DialogTrigger className="w-full">
                  <Button className="w-full">Use Voucher</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Your Voucher List</DialogTitle>
                  </DialogHeader>
                  {data?.data.map((val) => {
                    return val.userVoucher.map((value) => {
                      return (
                        <div onClick={() => setVoucher(value.voucherId)}>
                          <Button className="w-full flex justify-between h-20">
                            <Label className="flex flex-row items-center gap-2">
                              Discount : {value.voucher.nominal}%
                            </Label>
                            <Label>
                              Max Usage :{' '}
                              {priceFormat.format(value.voucher.limit)}
                            </Label>
                            <Label>Code : {value.voucher.code}</Label>
                          </Button>
                        </div>
                      );
                    });
                  })}
                  <DialogFooter>
                    <DialogClose>
                      <Button>Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <Card>
            <CardContent className="flex justify-center p-4">
              <div>
                <Label className="text-xl">
                  Total Price : {priceFormat.format(eventData.price * qty)}
                </Label>
              </div>
            </CardContent>
          </Card>
          <DialogFooter className="gap-2">
            <DialogClose>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <DialogTrigger asChild>
              <Button
                onClick={handleSubmit}
                className="flex flex-row gap-2"
                type="submit"
              >
                <ShoppingCart height={20} />
                CheckOut
              </Button>
            </DialogTrigger>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CheckoutDialog;
