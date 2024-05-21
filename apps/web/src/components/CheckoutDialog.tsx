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
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import useGetUserVoucher from '@/app/hooks/api/user/useGetUserVoucher';
import useGetEvent from '@/app/hooks/api/event/useGetEvent';
import SkeletonBlogDetail from '@/app/(root)/event/[id]/components/SkeletonEventDetail';
import { notFound, useRouter } from 'next/navigation';
import { Card, CardContent } from './ui/card';
import { ShoppingCart } from 'lucide-react';
import { Separator } from './ui/separator';
import { Event } from '@/app/types/event.type';
import { useCreateTransactionEvent } from '@/app/hooks/api/user/useTransactionEvent';
import { useAppSelector } from '@/app/redux/hook';
import { Switch } from './ui/switch';

const CheckoutDialog = ({ eventData }: { eventData: Event }) => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
  const { data } = useGetUserVoucher();
  const { event, isLoading } = useGetEvent(Number(1));
  const [qty, setQty] = useState<number>(1);
  const [seats, setSeats] = useState<number>(0);
  const { createTransactionEvent } = useCreateTransactionEvent();
  const [voucher, setVoucher] = useState<number | null>(0);
  const [reward, setReward] = useState<number | null>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [usePoint, setUsePoint] = useState(false);
  const priceFormat = new Intl.NumberFormat('id-ID', {
    currency: 'IDR',
    style: 'currency',
  });

  useEffect(() => {
    setSeats(eventData.limit - qty - eventData.booked);
  }, []);

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
      qty: qty,
      userId: user.userId,
      voucherId: voucher,
      rewardId: reward,
    };
    createTransactionEvent(data).then((res)=>{
      router.push(`/profile/transaction/${res.data}`)
    })
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
            <Label htmlFor="name">Available Seats : {seats}</Label>
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
                    return val.userReward.map((value) => {
                      return (
                        <DialogTrigger>
                          <div
                            onClick={() => {
                              setReward(value.rewardId);
                              setVoucher(null);
                              setPercentage(value.reward.percentage);
                            }}
                          >
                            <Button className="w-full flex justify-between h-20">
                              <Label className="flex flex-row items-center gap-2">
                                Reward off : {value.reward.percentage}%
                              </Label>
                              <Label>
                                Max Usage :{' '}
                                {priceFormat.format(
                                  Number(value.reward.max_nominal),
                                )}
                              </Label>
                            </Button>
                          </div>
                        </DialogTrigger>
                      );
                    });
                  })}
                  {data?.data.map((val) => {
                    return val.userVoucher.map((value) => {
                      return (
                        <DialogTrigger>
                          <div
                            onClick={() => {
                              setVoucher(value.voucherId);
                              setReward(null);
                              setPercentage(value.voucher.nominal);
                            }}
                          >
                            <Button className="w-full flex justify-between h-20">
                              <Label className="flex flex-row items-center gap-2">
                                Voucher off : {value.voucher.nominal}%
                              </Label>
                              <Label>
                                Max Usage :{' '}
                                {priceFormat.format(value.voucher.limit)}
                              </Label>
                              <Label>Code : {value.voucher.code}</Label>
                            </Button>
                          </div>
                        </DialogTrigger>
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
          <div className="flex flex-col">
            <Label className="text-base">
              Your Points : {priceFormat.format(user.points)}
            </Label>
            <div className="flex flex-row items-center gap-2">
              <Switch
                checked={usePoint}
                onClick={() => setUsePoint(!usePoint)}
              />{' '}
              <Label>Use your points.</Label>
            </div>
          </div>
          <Card>
            <CardContent className="flex p-4">
              <div className="flex flex-col">
                <Label className="text-xl">
                  Total Price :{' '}
                  {priceFormat.format(
                    usePoint
                      ? user.points > eventData.price * qty
                        ? 0
                        : eventData.price * qty - user.points
                      : eventData.price * qty,
                  )}
                </Label>
                <Label className="min-h-[14px]">
                  {voucher || reward
                    ? `Discount :${priceFormat.format(
                        ((eventData.price * qty) / 100) * percentage,
                      )}`
                    : ''}
                </Label>
                <Label className="min-h-[14px]">
                  {usePoint
                    ? `
                    Point used :
                    ${priceFormat.format(
                      user.points < eventData.price
                        ? user.points
                        : user.points - eventData.price * qty < 0
                          ? user.points
                          : user.points - eventData.price * qty,
                    )}
                    `
                    : ''}
                </Label>
              </div>
            </CardContent>
          </Card>
          <DialogFooter className="gap-2">
            <DialogClose>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <DialogTrigger onClick={() => handleSubmit()} asChild>
              <Button className="flex flex-row gap-2">
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
