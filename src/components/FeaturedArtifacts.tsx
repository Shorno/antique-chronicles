import {useQuery} from "@tanstack/react-query";
import {getFeaturedArtifacts} from "@/lib/api.ts";
import {motion} from "motion/react";
import {AlertTriangle, ArrowRight, FileQuestion, Heart} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {ArtifactDetails} from "@/pages/ArtifactDetails.tsx";
import {useNavigate} from "react-router";
import {slugify} from "@/lib/slugify.ts";


export default function FeaturedArtifacts() {
    const {data: featuredArtifacts, isLoading, isError} = useQuery<ArtifactDetails[]>({
        queryKey: ["featuredArtifacts"],
        queryFn: () => getFeaturedArtifacts()
    });
    const navigate = useNavigate();
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1
        }
    }


    return (
        <>
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-center font-baskervville text-yellow-500 mb-12">Featured
                        Artifacts</h2>

                    {isLoading ? (
                            <div className="flex justify-center items-center py-16 bg-gray-900">
                                <div
                                    className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500"></div>
                            </div>
                        )
                        : isError ? (
                                <div className="flex flex-col justify-center items-center py-16 bg-gray-900 text-gray-100">
                                    <AlertTriangle className="w-12 h-12 text-red-500 mb-4"/>
                                    <h2 className="text-xl font-bold mb-2">Internal Server Error</h2>
                                    <p className="text-gray-300 text-center">Oops! We couldn't load featured artifacts.
                                        Please try again later.
                                    </p>
                                </div>
                            )
                            : featuredArtifacts?.length === 0 ? (
                                    <div
                                        className="flex flex-col justify-center items-center py-16 bg-gray-900 text-gray-100">
                                        <FileQuestion className="w-12 h-12 text-yellow-500 mb-4"/>
                                        <h2 className="text-xl font-bold mb-2">No Data Available</h2>
                                        <p className="text-gray-300 text-center">No featured artifacts found</p>
                                    </div>
                                )
                                : (<motion.div
                                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        {featuredArtifacts?.map((artifact) => (
                                            <motion.div
                                                key={artifact._id}
                                                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-yellow-500/20"
                                                variants={itemVariants}
                                            >
                                                <div className="relative aspect-[3/2]">
                                                    <img
                                                        src={artifact.imageUrl}
                                                        alt={artifact.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div
                                                        className="absolute top-4 right-4 bg-black/50 rounded-full p-2 flex items-center">
                                                        <Heart className="w-4 h-4 text-red-500 mr-1"
                                                               fill="currentColor"/>
                                                        <span className="text-white text-sm">{artifact.likeCount}</span>
                                                    </div>
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="text-xl font-semibold text-yellow-500 mb-2">{artifact.name}</h3>
                                                    <p className="text-gray-300 mb-4 line-clamp-2">{artifact.historicalContext}</p>
                                                    <Button
                                                        onClick={() => navigate(`/artifacts/${slugify(artifact.name)}`)}
                                                        className="w-full bg-yellow-600 hover:bg-yellow-700 text-gray-900 font-semibold py-2 px-4 rounded transition duration-300"
                                                    >
                                                        View Details
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                </div>
                <div className="flex justify-center py-20">
                    <Button
                        onClick={() => navigate('/artifacts')}
                        className="bg-yellow-600 hover:bg-yellow-700 text-gray-900 font-semibold py-3 px-8 rounded-sm text-lg transition duration-300 shadow-lg hover:shadow-xl"
                    >
                        View All Artifacts
                        <ArrowRight className="w-6 h-6 ml-2" fill="currentColor"/>
                    </Button>
                </div>
            </section>
        </>
    )
}