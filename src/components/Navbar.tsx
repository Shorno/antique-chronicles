import AnimatedNavLink from "@/components/AnimatedNavLink.tsx";
import {Link} from "react-router";
import {FormEvent, useEffect, useState} from "react";
import {ChevronRight, Menu, Search, X} from 'lucide-react';
import {motion, AnimatePresence} from "motion/react";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import UserProfile from "@/components/UserProfile.tsx";

const navLinks = [
    {title: 'Home', href: '/'},
    {title: 'All Artifacts', href: '/all-artifacts'},
    {title: 'Add Artifacts', href: '/add-artifacts'},
]
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");


    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    const handleSearchSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Search submitted:", searchQuery);
    };


    return (
        <div className={`bg-primaryBlack p-4 md:p-8 w-full top-0`}>
            <nav className="mx-auto container text-white flex justify-between items-center">
                <Link to={"/"} className={"flex items-baseline font-baskervville gap-0.5"}>
                    <span className={"lg:text-2xl"}>The</span>
                    <div className={"text-2xl lg:text-4xl flex flex-col lg:leading-10"}><span>Antique</span>
                        <span>Chronicles</span>
                    </div>
                </Link>
                <div className={"hidden md:block"}>
                    <form onSubmit={handleSearchSubmit}>
                        <Input
                            placeholder={"Search"}
                            className={"w-96"}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                </div>
                <div className="hidden lg:flex items-center space-x-8 font-semibold">
                    {navLinks.map((link) => (
                        <AnimatedNavLink
                            key={link.title}
                            to={link.href}
                        >
                            {link.title}
                        </AnimatedNavLink>

                    ))}
                    <UserProfile/>
                </div>
                <motion.div className="lg:hidden relative">
                    <div className={"flex gap-8"}>
                        <div>
                            {
                                !isSearchOpen && <Search onClick={() => setIsSearchOpen(true)}/>
                            }
                            {isSearchOpen && (
                                <motion.div
                                    initial={{opacity: 0, y: -20}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -20}}
                                    transition={{duration: 0.2}}
                                    className="lg:hidden fixed  top-0 left-0  right-0 bg-primaryBlack p-4 z-50"
                                >
                                    <div className="flex flex-col gap-2">
                                        <div className={"flex justify-between items-center"}>
                                            <h1 className={"text-lg"}>Search Through History</h1>
                                            <X size={20} onClick={() => setIsSearchOpen(false)}/>
                                        </div>
                                        <div className={"flex gap-4 items-center"}>
                                            {/*<Input placeholder="Search" className="flex-grow relative"/>*/}
                                            {/*<Search size={30}/>*/}
                                            <form onSubmit={handleSearchSubmit}
                                                  className={"flex w-full gap-4 items-center"}>
                                                <Input
                                                    placeholder="Search"
                                                    className="flex-grow relative"
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                />
                                                <button type="submit">
                                                    <Search size={30}/>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{opacity: 0, rotate: -90}}
                                    animate={{opacity: 1, rotate: 0}}
                                    exit={{opacity: 0, rotate: 90}}
                                    transition={{duration: 0.5, ease: "easeInOut"}}
                                >
                                    <X
                                        onClick={() => setIsOpen(false)}
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    transition={{duration: 0.5, ease: "easeInOut"}}
                                >
                                    <Menu
                                        onClick={() => setIsOpen(true)}
                                    />
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
                            className="lg:hidden fixed inset-0 bg-primaryBlack mt-24"
                        >
                            <motion.div
                                className="flex flex-col h-full pt-16"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={{
                                    open: {
                                        transition: {staggerChildren: 0.07, delayChildren: 0.2}
                                    },
                                    closed: {
                                        transition: {staggerChildren: 0.05, staggerDirection: -1}
                                    }
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
                                                    transition: {
                                                        y: {stiffness: 1000, velocity: -100}
                                                    }
                                                },
                                                closed: {
                                                    y: 50,
                                                    opacity: 0,
                                                    transition: {
                                                        y: {stiffness: 1000}
                                                    }
                                                }
                                            }}
                                            className="border-b border-neutral-800"
                                        >
                                            <Link
                                                to={item.href}
                                                className="flex items-center justify-between p-4 text-white hover:bg-neutral-900 transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <span className="text-lg">{item.title}</span>
                                                <ChevronRight className="text-neutral-400" size={20}/>
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
                                            transition: {
                                                y: {stiffness: 1000, velocity: -100}
                                            }
                                        },
                                        closed: {
                                            y: 50,
                                            opacity: 0,
                                            transition: {
                                                y: {stiffness: 1000}
                                            }
                                        }
                                    }}
                                >
                                    <Button
                                        className={"w-full bg-destructive hover:text-destructive transition duration-200"}
                                    >
                                        <span className="text-lg">Sign Out</span>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

        </div>

    )
}

