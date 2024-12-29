import axiosInstance from "@/lib/axiosInstance.ts";
import {artifactSchema} from "@/lib/schema.ts";
import {z} from "zod";

type ArtifactFormData = z.infer<typeof artifactSchema>;

export const addArtifacts = async (fromData: ArtifactFormData) => {
    const response = await axiosInstance.post("/artifacts", fromData);
    return response.data;
}

export const fetchArtifacts = async () => {
    const response = await axiosInstance.get("/artifacts");
    return response.data;
}