'use client';
import useGetEvent from '@/app/hooks/api/event/useGetEvent';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import {
  BarChartHorizontal,
  Calendar,
  Clock,
  LocateIcon,
  Star,
  Ticket,
  User,
  Wallet,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ManageEventDetailPage = ({ params }: { params: { id: string } }) => {
  const { event, isLoading, refetch } = useGetEvent(Number(params.id));

  if (isLoading) return <div>Loading...</div>;
  else if (!isLoading && !event) return <div>No data available!!</div>;
  else if (!isLoading && event?.id) {
    return (
      <main className="flex flex-col justify-center items-center gap-4">
        <div className="w-full bg-indigo-950 text-center rounded-2xl p-4">
          <p className="font-extrabold text-2xl text-[#ffff00]">Title DWP</p>
        </div>

        <div className="grid grid-cols-6 grid-rows-6 w-full gap-2 min-h-[80vh] max-h-[100vh]">
          <div className="flex flex-col w-full rounded-2xl p-2 gap-4 col-span-4 row-span-4 overflow-hidden bg-indigo-950">
            <Image
              className="bg-red-200 object-cover w-full h-[65%] rounded-xl border-[#ffff00] border-4"
              src={'/eventDwp.jpg'}
              alt="Event Images"
              width={100}
              height={100}
            />

            <div className="grid text-[#ffff00] grid-cols-3 justify-between pt-4 px-4 gap-4">
              <div className="flex flex-col gap-4 text-center">
                <p className="font-extrabold">Category</p>
                {/* <p>{event.category}</p> */}
                <p className="font-medium">Party</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <p className="font-extrabold">Time and date</p>
                <div className="flex flex-row gap-4 items-center">
                  <Calendar />
                  <p className="font-medium">
                    {format(event.startDate, 'yyyy.MM.dd')} -{' '}
                    <p>{format(event.endDate, 'yyyy.MM.dd')}</p>
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <Clock />
                  <p className="font-medium">{event.time}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <p className="font-extrabold">Location</p>
                <div className="flex gap-4">
                  <LocateIcon />
                  <p className="font-medium">{event.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-4 gap-4 w-full col-span-2 row-span-6 rounded-2xl">
            <div className="bg-indigo-950 w-full py-[7%] flex flex-row rounded-2xl">
              <div className="flex w-[40%] border-r-2 px-5 justify-center items-center border-slate-200">
                <Wallet className="text-[#ffff00] h-14 w-14" />
              </div>

              <div className="grid grid-rows-2 gap-4 px-4 py-4 text-[#ffff00] w-full">
                <div className="flex flex-col justify-end">
                  <p className="font-bold text-xl">Pendapatan</p>
                </div>
                <p className="text-xl font-medium">Rp. 5.425.000</p>
              </div>
            </div>

            <div className="bg-indigo-950 w-full py-[7%] flex flex-row rounded-2xl">
              <div className="flex w-[40%] border-r-2 px-5 justify-center items-center border-slate-200">
                <Ticket className="text-[#ffff00] h-14 w-14" />
              </div>

              <div className="grid grid-rows-2 gap-4 px-4 py-4 text-[#ffff00] w-full">
                <div className="flex flex-col justify-end">
                  <p className="font-bold text-xl">Tiket terjual</p>
                </div>
                <p className="text-xl font-medium">5/20</p>
              </div>
            </div>

            <div className="bg-indigo-950 w-full py-[7%] flex flex-row rounded-2xl">
              <div className="flex w-[40%] border-r-2 px-5 justify-center items-center border-slate-200">
                <BarChartHorizontal className="text-[#ffff00] h-14 w-14" />
              </div>

              <div className="grid grid-rows-2 gap-4 px-4 py-4 text-[#ffff00] w-full">
                <div className="flex flex-col justify-end">
                  <p className="font-bold text-xl">Transaksi berhasil</p>
                </div>
                <p className="text-xl font-medium">4</p>
              </div>
            </div>

            <div className="bg-indigo-950 w-full py-[7%] flex flex-row rounded-2xl">
              <div className="flex w-[40%] border-r-2 px-5 justify-center items-center border-slate-200">
                <User className="text-[#ffff00] h-14 w-14" />
              </div>

              <div className="grid grid-rows-2 gap-4 px-4 py-4 text-[#ffff00] w-full">
                <div className="flex flex-col justify-end">
                  <p className="font-bold text-xl">Pengunjung</p>
                </div>
                <p className="text-xl font-medium">0/4</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-950 rounded-2xl flex flex-col overflow-scroll col-span-4 p-4 gap-4 row-span-2">
            <div className="text-xl flex justify-center items-center font-bold text-[#ffff00]">
              <h1>User Review</h1>
            </div>

            <div className="w-full grid text-[#ffff00] grid-flow-row grid-cols-10 gap-2 rounded-xl">
              <div className="col-span-1">
                <p>User</p>
              </div>

              <div className="col-span-6">
                <p>Message : Mantap eventnya</p>
              </div>

              <div className="flex flex-row col-span-3">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>

            <div className="w-full grid text-[#ffff00] grid-flow-row grid-cols-10 gap-2 rounded-xl">
              <div className="col-span-1">
                <p>User</p>
              </div>

              <div className="col-span-6">
                <p>Message : Mantap eventnya</p>
              </div>

              <div className="flex flex-row col-span-3">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>

            <div className="w-full grid text-[#ffff00] grid-flow-row grid-cols-10 gap-2 rounded-xl">
              <div className="col-span-1">
                <p>User</p>
              </div>

              <div className="col-span-6">
                <p>Message : Mantap eventnya</p>
              </div>

              <div className="flex flex-row col-span-3">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>

            <div className="w-full grid text-[#ffff00] grid-flow-row grid-cols-10 gap-2 rounded-xl">
              <div className="col-span-1">
                <p>User</p>
              </div>

              <div className="col-span-6">
                <p>Message : Mantap eventnya</p>
              </div>

              <div className="flex flex-row col-span-3">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>

            <div className="w-full grid text-[#ffff00] grid-flow-row grid-cols-10 gap-2 rounded-xl">
              <div className="col-span-1">
                <p>User</p>
              </div>

              <div className="col-span-6">
                <p>Message : Mantap eventnya</p>
              </div>

              <div className="flex flex-row col-span-3">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>

            <div className="w-full grid text-[#ffff00] grid-flow-row grid-cols-10 gap-2 rounded-xl">
              <div className="col-span-1">
                <p>User</p>
              </div>

              <div className="col-span-6">
                <p>Message : Mantap eventnya</p>
              </div>

              <div className="flex flex-row col-span-3">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>

            <div className="w-full grid text-[#ffff00] grid-flow-row grid-cols-10 gap-2 rounded-xl">
              <div className="col-span-1">
                <p>User</p>
              </div>

              <div className="col-span-6">
                <p>Message : Mantap eventnya</p>
              </div>

              <div className="flex flex-row col-span-3">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>

            <div className="w-full grid text-[#ffff00] grid-flow-row grid-cols-10 gap-2 rounded-xl">
              <div className="col-span-1">
                <p>User</p>
              </div>

              <div className="col-span-6">
                <p>Message : Mantap eventnya</p>
              </div>

              <div className="flex flex-row col-span-3">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>

            <div className="w-full grid text-[#ffff00] grid-flow-row grid-cols-10 gap-2 rounded-xl">
              <div className="col-span-1">
                <p>User</p>
              </div>

              <div className="col-span-6">
                <p>Message : Mantap eventnya</p>
              </div>

              <div className="flex flex-row col-span-3">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>

            <div className="w-full grid text-[#ffff00] grid-flow-row grid-cols-10 gap-2 rounded-xl">
              <div className="col-span-1">
                <p>User</p>
              </div>

              <div className="col-span-6">
                <p>Message : Mantap eventnya</p>
              </div>

              <div className="flex flex-row col-span-3">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>

            <div className="w-full grid text-[#ffff00] grid-flow-row grid-cols-10 gap-2 rounded-xl">
              <div className="col-span-1">
                <p>User</p>
              </div>

              <div className="col-span-6">
                <p>Message : Mantap eventnya</p>
              </div>

              <div className="flex flex-row col-span-3">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center rounded-2xl w-full bg-indigo-950 p-4">
          <h1 className="font-extrabold text-2xl text-[#ffff00]">
            {' '}
            User Registration Approval{' '}
          </h1>
        </div>

        <div className="rounded-2xl p-6 bg-indigo-950 text-[#ffff00] flex flex-col gap-4 w-full">
          {/*  */}
          <div className="w-full h-24 bg-[#fbfbf8] rounded-2xl p-2 overflow-hidden">
            <div className="grid grid-cols-4 w-full h-full">
              <div className="flex flex-col justify-center items-center text-left bg-indigo-950 rounded-l-xl col-span-1 h-full">
                <div className=" text-left">
                  <p>ID User : 1</p>
                  <p>Nama : Muksal Mina</p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-2 text-left bg-indigo-950 rounded-r-xl col-span-3 h-full px-2">
                <div className="w-full">
                  <div></div>
                </div>
                <Button className="bg-indigo-950 text-[#ffff00] border-[#ffff00] border">
                  Approve
                </Button>
                <Button className="bg-indigo-950 text-[#ffff00] border-[#ffff00] border">
                  Discard
                </Button>
              </div>
            </div>
          </div>
          {/*  */}

          {/*  */}
          <div className="w-full h-24 bg-[#fbfbf8] rounded-2xl p-2 overflow-hidden">
            <div className="grid grid-cols-4 w-full h-full">
              <div className="flex flex-col justify-center items-center text-left bg-indigo-950 rounded-l-xl col-span-1 h-full">
                <div className=" text-left">
                  <p>ID User : 1</p>
                  <p>Nama : Muksal Mina</p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-2 text-left bg-indigo-950 rounded-r-xl col-span-3 h-full px-2">
                <div className="w-full">
                  <div></div>
                </div>
                <Button className="bg-indigo-950 text-[#ffff00] border-[#ffff00] border">
                  Approve
                </Button>
                <Button className="bg-indigo-950 text-[#ffff00] border-[#ffff00] border">
                  Discard
                </Button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </main>
    );
  }
};

export default ManageEventDetailPage;
