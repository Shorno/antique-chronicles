import useAuthStore from "@/store/authStore.ts";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import {Link} from "react-router";
import {Button} from "@/components/ui/button.tsx";
import {LogOut} from "lucide-react";
import AnimatedNavLink from "@/components/AnimatedNavLink.tsx";

type CurrentUser = {
    displayName: string | null;
    photoURL: string | null;
}
type AuthContent = {
    currentUser: CurrentUser;
    logout: () => void;
}

export default function UserProfile() {
    const {currentUser, authLoading, logout} = useAuthStore();

    return (
        <>
            {
                authLoading ? (
                        <Avatar>
                            <AvatarFallback className={"bg-gray-700"}>
                            </AvatarFallback>
                        </Avatar>
                    )
                    :
                    currentUser ? (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Avatar>
                                            <AvatarImage src={currentUser?.photoURL}
                                                         alt={currentUser?.displayName}/>
                                            <AvatarFallback className={"text-black"}>
                                                {currentUser?.displayName?.charAt(0).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <AuthContent currentUser={currentUser} logout={logout}/>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )
                        :
                        (
                            <>
                                <AnimatedNavLink to={"/login"}>
                                    <span>Log In</span>
                                </AnimatedNavLink>
                                <Link to={"/register"}>
                                    <Button
                                        className={"w-full bg-amber-600 hover:bg-amber-700"}
                                    >
                                        <span className="text-lg">Sign Up</span>
                                    </Button>
                                </Link>
                            </>

                        )
            }

        </>
    )
}

const AuthContent = ({currentUser, logout}: AuthContent) => {
    return (
        <div className="flex flex-col gap-4 p-2 bg-primaryBlack text-white">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage src={currentUser?.photoURL}
                                 alt={currentUser?.displayName}/>
                    <AvatarFallback className={"text-black"}>
                        {currentUser?.displayName?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <span>{currentUser?.displayName}</span>
            </div>
            <Button
                size={"sm"}
                onClick={logout}
                className={"w-full bg-destructive hover:text-destructive transition duration-200"}
            >
                <div className={"flex gap-2 justify-center items-center"}>
                    <LogOut/> Logout
                </div>
            </Button>
        </div>
    )
}