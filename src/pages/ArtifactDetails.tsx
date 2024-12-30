import { useQuery } from "@tanstack/react-query";
import { fetchArtifactByName } from "@/lib/api.ts";
import { useLocation } from "react-router";
import LoadingSpinner from "@/components/LoadingSpinner.tsx";
import ServerErrorMessage from "@/components/ServerErrorMessage.tsx";
import NoDataMessage from "@/components/NoDataMessage.tsx";
import { Clock, MapPin, User, Info } from 'lucide-react';

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
}

export default function ArtifactDetails() {
    const location = useLocation();
    const artifactName = location.state?.name;

    const { data: artifactDetails, isLoading, isError } = useQuery<ArtifactDetails>({
        queryKey: ["artifactDetails", artifactName],
        queryFn: () => fetchArtifactByName(artifactName || ""),
    });

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (isError) {
        return <ServerErrorMessage />;
    }

    if (!artifactDetails) {
        return <NoDataMessage message={"The Artifact is not found"} />;
    }

    const { name, type, imageUrl, createdAt, discoveredAt, discoveredBy, presentLocation, historicalContext } = artifactDetails;

    return (
        <div className="min-h-screen bg-primaryBlack text-gray-100">
            <main className="container mx-auto px-4 py-8">
                <section className="mb-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative">
                            <img
                                className="w-full h-[500px] object-cover rounded-md shadow-2xl"
                                src={imageUrl}
                                alt={name}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 rounded-md"></div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-4">{name}</h2>
                            <p className="text-xl mb-6 text-gray-300">{type}</p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Clock className="w-6 h-6 mr-2 text-yellow-500" />
                                    <span>Created: {createdAt}</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-6 h-6 mr-2 text-yellow-500" />
                                    <span>Discovered: {discoveredAt}</span>
                                </div>
                                <div className="flex items-center">
                                    <User className="w-6 h-6 mr-2 text-yellow-500" />
                                    <span>Discovered by: {discoveredBy}</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-6 h-6 mr-2 text-yellow-500" />
                                    <span>Present Location: {presentLocation}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-800 rounded-lg p-8 shadow-xl">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                        <Info className="w-6 h-6 mr-2 text-yellow-500" />
                        Historical Context
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{historicalContext}</p>
                </section>
            </main>
        </div>
    );
}

