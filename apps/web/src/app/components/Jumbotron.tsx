import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from "@/components/ui/button"

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
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="items-center justify-center text-center mx-10 my-24 ">
          <Card className="bg-indigo-950 bg-opacity-50 border-none text-yellow-300">
            <CardHeader>
              <CardTitle>Welcome to TuneTix!</CardTitle>
              <br />
              <CardDescription className='text-white'>
                Your ultimate destination for securing the hottest concert
                tickets with ease! At TuneTix, we understand the electric thrill
                of live music and the urgency of securing those coveted tickets.
                Whether you're a die-hard fan or seeking an unforgettable night
                out, TuneTix is your go-to platform for seamless ticket
                purchases to the most anticipated concerts nationwide.
              </CardDescription>
                <br />
              <CardDescription className='text-white'>
                So why wait? Join the thousands of music lovers who trust
                TuneTix to fuel their passion for live music. Whether you're
                into rock, pop, hip-hop, or indie, TuneTix has something for
                everyone. Don't miss out on the concert of a lifetime – start
                your journey with TuneTix today!
              </CardDescription>
              <br/>
              <Button className='mx-auto text-yellow-300'>See Events</Button>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
