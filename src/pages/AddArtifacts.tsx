import {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {toast} from "react-hot-toast";
import {artifactSchema} from "@/lib/schema.ts";
import {z} from "zod";
import {Textarea} from "@/components/ui/textarea.tsx";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addArtifacts} from "@/lib/api.ts";
import useAuthStore from "@/store/authStore.ts";
import useDynamicTitle, {SITE_TITLE} from "@/lib/dynamicTitle.tsx";


type FormData = z.infer<typeof artifactSchema>;

export default function AddArtifact() {
    useDynamicTitle(`Add Artifacts - ${SITE_TITLE}`)
    const {currentUser} = useAuthStore();
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}, control} = useForm<FormData>({
        resolver: zodResolver(artifactSchema)
    });
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: addArtifacts,
        onSuccess: (data) => {
            console.log("Artifact added successfully", data);
            toast.success('Artifact added successfully');
            queryClient.invalidateQueries({queryKey: ["artifacts"], refetchType: "active"});
        },
        onError: (error: unknown) => {
            console.error("Error adding artifact:", error);
            toast.error("Failed to add artifact");
        },
        onSettled: () => {
            setIsLoading(false);
        }
    });
    const onSubmit = async (formData: FormData) => {
        setIsLoading(true);
        mutation.mutate(formData);

    };


    return (
        <div className="min-h-screen bg-stone-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-sm overflow-hidden">
                <div className="px-6 py-8">
                    <h2 className="text-3xl font-bold text-center text-primaryBlack mb-8">Add
                        New Artifact</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Artifact
                                    Name</label>
                                <Input id="name" {...register('name')} className="mt-1"/>
                                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Artifact
                                    Image URL</label>
                                <Input id="imageUrl" {...register('imageUrl')} className="mt-1"/>
                                {errors.imageUrl &&
                                    <p className="mt-1 text-xs text-red-600">{errors.imageUrl.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-gray-700">Artifact
                                    Type</label>
                                <Controller
                                    name="type"
                                    control={control}
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
                                       className="mt-1"/>
                                {errors.createdAt &&
                                    <p className="mt-1 text-xs text-red-600">{errors.createdAt.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="discoveredAt" className="block text-sm font-medium text-gray-700">Discovered
                                    At</label>
                                <Input id="discoveredAt" {...register('discoveredAt')} placeholder="e.g., 1799"
                                       className="mt-1"/>
                                {errors.discoveredAt &&
                                    <p className="mt-1 text-xs text-red-600">{errors.discoveredAt.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="discoveredBy" className="block text-sm font-medium text-gray-700">Discovered
                                    By</label>
                                <Input id="discoveredBy" {...register('discoveredBy')} className="mt-1"/>
                                {errors.discoveredBy &&
                                    <p className="mt-1 text-xs text-red-600">{errors.discoveredBy.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="presentLocation" className="block text-sm font-medium text-gray-700">Present
                                    Location</label>
                                <Input id="presentLocation" {...register('presentLocation')} className="mt-1"/>
                                {errors.presentLocation &&
                                    <p className="mt-1 text-xs text-red-600">{errors.presentLocation.message}</p>}
                            </div>
                            <div>
                                <label htmlFor={"artifactAdder"} className="block text-sm font-medium text-gray-700">Artifact
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
                            <Textarea id="historicalContext" {...register('historicalContext')} className="mt-1"/>
                            {errors.historicalContext &&
                                <p className="mt-1 text-xs text-red-600">{errors.historicalContext.message}</p>}
                        </div>
                        <div className="col-span-full">
                            <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                                    disabled={isLoading}>
                                {isLoading ? 'Adding Artifact...' : 'Add Artifact'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

