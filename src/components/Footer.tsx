import {Facebook, Instagram, Twitter, Youtube} from "lucide-react";
import FooterIcon from "@/components/FooterIcon.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Link} from "react-router";

export default function Footer() {
    return (

        <footer className="bg-gray-900 py-10">
            <div className="container mx-auto md:p-8">
                {/* Social Media and Newsletter Section */}
                <div
                    className="flex md:flex-row flex-col-reverse p-4 bg-red sm:p-0 justify-between md:items-center gap-8 mb-12">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-white text-4xl">Connect with us</h2>
                        <div className="flex gap-4">
                            <FooterIcon icon={<Facebook/>}/>
                            <FooterIcon icon={<Twitter/>}/>
                            <FooterIcon icon={<Instagram/>}/>
                            <FooterIcon icon={<Youtube/>}/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className="text-white text-lg md:text-2xl">
                            Enter your email address to receive our newsletter
                        </p>
                        <div className="flex *:h-12">
                            <Input
                                type="email"
                                className="rounded-none text-white focus:bg-white focus:text-black transition duration-200 border border-r-0"
                            />
                            <div
                                className="bg-white w-1/3 flex justify-center items-center hover:bg-black transition duration-200 border">
                                <button
                                    className="text-black hover:text-white px-4 py-2 rounded-none font-semibold transition duration-200">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 md:p-0 mb-12">
                    <hr className="border-gray-700"/>
                </div>

                {/* Navigation Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 sm:p-0">
                    {/* About Us & Our Work */}
                    <div className="space-y-8 mb-8 md:mb-0">
                        <div>
                            <h3 className="text-white text-lg md:text-xl font-semibold mb-4">About us</h3>
                            <ul className="space-y-2">
                                <li><Link to="/governance"
                                          className="text-gray-300 hover:text-white transition-colors">Governance</Link>
                                </li>
                                <li><Link to="/story" className="text-gray-300 hover:text-white transition-colors">The
                                    Museum story</Link></li>
                                <li><Link to="/jobs"
                                          className="text-gray-300 hover:text-white transition-colors">Jobs</Link></li>
                                <li><Link to="/press"
                                          className="text-gray-300 hover:text-white transition-colors">Press</Link></li>
                                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact
                                    us</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Visit & Research */}
                    <div className="space-y-8 mb-8 md:mb-0">
                        <div>
                            <h3 className="text-white text-lg md:text-xl font-semibold mb-4">Visit</h3>
                            <ul className="space-y-2">
                                <li><Link to="/map" className="text-gray-300 hover:text-white transition-colors">Museum
                                    map</Link></li>
                                <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Exhibitions
                                    and events</Link></li>
                                <li><Link to="/accessibility"
                                          className="text-gray-300 hover:text-white transition-colors">Accessibility</Link>
                                </li>
                                <li><Link to="/food-drink" className="text-gray-300 hover:text-white transition-colors">Food
                                    and drink</Link></li>
                                <li><Link to="/audio-guide"
                                          className="text-gray-300 hover:text-white transition-colors">Audio
                                    guide</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Commercial */}
                    <div className="space-y-8 mb-8 md:mb-0">
                        <div>
                            <h3 className="text-white text-lg md:text-xl font-semibold mb-4">Commercial</h3>
                            <ul className="space-y-2">
                                <li><Link to="/commercial-hire"
                                          className="text-gray-300 hover:text-white transition-colors">Commercial
                                    hire</Link></li>
                                <li><Link to="/filming"
                                          className="text-gray-300 hover:text-white transition-colors">Filming</Link>
                                </li>
                                <li><Link to="/images" className="text-gray-300 hover:text-white transition-colors">Museum
                                    Images</Link></li>
                                <li><Link to="/licensing"
                                          className="text-gray-300 hover:text-white transition-colors">Licensing</Link>
                                </li>
                                <li><Link to="/press" className="text-gray-300 hover:text-white transition-colors">Museum
                                    Press</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="space-y-8 mb-8 md:mb-0">
                        <div>
                            <h3 className="text-white text-lg md:text-xl font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><Link to="/study-rooms"
                                          className="text-gray-300 hover:text-white transition-colors">Study
                                    rooms</Link></li>
                                <li><Link to="/library" className="text-gray-300 hover:text-white transition-colors">Library
                                    and archive</Link></li>
                                <li><Link to="/collection" className="text-gray-300 hover:text-white transition-colors">Search
                                    the collection</Link></li>
                                <li><Link to="/blog"
                                          className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}