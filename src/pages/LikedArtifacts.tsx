import {ArtifactCard} from "@/components/ArtifactCard.tsx";
import useAuthStore from "@/store/authStore.ts";
import {useQuery} from "@tanstack/react-query";
import LoadingSpinner from "@/components/LoadingSpinner.tsx";
import ServerErrorMessage from "@/components/ServerErrorMessage.tsx";
import NoDataMessage from "@/components/NoDataMessage.tsx";
import {ArtifactDetails} from "@/pages/ArtifactDetails.tsx";
import useDynamicTitle, {SITE_TITLE} from "@/lib/dynamicTitle.tsx";
import UnauthorizedAlert from "@/components/UnauthorizedAlert.tsx";
import {getLikedArtifacts} from "@/lib/api.ts";

export interface CustomError extends Error {
    status?: number;
}

export default function LikedArtifacts() {
    useDynamicTitle(`Liked Artifacts - ${SITE_TITLE}`)
    const {currentUser} = useAuthStore()

    const {data: likedArtifacts, isLoading, isError, error} = useQuery({
        queryKey: ["my-artifacts", currentUser?.email],
        queryFn: () => getLikedArtifacts(currentUser?.email || ""),
        enabled: !!currentUser?.email
    });



    if (isLoading) {
        return <LoadingSpinner/>
    }
    if ((error as CustomError)?.status === 401) {
        return (
            <UnauthorizedAlert/>
        );
    }

    if (isError) {
        return <ServerErrorMessage/>
    }

    if (!likedArtifacts || likedArtifacts.length === 0) {
        return <NoDataMessage message={"Please like Artifacts to see them here"}/>
    }

    return (
        <>
            <div className="bg-stone-100">
                <div className={"container mx-auto px-4 py-8 min-h-screen"}>
                    <h2 className="text-3xl font-bold text-center text-primaryBlack mb-8">Liked Artifacts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {likedArtifacts.map((artifact: ArtifactDetails) => (
                            <ArtifactCard id={artifact._id} key={artifact._id} {...artifact}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}