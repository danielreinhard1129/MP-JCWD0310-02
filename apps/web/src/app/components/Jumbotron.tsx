import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Autocomplete from '@/components/Autocomplete';

const Jumbotron = () => {
  return (
    <div className="relative h-[150vh]">
      <div className="-z-10 w-full h-full absolute">
        <Image
          src="https://drive.google.com/uc?export=view&id=1RO8fFT5FrM9kHa4ur4akGOQ4rnLVAGSU"
          alt=""
          width={1000}
          height={1000}
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="grid grid-cols-1">
        <div className="items-center justify-center text-center mx-10 my-60 ">
          <Card className="bg-indigo-950 bg-opacity-50 border-none text-yellow-300">
            <CardHeader>
              <CardTitle>Welcome to TuneTix!</CardTitle>
              <br />
              <CardDescription className='text-yellow-300'>
                TuneTix is your go-to platform for seamless ticket
                purchases to the most anticipated concerts nationwide.
              </CardDescription>
              <CardDescription className='text-yellow-300'>
                So why wait? Join the thousands of music lovers who trust
                TuneTix to fuel their passion for live music. Don't miss out on the concert of a lifetime – start
                your journey with TuneTix today!
              </CardDescription>
              <br/>
              <Autocomplete/>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
