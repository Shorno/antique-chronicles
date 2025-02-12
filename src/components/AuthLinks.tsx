import useAuthStore from "@/store/authStore.ts"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.tsx"
import { Link } from "react-router"
import { Button } from "@/components/ui/button.tsx"
import { LogOut, UserIcon } from "lucide-react"
import AnimatedNavLink from "@/components/AnimatedNavLink.tsx"
import type { User } from "firebase/auth"

export default function AuthLinks() {
    const { currentUser, authLoading, logout } = useAuthStore()

    return (
        <>
            {authLoading ? (
                <Avatar className="size-8">
                    <AvatarFallback className="bg-gray-300 dark:bg-gray-700">
                        <UserIcon className="text-gray-900 dark:text-white" />
                    </AvatarFallback>
                </Avatar>
            ) : currentUser ? (
                <Popover>
                    <PopoverTrigger>
                        <Avatar className="size-8">
                            <AvatarImage src={currentUser.photoURL || undefined} alt={currentUser.displayName || undefined} />
                            <AvatarFallback className="bg-gray-300 dark:bg-gray-700">
                                <UserIcon className="text-gray-900 dark:text-white" />
                            </AvatarFallback>
                        </Avatar>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 border-none w-max">
                        <AuthContent currentUser={currentUser} logout={logout} />
                    </PopoverContent>
                </Popover>
            ) : (
                <>
                    <AnimatedNavLink to="/login">
                        <span className="text-gray-900 dark:text-white">Log In</span>
                    </AnimatedNavLink>
                    <Link to="/register">
                        <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                            <span className="text-lg">Sign Up</span>
                        </Button>
                    </Link>
                </>
            )}
        </>
    )
}

type AuthContent = {
    currentUser: User
    logout: () => void
}

export const AuthContent = ({ currentUser, logout }: AuthContent) => {
    return (
        <div className="flex flex-col gap-4 p-4 bg-white dark:bg-gray-900 rounded-md shadow-md">
            <div className="flex items-center gap-4">
                <Avatar className="size-8">
                    <AvatarImage src={currentUser.photoURL || undefined} alt={currentUser.displayName || undefined} />
                    <AvatarFallback className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">
                        {currentUser?.displayName?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <span className="text-gray-900 dark:text-white">{currentUser?.displayName}</span>
            </div>
            <Button onClick={logout} className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                <div className="flex gap-2 justify-center items-center">
                    <LogOut size={16} /> Logout
                </div>
            </Button>
        </div>
    )
}

