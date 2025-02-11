import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import FooterIcon from "@/components/FooterIcon.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-stone-100 dark:bg-gray-900 py-10 transition-colors duration-300">
            <div className="container mx-auto md:p-8">
                {/* Social Media and Newsletter Section */}
                <div className="flex md:flex-row flex-col-reverse p-4 sm:p-0 justify-between md:items-center gap-8 mb-12">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-gray-900 dark:text-white text-4xl">
                            Connect with us
                        </h2>
                        <div className="flex gap-4">
                            <FooterIcon icon={<Facebook />} />
                            <FooterIcon icon={<Twitter />} />
                            <FooterIcon icon={<Instagram />} />
                            <FooterIcon icon={<Youtube />} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className="text-gray-900 dark:text-white text-lg md:text-2xl">
                            Enter your email address to receive our newsletter
                        </p>
                        <div className="flex h-12">
                            <Input
                                type="email"
                                className="rounded-none h-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-gray-800 focus:text-black dark:focus:text-white transition duration-200 border border-r-0"
                            />
                            <div className="w-1/3 flex justify-center items-center bg-white dark:bg-gray-800 hover:bg-black dark:hover:bg-white transition duration-200 border">
                                <button className="px-4 py-2 rounded-none font-semibold transition duration-200 text-gray-900 dark:text-white hover:text-white dark:hover:text-gray-900">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 md:p-0 mb-12">
                    <hr className="border-gray-300 dark:border-gray-700" />
                </div>

                {/* Navigation Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 sm:p-0">
                    {/* About us */}
                    <div className="space-y-8 mb-8 md:mb-0">
                        <div>
                            <h3 className="text-gray-900 dark:text-white text-lg md:text-xl font-semibold mb-4">
                                About us
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/"
                                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/register"
                                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/login"
                                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Visit */}
                    <div className="space-y-8 mb-8 md:mb-0">
                        <div>
                            <h3 className="text-gray-900 dark:text-white text-lg md:text-xl font-semibold mb-4">
                                Visit
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/artifacts"
                                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        All Artifacts
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Commercial */}
                    <div className="space-y-8 mb-8 md:mb-0">
                        <div>
                            <h3 className="text-gray-900 dark:text-white text-lg md:text-xl font-semibold mb-4">
                                Commercial
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/add-artifacts"
                                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        Add Artifacts
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="space-y-8 mb-8 md:mb-0">
                        <div>
                            <h3 className="text-gray-900 dark:text-white text-lg md:text-xl font-semibold mb-4">
                                Resources
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/my-artifacts"
                                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        My Artifacts
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/liked-artifacts"
                                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        Liked Artifacts
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
