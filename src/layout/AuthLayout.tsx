import {ReactNode} from 'react';
import RegBG from "@/assets/Ancient-artifacts.jpg";

interface AuthLayoutProps {
    children: ReactNode;
    title: string;
}

export default function AuthLayout({children, title}: AuthLayoutProps) {
    return (
        <div
            className="min-h-screen bg-cover bg-fixed flex items-center justify-center p-4 relative"
            style={{backgroundImage: `url(${RegBG})`}}>
            <div className="absolute inset-0 bg-primaryBlack/35"></div>
            <div className="max-w-lg w-full shadow-xl overflow-hidden z-20 rounded-none bg-primaryBlack">
                <div className="p-8">
                    <div className={"flex flex-col text-white justify-center items-center py-8"}>
                        <p className={"text-lg"}>{title}</p>
                        <div className={"flex items-baseline font-baskervville"}>
                            <div className={"text-2xl lg:text-4xl flex lg:leading-10 gap-2"}><span>Antique</span>
                                <span>Chronicles</span>
                            </div>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}