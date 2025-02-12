import AnimatedNavLink from "@/components/AnimatedNavLink.tsx";
import {Link} from "react-router";
import {useEffect, useState} from "react";
import {ChevronRight, Menu, UserIcon, X} from "lucide-react";
import {motion, AnimatePresence} from "motion/react";
import {Button} from "@/components/ui/button.tsx";
import AuthLinks, {AuthContent} from "@/components/AuthLinks.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import useAuthStore from "@/store/authStore.ts";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {ModeToggle} from "@/components/mode-toggle.tsx";


const publicLinks = [
    {title: 'Home', href: '/'},
    {title: 'All Artifacts', href: '/artifacts'},
]

const userLinks = [
    {title: 'Home', href: '/'},
    {title: 'All Artifacts', href: '/artifacts'},
    {title: 'Add Artifacts', href: '/add-artifacts'},
    {title: 'My Artifacts', href: '/my-artifacts'},
    {title: 'Liked Artifacts', href: '/liked-artifacts'},
];

export default function Navbar() {
    const {authLoading, currentUser, logout} = useAuthStore();
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = currentUser ? userLinks : publicLinks

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    return (
        <div
            className="bg-white dark:bg-gray-900 fixed z-50 p-4 md:p-8 w-full top-0 border-b border-b-gray-300 dark:border-b-gray-700">
            <nav className="mx-auto container flex justify-between items-center text-gray-900 dark:text-white">
                <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-baseline font-baskervville gap-0.5 text-gray-900 dark:text-white"
                >
                    <span className="lg:text-2xl">The</span>
                    <div className="text-2xl lg:text-4xl flex flex-col lg:leading-10">
                        <span>Antique</span>
                        <span>Chronicles</span>
                    </div>
                </Link>
                <div className="hidden lg:flex items-center space-x-8 font-semibold">
                    {navLinks.map((link) => (
                        <AnimatedNavLink key={link.title} to={link.href}>
                            {link.title}
                        </AnimatedNavLink>
                    ))}
                    <AuthLinks/>
                    <ModeToggle/>
                </div>
                <motion.div className="lg:hidden relative">
                    <div className="flex gap-8 justify-center items-center">
                        {authLoading ? (
                            <Avatar className="size-8">
                                <AvatarFallback className="bg-gray-300 dark:bg-gray-700">
                                    <UserIcon className="text-gray-900 dark:text-white"/>
                                </AvatarFallback>
                            </Avatar>
                        ) : currentUser && (
                            <Popover>
                                <PopoverTrigger>
                                    <Avatar className="size-8">
                                        <AvatarImage
                                            src={currentUser?.photoURL || undefined}
                                            alt={currentUser?.displayName || undefined}
                                        />
                                        <AvatarFallback className="bg-gray-300 dark:bg-gray-700">
                                            <UserIcon className="text-gray-900 dark:text-white"/>
                                        </AvatarFallback>
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="p-0 border-none w-max">
                                    <AuthContent currentUser={currentUser!} logout={logout}/>
                                </PopoverContent>
                            </Popover>
                        )}
                        <ModeToggle/>
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{opacity: 0, rotate: -90}}
                                    animate={{opacity: 1, rotate: 0}}
                                    exit={{opacity: 0, rotate: 90}}
                                    transition={{duration: 0.5, ease: "easeInOut"}}
                                >
                                    <X onClick={() => setIsOpen(false)}/>
                                </motion.div>
                            ) : (
                                <motion.div key="menu" transition={{duration: 0.5, ease: "easeInOut"}}>
                                    <Menu onClick={() => setIsOpen(true)}/>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.2}}
                            className="lg:hidden fixed inset-0 bg-white dark:bg-gray-900 border-t border-t-gray-300 dark:border-t-gray-700 mt-[97px] md:mt-32 z-[60]"
                        >
                            <motion.div
                                className="flex flex-col h-full pt-16"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={{
                                    open: {
                                        transition: {staggerChildren: 0.07, delayChildren: 0.2},
                                    },
                                    closed: {
                                        transition: {staggerChildren: 0.05, staggerDirection: -1},
                                    },
                                }}
                            >
                                {/* Navigation Items */}
                                <div className="flex-1 overflow-y-auto">
                                    {navLinks.map((item) => (
                                        <motion.div
                                            key={item.title}
                                            variants={{
                                                open: {
                                                    y: 0,
                                                    opacity: 1,
                                                    transition: {y: {stiffness: 1000, velocity: -100}},
                                                },
                                                closed: {
                                                    y: 50,
                                                    opacity: 0,
                                                    transition: {y: {stiffness: 1000}},
                                                },
                                            }}
                                            className="border-b border-neutral-800"
                                        >
                                            <Link
                                                to={item.href}
                                                className="flex items-center justify-between p-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <span className="text-lg">{item.title}</span>
                                                <ChevronRight className="text-gray-400 dark:text-gray-300" size={20}/>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    className="mt-auto p-4 space-y-3"
                                    variants={{
                                        open: {
                                            y: 0,
                                            opacity: 1,
                                            transition: {y: {stiffness: 1000, velocity: -100}},
                                        },
                                        closed: {
                                            y: 50,
                                            opacity: 0,
                                            transition: {y: {stiffness: 1000}},
                                        },
                                    }}
                                >
                                    {currentUser ? (
                                        <Button
                                            onClick={logout}
                                            className="w-full bg-destructive hover:text-destructive transition duration-200"
                                        >
                                            <span className="text-lg">Sign Out</span>
                                        </Button>
                                    ) : (
                                        <div className="flex w-full gap-8" onClick={() => setIsOpen(false)}>
                                            <Link to="/login" className="w-full">
                                                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                                                    <span className="text-lg">Login</span>
                                                </Button>
                                            </Link>
                                            <Link to="/register" className="w-full">
                                                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                                                    <span className="text-lg">Sign Up</span>
                                                </Button>
                                            </Link>
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
}
