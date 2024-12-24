import {Facebook, InstagramIcon, TwitterIcon, YoutubeIcon} from "lucide-react";
import FooterIcon from "@/components/FooterIcon.tsx";
import {Input} from "@/components/ui/input.tsx";

export default function Footer() {
    return (

        <footer className={"bg-primaryBlack py-10"}>
            <div className={"mx-auto container"}>
                <div className={"flex md:flex-row flex-col-reverse p-4 sm:p-0 justify-between md:items-center  gap-8"}>
                    <div className={"flex flex-col gap-8"}>
                        <h1 className={"text-white text-4xl"}>Connect with us</h1>
                        <div className={"flex gap-4"}>
                            <FooterIcon icon={<Facebook/>}/>
                            <FooterIcon icon={<TwitterIcon/>}/>
                            <FooterIcon icon={<InstagramIcon/>}/>
                            <FooterIcon icon={<YoutubeIcon/>}/>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-8"}>
                        <p className={"text-white text-lg md:text-2xl"}>Enter your email address to receive our newsletter</p>
                        <div className={"flex *:h-12"}>
                            <Input type={"email"}
                                   className={"rounded-none focus:bg-white focus:text-black transition duration-200 border border-r-0"}
                            />
                            <div
                                className={"bg-white w-1/3 flex justify-center items-center  hover:bg-black transition duration-200 border"}>
                                <div
                                    className={"text-black hover:text-white px-4 py-2 rounded-none font-semibold transition duration-200"}>
                                    Sign Up
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"p-4 md:p-0 my-10"}>
                    <hr/>
                </div>
            </div>
        </footer>

    )
}