import {ReactNode} from "react";

export default function FooterIcon({icon}: { icon: ReactNode }) {
    return (
        <div
            className={"text-white size-14 rounded-full bg-black flex justify-center items-center hover:text-black hover:bg-white transition-colors duration-300 cursor-pointer"}>
            {icon}
        </div>

    )
}