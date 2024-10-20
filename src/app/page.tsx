'use client';
import {
  ethekwini,
  jozi,
  mbombela,
  polokwane,
  port_elizabeth,
  sun_city,
  delivery_lady,
  cape_Town,
  card_driver,
  card_business_owner,
  card_verification,
  fingerprint,
} from "@/assets/cities";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button } from "@/components/ui/button";

export default function Home() {
   // image slides.
   const slides = [
    {
      url: ethekwini,
      alt: "Durban"
    },
    {
      url: jozi,
      alt: "Johannesburg"
    },
    {
      url: mbombela,
      alt: "Mbombela"
    },
    {
      url: polokwane,
      alt: "Polokwane"
    },
    {
      url: port_elizabeth,
      alt: "Port Elizabeth"
    },
    {
      url: sun_city,
      alt: "Sun City"
    },
    {
      url: cape_Town,
      alt: "Cape Town"
    },
  ];

  return (
    <>
      <section>
        <Carousel
          autoPlay
          infiniteLoop
          className="md:w-full lg:max-w-[1000px] xlg:max-w-[500px] m-auto" 
        >
          {
            slides.map((image, index) => (
              <div key={index}>
                <Image 
                  key={index} 
                  src={image.url} 
                  alt={image.alt}
                  width={500} 
                  height={300}
                />
                <p className="legend">{image.alt}</p>
              </div>
            ))
          }
        </Carousel>
      </section>

      
      <section className="flex flex-row justify-center gap-8">
        <Card className="w-[350px] shadow-xl">
          <CardHeader>
            <div className="flex flex-row justify-between align-bottom">
              <div>
                <CardTitle>Business Owner</CardTitle>
                <CardDescription>Entrepreneur or proprietor</CardDescription>
              </div>
              <div>
                <Image
                    src={card_business_owner} 
                    alt={'Business owner icon'}
                    width={50} 
                    height={50}
                  />
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <p>Small Business Owner (SBO) and or Business Proprietor, group or individuals
              that want to enter the industry
            </p>
          </CardContent>
        </Card>
        
        <Card className="w-[350px] shadow-xl">
          <CardHeader>
            <div className="flex flex-row justify-between align-bottom">
                <div>
                  <CardTitle>Driver</CardTitle>
                  <CardDescription>Local driver and/or Foreign driver</CardDescription>
                </div>
                <div>
                  <Image
                      src={card_driver} 
                      alt={'driver card icon'}
                      width={50} 
                      height={50}
                    />
                </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>Can be a local drivers hold a local license, or a foreign driver that holds
              a SADC licences.  
            </p>
          </CardContent>
        </Card>

        <Card className="w-[350px] shadow-xl">
          <CardHeader>
          <div className="flex flex-row justify-between align-bottom">
                <div>
                  <CardTitle>Drivers verications</CardTitle>
                  <CardDescription>Drivers license verification systems (DLV)</CardDescription>
                </div>
                <div>
                  <Image
                      src={card_verification} 
                      alt={'Verificatio card icon'}
                      width={50} 
                      height={50}
                    />
                </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>Driver verification is the process of confirming a drivers identity, qualifications, and eligibility to operate a vehicle.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="shadow-gray-100 bg-green-500 text-white" variant="outline">Start verification</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="flex flex-row justify-center mt-9">
          <h1 className="custom-text-gradient">
          Digital Business Rental Exchange
          </h1>
      </section>

      <section className="flex flex-row justify-center mt-5">
          <p className="w-[800px]">
          Impungushe evuthayo revolutionizes rentals, prioritizing drivers and business owners. 
          Our promise: seamless professionalism, meticulous attention to detail, and unwavering dedication to customer satisfaction.
          </p>
      </section>

      <section className="flex flex-row justify-center mt-9">
        <Image
          src={delivery_lady} 
          alt={'delivery owner image'}
          width={400} 
          height={400}
          className="rounded-br-lg"
        />

        <div className="ml-8">
          <h1 className="font-bold custom-text-gradient mb-2"> On demand </h1>
          <p>
            <span className="font-semibold">Local Express Delivery</span>: <br/> <span className="font-mono">Reliable, same-day collection and delivery solutions tailored for individuals and businesses.</span>
          </p>
        </div>
      </section>
      

      <section className="flex flex-row justify-center mt-20">
        <div className="mr-8">
          <h1 className="font-bold custom-text-gradient mb-2"> Verification </h1>
          <p>
            <span className="font-semibold">Driver Verification</span>: <br/>  <span className="font-mono">Global Driver Verification: A standardized process for authenticating driver documents <br/> across countries, leveraging MIE Fingerprint technology to verify legitimacy</span>
          </p>
        </div>

        <Image
          src={fingerprint} 
          alt={'Finger print'}
          width={400} 
          height={400}
          className="rounded-br-lg"
        />
      </section>

    </>
  );
}