import {useQuery} from "@tanstack/react-query";
import {fetchArtifacts} from "@/lib/api.ts";
import {ArtifactCard} from "@/components/ArtifactCard.tsx";
import LoadingSpinner from "@/components/LoadingSpinner.tsx";
import ServerErrorMessage from "@/components/ServerErrorMessage.tsx";
import NoDataMessage from "@/components/NoDataMessage.tsx";

export default function ArtifactGrid() {
    const {data: artifactsData, isLoading, isError} = useQuery({
        queryKey: ["artifacts"],
        queryFn: fetchArtifacts,
    })

    if (isLoading) {
        return <LoadingSpinner/>
    }

    if (isError) {
        return <ServerErrorMessage/>
    }

    if (!artifactsData || artifactsData.length === 0) {
        return <NoDataMessage message={"No artifacts found"}/>
    }


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {artifactsData.map((artifact: any) => (
                    <ArtifactCard key={artifact.id} {...artifact} />
                ))}
            </div>

        </>
    )
}