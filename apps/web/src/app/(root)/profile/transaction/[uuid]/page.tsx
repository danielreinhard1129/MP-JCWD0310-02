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
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Copy } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Countdown from 'react-countdown';
import Link from 'next/link';
import Dropzone from '@/components/Dropzone';
import PreviewImages from '@/components/PreviewImages';
import { useGetTransactionDetail } from '@/app/hooks/api/user/useGetTransactionDetail';
import { format } from 'date-fns';
import { DialogAlert } from '@/components/Common/DialogAlert';
import usePostTransactionProof from '@/app/hooks/api/user/usePostTransactionProof';

const TransactionDetail = ({ params }: { params: { uuid: string } }) => {
  const user = useAppSelector((state) => state.user);
  const { data, isLoading } = useGetTransactionDetail(params.uuid);
  const { postTransactionProof } = usePostTransactionProof();
  const [proofImage, setProofImage] = useState<File[]>([]);
  const [alert, setAlert] = useState(false);
  const priceFormat = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  const handleSubmit = () => {
    if (data) {
      postTransactionProof(data.event.id, data.uuid, proofImage);
    }
  };

  const dropzoneRef: any = useRef();
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (data)
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
                  <CardDescription>
                    Date: {format(data.event.startDate, 'dd-MMMM-yyyy')}
                  </CardDescription>
                </div>

                <div className="ml-auto flex items-center gap-1">
                  <CardTitle className="text-lg">Cancel order in : </CardTitle>
                  <Countdown
                    className={cn(
                      `text-lg font-semibold text-card-foreground ${
                        new Date().valueOf() !== new Date().valueOf() + 86400000
                          ? ''
                          : 'text-red-500'
                      }`,
                    )}
                    date={new Date(data.createdAt).valueOf() + 86400000}
                  />
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 text-sm">
              <div className="grid gap-3">
                <Label className="text-lg">
                  Status Payment : {data.status}
                </Label>
                <div></div>
                <div className="font-semibold">Order Details</div>
                <ul className="grid gap-3">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      {data.event.title} x <span>{data.qty}</span>
                    </span>
                    <span>{priceFormat.format(data.total)}</span>
                  </li>
                </ul>

                <Separator className="my-2" />

                <ul className="grid gap-3">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Discount (
                      {data.transactionUserReward[0]
                        ? data.transactionUserReward[0].userReward.reward
                            .percentage
                        : 0}
                      %)
                    </span>
                    <span>
                      {priceFormat.format(
                        data.transactionUserReward[0]
                          ? data.transactionUserReward[0].userReward.reward
                              .percentage *
                              ((data.event.price / 100) * data.qty)
                          : 0,
                      )}
                    </span>
                  </li>

                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Points used</span>
                    <span>{priceFormat.format(data.pointUsed)}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{priceFormat.format(data.total)}</span>
                  </li>

                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground"></span>
                    <span>- {priceFormat.format(data.pointUsed)}</span>
                  </li>
                  <li className="flex items-center justify-between font-semibold">
                    <span className="text-muted-foreground">Total</span>
                    <span>{priceFormat.format(data.total)}</span>
                  </li>
                </ul>
              </div>

              <Separator className="my-4" />

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <div className="font-semibold">Event Address Information</div>
                  <address className="grid gap-0.5 not-italic text-muted-foreground">
                    <span>{data.event.location.address}</span>
                    <span>{data.event.location.city}</span>
                    <span>
                      {data.event.location.province} ,{' '}
                      {data.event.location.country}
                    </span>
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
                <div className="h-auto w-full">
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
                <Button
                  onClick={() => {
                    if (proofImage.length > 0) {
                      handleSubmit();
                    } else {
                      setAlert(true);
                    }
                  }}
                >
                  Submit Payment Proof
                </Button>
              </div>
            </CardContent>
          </Card>
          <DialogAlert
            title="No images found!"
            description="Please upload payment image proof before submit!"
            isOpen={alert}
            onClose={() => setAlert(false)}
          />
        </div>
      </>
    );
};

export default NeedAuthenticationGuard(TransactionDetail);
