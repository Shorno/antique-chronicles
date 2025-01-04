import {useParams} from "react-router";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deSlugify} from "@/lib/slugify.ts";
import {fetchArtifactByName, updateArtifact} from "@/lib/api.ts";
import {ArtifactDetails} from "@/pages/ArtifactDetails.tsx";
import useAuthStore from "@/store/authStore.ts";
import {Input} from "@/components/ui/input.tsx";
import {Controller, useForm} from "react-hook-form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import {toast} from "react-hot-toast";
import {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {artifactSchema} from "@/lib/schema.ts";
import {z} from "zod";
import LoadingSpinner from "@/components/LoadingSpinner.tsx";
import ServerErrorMessage from "@/components/ServerErrorMessage.tsx";
import NoDataMessage from "@/components/NoDataMessage.tsx";
import useDynamicTitle, {SITE_TITLE} from "@/lib/dynamicTitle.tsx";

type FormData = z.infer<typeof artifactSchema>;

export default function UpdateArtifact() {
    const {artifactName} = useParams();
    const queryClient = useQueryClient();
    const {currentUser} = useAuthStore();
    const originalName = deSlugify(artifactName || "");
    const [isLocalLoading, setIsLocalLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}, control} = useForm<FormData>({
        resolver: zodResolver(artifactSchema)
    });
    useDynamicTitle(`${originalName} - ${SITE_TITLE}`)


    const {data: artifactDetails, isLoading, isError} = useQuery<ArtifactDetails>({
        queryKey: ["artifactDetails", originalName],
        queryFn: () => fetchArtifactByName(originalName),
    });
    const mutation = useMutation({
        mutationFn: (formData: FormData) => updateArtifact(originalName, formData),
        onSuccess: () => {
            toast.success('Artifact updated successfully');
            queryClient.invalidateQueries({queryKey: ["artifacts"]});
            queryClient.invalidateQueries({queryKey: ["artifactDetails", originalName]});
        },
        onError: (error: unknown) => {
            console.error("Error updating artifact:", error);
            toast.error("Failed to update artifact");
        },
        onSettled: () => {
            setIsLocalLoading(false);
        }
    });

    const onSubmit = async (formData: FormData) => {
        setIsLocalLoading(true);
        mutation.mutate(formData);
    };

    if (isLoading) {
        return <LoadingSpinner/>;
    }

    if (isError) {
        return <ServerErrorMessage/>;
    }

    if (!artifactDetails) {
        return <NoDataMessage message={"The Artifact is not found"}/>;
    }


    return (
        <>
            <div className="min-h-screen bg-stone-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-sm overflow-hidden">
                    <div className="px-6 py-8">
                        <h2 className="text-3xl font-bold text-center text-primaryBlack mb-8">Update Artifact Details</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Artifact
                                        Name</label>
                                    <Input id="name" {...register('name')} className="mt-1"
                                           defaultValue={artifactDetails.name}/>
                                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Artifact
                                        Image URL</label>
                                    <Input id="imageUrl" {...register('imageUrl')} className="mt-1"
                                           defaultValue={artifactDetails.imageUrl}/>
                                    {errors.imageUrl &&
                                        <p className="mt-1 text-xs text-red-600">{errors.imageUrl.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Artifact
                                        Type</label>
                                    <Controller
                                        name="type"
                                        control={control}
                                        defaultValue={artifactDetails.type as any}
                                        render={({field}) => (
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue placeholder="Select type"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Sculptures">Sculptures</SelectItem>
                                                    <SelectItem value="Tools">Tools</SelectItem>
                                                    <SelectItem value="Weapons">Weapons</SelectItem>
                                                    <SelectItem value="Documents">Documents</SelectItem>
                                                    <SelectItem value="Writings">Writings</SelectItem>
                                                    <SelectItem value="Other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.type && <p className="mt-1 text-xs text-red-600">{errors.type.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="createdAt" className="block text-sm font-medium text-gray-700">Created
                                        At</label>
                                    <Input id="createdAt" {...register('createdAt')} placeholder="e.g., 100 BC"
                                           className="mt-1" defaultValue={artifactDetails.createdAt}/>
                                    {errors.createdAt &&
                                        <p className="mt-1 text-xs text-red-600">{errors.createdAt.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="discoveredAt" className="block text-sm font-medium text-gray-700">Discovered
                                        At</label>
                                    <Input id="discoveredAt" {...register('discoveredAt')} placeholder="e.g., 1799"
                                           className="mt-1" defaultValue={artifactDetails.discoveredAt}/>
                                    {errors.discoveredAt &&
                                        <p className="mt-1 text-xs text-red-600">{errors.discoveredAt.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="discoveredBy" className="block text-sm font-medium text-gray-700">Discovered
                                        By</label>
                                    <Input id="discoveredBy" {...register('discoveredBy')} className="mt-1"
                                           defaultValue={artifactDetails.discoveredBy}/>
                                    {errors.discoveredBy &&
                                        <p className="mt-1 text-xs text-red-600">{errors.discoveredBy.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="presentLocation"
                                           className="block text-sm font-medium text-gray-700">Present
                                        Location</label>
                                    <Input id="presentLocation" {...register('presentLocation')} className="mt-1"
                                           defaultValue={artifactDetails.presentLocation}/>
                                    {errors.presentLocation &&
                                        <p className="mt-1 text-xs text-red-600">{errors.presentLocation.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor={"artifactAdder"}
                                           className="block text-sm font-medium text-gray-700">Artifact
                                        Adder</label>
                                    <Input id={"artifactAdder"} value={currentUser?.displayName || ""}
                                           readOnly {...register("artifactAdder")} className="mt-1 bg-gray-100"/>
                                </div>
                                <div>
                                    <label htmlFor={"adderEmail"} className="block text-sm font-medium text-gray-700">Adder
                                        Email</label>
                                    <Input id="adderEmail" value={currentUser?.email || ""}
                                           readOnly {...register("adderEmail")} className="mt-1 bg-gray-100"/>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="historicalContext" className="block text-sm font-medium text-gray-700">Historical
                                    Context</label>
                                <Textarea id="historicalContext" {...register('historicalContext')} className="mt-1"
                                          defaultValue={artifactDetails.historicalContext}/>
                                {errors.historicalContext &&
                                    <p className="mt-1 text-xs text-red-600">{errors.historicalContext.message}</p>}
                            </div>
                            <div className="col-span-full">
                                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                                        disabled={isLocalLoading}>
                                    {isLocalLoading ? 'Updating Artifact...' : 'Update Artifact'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}