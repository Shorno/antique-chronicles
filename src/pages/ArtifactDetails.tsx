import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {fetchArtifactByName, getLikeStatus, toggleLike} from "@/lib/api.ts";
import {useParams} from "react-router";
import LoadingSpinner from "@/components/LoadingSpinner.tsx";
import ServerErrorMessage from "@/components/ServerErrorMessage.tsx";
import NoDataMessage from "@/components/NoDataMessage.tsx";
import {Clock, MapPin, User, Info, Heart} from 'lucide-react';
import {toast} from "react-hot-toast";
import useAuthStore from "@/store/authStore.ts";
import {deSlugify} from "@/lib/slugify.ts";

interface ArtifactDetails {
    _id: string;
    name: string;
    imageUrl: string;
    type: string;
    createdAt: string;
    discoveredAt: string;
    discoveredBy: string;
    presentLocation: string;
    historicalContext: string;
    likeCount: number;
    likes: string[];
}

interface LikeStatus {
    isLiked: boolean;
    totalLikes: number;
}

export default function ArtifactDetails() {
    const { artifactName } = useParams();
    const {currentUser} = useAuthStore();
    const queryClient = useQueryClient();
    const originalName = deSlugify(artifactName || "");
    //fix like status

    const {data: artifactDetails, isLoading, isError, isFetchedAfterMount} = useQuery<ArtifactDetails>({
        queryKey: ["artifactDetails", originalName],
        queryFn: () => fetchArtifactByName(originalName),
    });

    const {data: likeStatus} = useQuery<LikeStatus>({
        queryKey: ["likeStatus", originalName, currentUser?.email],
        queryFn: () => getLikeStatus(originalName, currentUser?.email || ""),
        enabled: !!currentUser?.email && !!originalName
    })

    const toggleLikeMutation = useMutation({
        mutationFn: () => toggleLike(originalName, currentUser?.email || ""),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["likeStatus", originalName]});
            queryClient.invalidateQueries({queryKey: ["artifactDetails", originalName]});
            if (likeStatus?.isLiked) {
                toast.success("Removed like from the artifact");
            }
            else {
                toast.success("Liked the artifact");
            }
        },
        onError: (error: unknown) => {
            console.error("Error toggling like:", error);
            toast.error("Failed to update like status");
        }
    });

    const handleLike = () => {
        if (!currentUser) {
            toast.error("Please login to like artifacts");
            return;
        }
        toggleLikeMutation.mutate();
    };
    console.log(likeStatus?.isLiked)

    if (isLoading) {
        return <LoadingSpinner/>;
    }

    if (isError) {
        return <ServerErrorMessage/>;
    }
    if (!isFetchedAfterMount) {
        return <div>fethinmg</div>
    }
    if (!artifactDetails) {
        return <NoDataMessage message={"The Artifact is not found"}/>;
    }

    const {
        name,
        type,
        imageUrl,
        createdAt,
        discoveredAt,
        discoveredBy,
        presentLocation,
        historicalContext,
    } = artifactDetails;

    return (
        <div className="min-h-screen bg-primaryBlack text-gray-100">
            <main className="container mx-auto px-4 py-8">
                <section className="mb-12 relative">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative">
                            <img
                                className="w-full h-[500px] object-cover rounded-md shadow-2xl"
                                src={imageUrl}
                                alt={name}
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 rounded-md"></div>
                        </div>
                        <div title={"Like this antique"} className={"absolute top-0 right-0"}>
                            <Heart onClick={handleLike} color={"red"} size={25}
                                   className={`cursor-pointer ${likeStatus?.isLiked ? 'fill-red-700' : ''}`}
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-4">{name}</h2>
                            <p className="text-xl mb-6 text-gray-300">{type}</p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Clock className="w-6 h-6 mr-2 text-yellow-500"/>
                                    <span>Created: {createdAt}</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-6 h-6 mr-2 text-yellow-500"/>
                                    <span>Discovered: {discoveredAt}</span>
                                </div>
                                <div className="flex items-center">
                                    <User className="w-6 h-6 mr-2 text-yellow-500"/>
                                    <span>Discovered by: {discoveredBy}</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-6 h-6 mr-2 text-yellow-500"/>
                                    <span>Present Location: {presentLocation}</span>
                                </div>
                                <div className="flex items-center">
                                    <Heart className="w-6 h-6 mr-2 text-yellow-500"/>
                                    <span>Likes: {likeStatus?.totalLikes || 0}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-800 rounded-lg p-8 shadow-xl">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                        <Info className="w-6 h-6 mr-2 text-yellow-500"/>
                        Historical Context
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{historicalContext}</p>
                </section>
            </main>
        </div>
    );
}

