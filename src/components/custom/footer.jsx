import imageLogo from "@/public/Home.png";
import {
    proudly_rsa,
  } from "@/assets/cities";
import Image from "next/image";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { IoLocationSharp } from "react-icons/io5";
import { PiTrademarkRegisteredFill } from "react-icons/pi";
import Link from "next/link";

export default function Footer()
{
    return (
        <section className="dark:bg-orange-800 bg-slate-100 py-1 mt-7">
            <section className="grid grid-cols-2 my-12 place-items-center">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between align-middle">
                        <Image
                        src={imageLogo}
                        alt="Picture of our logo"
                        width={50}
                        height={50}
                        /> 
                    </div> 
                    <span className="font-sans">
                        <p className="font-mono">Impungushe evuthayo platform: </p>Subsidiary of Impungushe Evuthayo Logistic Limited.
                    </span>

                    <div className="flex flex-row gap-5 mt-2">
                        <div>
                            {/* Create a page */}
                            <Link href="https://www.facebook.com/" legacyBehavior passHref>
                                <BsFacebook className="cursor-pointer"/>
                            </Link>
                        </div>
                        <div>
                            {/* Create a page */}
                            <Link href="https://x.com/i/trends" legacyBehavior passHref>
                                <BsTwitterX className="cursor-pointer"/>
                            </Link>
                        </div>
                        <div>
                            {/* Create a page */}
                            <Link href="https://web.whatsapp.com/" legacyBehavior passHref>
                                <ImWhatsapp className="cursor-pointer"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-3">
                    <IoLocationSharp /> 3 Camp road, <br/> Maitland, <br/> Cape Town, <br/> Western Cape, <br/> RSA
                    <div>
                        <Image
                        src={proudly_rsa}
                        alt="Proudly south africa"
                        width={40}
                        height={40}
                        />  
                        <p className="font-extralight dark:text-white text-green-500">
                            <span className="flex">Proudly South African Company <PiTrademarkRegisteredFill/></span>
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
}