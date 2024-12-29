import ArtifactGrid from "@/components/ArtifactGrid.tsx";

export default function AllArtifacts() {

    return (
        <div className="bg-stone-100">
            <div className={"container mx-auto px-4 py-8 min-h-screen"}>
                <h2 className="text-3xl font-bold text-center text-primaryBlack mb-8">Artifact Collection</h2>

                <ArtifactGrid/>
            </div>
        </div>

    )
}