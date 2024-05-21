'use client';
import React, { useEffect, useRef, useState } from 'react';
import { NeedAuthenticationGuard } from '../../../../hoc/AuthGuard';
import { useAppSelector } from '../../../../redux/hook';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  MoreVertical,
  Truck,
} from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Countdown from 'react-countdown';
import Link from 'next/link';
import Dropzone from '@/components/Dropzone';
import PreviewImages from '@/components/PreviewImages';

const TransactionDetail = ({ params }: { params: { uuid: string } }) => {
  const user = useAppSelector((state) => state.user);
  const [proofImage, setProofImage] = useState<File[]>([]);
  const dropzoneRef: any = useRef();
  return (
    <>
      <div className="py-8 px-8 flex flex-col gap-4">
        <Link href={'/profile'}>
          <Button>Back to profile</Button>
        </Link>
        <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="flex flex-row w-full items-start justify-between">
              <div className="grid gap-0.5">
                <CardTitle className="group flex items-center gap-2 text-lg">
                  Order {params.uuid}
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <Copy className="h-3 w-3" />
                    <span className="sr-only">Copy Order ID</span>
                  </Button>
                </CardTitle>
                <CardDescription>Date: November 23, 2023</CardDescription>
              </div>

              <div className="ml-auto flex items-center gap-1">
                <CardTitle className="text-lg">Cancel order in : </CardTitle>
                <Countdown
                  className={cn('text-lg font-semibold text-card-foreground')}
                  date={Date.now() + 5555555}
                />
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <Label className="text-lg">Status Payment : Pending</Label>
              <div></div>
              <div className="font-semibold">Order Details</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Dwp Jogjakarta tickets x <span>2</span>
                  </span>
                  <span>$50.00</span>
                </li>
              </ul>

              <Separator className="my-2" />

              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Discount</span>
                  <span>$5.00</span>
                </li>

                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Points used</span>
                  <span>$25.00</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>$100.00</span>
                </li>

                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground"></span>
                  <span>- $30.00</span>
                </li>
                <li className="flex items-center justify-between font-semibold">
                  <span className="text-muted-foreground">Total</span>
                  <span>$70.00</span>
                </li>
              </ul>
            </div>

            <Separator className="my-4" />

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-3">
                <div className="font-semibold">Event Address Information</div>
                <address className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>Jln.Pakualaman</span>
                  <span>Sleman</span>
                  <span>Jogjakarta , Indonesia`</span>
                </address>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="grid gap-3">
              <div className="font-semibold">Customer Information</div>
              <dl className="grid gap-3">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Customer</dt>
                  <dd>
                    {user.firstName} {user.lastName}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Email</dt>
                  <dd>
                    <a href="mailto:">{user.email}</a>
                  </dd>
                </div>
              </dl>
            </div>
            <Separator className="my-4" />
            <div className="flex flex-col justify-center gap-4">
              <div className='h-auto w-full'>
                <PreviewImages
                  onRemoveImage={(idx: number) => {
                    setProofImage([]);
                    // onChangeField(
                    //   'thumbnail',
                    //   values.thumbnail?.toSpliced(idx, 1),
                    // )
                  }}
                  fileImages={proofImage}
                />
              </div>
              <div className="hidden">
                <Dropzone
                  Ref={dropzoneRef}
                  isError={false}
                  label=""
                  onDrop={(files) => {
                    setProofImage(files);
                    //   setProfileImage(files);
                    //   onChangeField('thumbnail', [...files.map((file) => file)]);
                  }}
                />
              </div>
              <Button onClick={() => dropzoneRef.current.click()}>
                Choose Payment Proof Image
              </Button>
              <Button>Submit Payment Proof</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default NeedAuthenticationGuard(TransactionDetail);
