import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { motion } from "framer-motion"
import { Home, Search } from 'lucide-react'
import BrokenArtifact from "../assets/borken-artifact.avif"
export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[120px] md:text-[200px] font-bold text-gray-800 leading-none">
                        404
                    </h1>

                    <div className="relative w-48 h-48 mx-auto -mt-16 mb-8">
                        <motion.img
                            src={BrokenArtifact}
                            alt="Broken artifact"
                            className="w-full h-full object-contain filter grayscale"
                            initial={{ rotate: -10 }}
                            animate={{ rotate: [0, -5, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                        The page you're looking for appears to be lost in time.
                        Our curators are working hard to locate it.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            variant="outline"
                            className="bg-transparent border-gray-700 text-white hover:bg-gray-800 hover:text-white w-full sm:w-auto"
                            asChild
                        >
                            <Link to="/">
                                <Home className="mr-2 h-4 w-4" />
                                Return Home
                            </Link>
                        </Button>
                        <Button
                            className="bg-gray-800 hover:bg-gray-700 text-white w-full sm:w-auto"
                            asChild
                        >
                            <Link to="/artifacts">
                                <Search className="mr-2 h-4 w-4" />
                                View Artifacts
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

