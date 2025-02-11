import { motion } from "framer-motion"
import ArtifactGrid from "@/components/ArtifactGrid"
import useDynamicTitle, { SITE_TITLE } from "@/lib/dynamicTitle"
import { SearchBar } from "@/components/SearchBar"

export default function AllArtifacts() {
    useDynamicTitle(`Artifacts - ${SITE_TITLE}`)

    return (
        <motion.div
            className="bg-stone-100 dark:bg-gray-900 mt-24 sm:mt-36 min-h-screen transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 py-8">
                <motion.h2
                    className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Artifact Collection
                </motion.h2>
                <div className="py-4 text-black">
                    <SearchBar />
                </div>
                <ArtifactGrid />
            </div>
        </motion.div>
    )
}

