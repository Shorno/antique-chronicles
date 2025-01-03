import ArtifactGrid from "@/components/ArtifactGrid.tsx";
import useDynamicTitle, {SITE_TITLE} from "@/lib/dynamicTitle.tsx";
import {SearchBar} from "@/components/SearchBar.tsx";
import {motion} from "motion/react";

export default function AllArtifacts() {
    useDynamicTitle(`Artifacts - ${SITE_TITLE}`)

    return (
        <motion.div
            className="bg-stone-100 min-h-screen"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            <div className="container mx-auto px-4 py-8">
                <motion.h2
                    className="text-3xl font-bold text-center text-primaryBlack mb-8"
                    initial={{y: -20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.2, duration: 0.5}}
                >
                    Artifact Collection
                </motion.h2>
                <div className={"py-4"}>
                    <SearchBar/>
                </div>
                <ArtifactGrid/>
            </div>
        </motion.div>

    )
}