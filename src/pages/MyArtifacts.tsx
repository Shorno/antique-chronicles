import {ArtifactCard} from "@/components/ArtifactCard.tsx";
import useAuthStore from "@/store/authStore.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deleteArtifact, getArtifactsByEmail} from "@/lib/api.ts";
import LoadingSpinner from "@/components/LoadingSpinner.tsx";
import ServerErrorMessage from "@/components/ServerErrorMessage.tsx";
import NoDataMessage from "@/components/NoDataMessage.tsx";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router";
import {ArtifactDetails} from "@/pages/ArtifactDetails.tsx";

export default function MyArtifacts() {

    const {currentUser} = useAuthStore()
    const {data: myArtifacts, isLoading, isError} = useQuery({
        queryKey: ["my-artifacts", currentUser?.email],
        queryFn: () => getArtifactsByEmail(currentUser?.email || ""),
        enabled: !!currentUser?.email
    });
    const queryClient = useQueryClient();
    const navigate = useNavigate();


    const mutation = useMutation({
        mutationFn: (artifactName: string) => deleteArtifact(artifactName),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["my-artifacts", currentUser?.email]});
            toast.success("Artifact deleted successfully");
            navigate("/artifacts");
        },
        onError: (error: unknown) => {
            console.error("Error deleting artifact:", error);
            toast.error("Failed to delete artifact");
        }
    });

    const handleDelete = (artifactName: string) => {
        mutation.mutate(artifactName);
    }


    if (isLoading) {
        return <LoadingSpinner/>
    }

    if (isError) {
        return <ServerErrorMessage/>
    }

    if (!myArtifacts || myArtifacts.length === 0) {
        return <NoDataMessage message={"Please add Artifacts to see them here"}/>
    }

    return (
        <>
            <div className="bg-stone-100">
                <div className={"container mx-auto px-4 py-8 min-h-screen"}>
                    <h2 className="text-3xl font-bold text-center text-primaryBlack mb-8">My Artifacts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {myArtifacts.map((artifact: ArtifactDetails) => (
                            <ArtifactCard id={artifact._id} key={artifact._id} {...artifact}
                                          showUpdateButton={true}
                                          onDelete={() => handleDelete(artifact.name)}
                                          showDeleteButton={true}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}