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

export const fetchArtifactByName = async (artifactName: string) => {
    const response = await axiosInstance.get(`/artifacts/${artifactName}`);
    return response.data;
}

export const updateArtifact = async (artifactName: string, formData: ArtifactFormData) => {
    const response = await axiosInstance.patch(`/artifacts/${artifactName}`, formData);
    return response.data;
}

export const deleteArtifact = async (artifactName: string) => {
    const response = await axiosInstance.delete(`/artifacts/${artifactName}`);
    return response.data;
}

export const getArtifactsByEmail = async (email: string) => {
    const response = await axiosInstance.get(`/artifacts/user/${email}`);
    return response.data;
}

export const toggleLike = async (artifactName: string, userEmail: string) => {
    const response = await axiosInstance.post(`/artifacts/${artifactName}/toggle-like`, {userEmail});
    return response.data;
};

export const getLikeStatus = async (artifactName: string, userEmail: string) => {
    const response = await axiosInstance.get(`/artifacts/${artifactName}/like-status?userEmail=${userEmail}`);
    return response.data;
};

export const getFeaturedArtifacts = async () => {
    const response = await axiosInstance.get("/featured-artifacts/");
    return response.data;
}

export const searchArtifactsByName = async (artifactName: string) => {
    const response = await axiosInstance.get(`/artifacts/search/${artifactName}`);
    return response.data;
}

export const verify = async (user: string | null | undefined) => {
    const response = await axiosInstance.post("/auth/verify", {user});
    return response.data;
}
export const clearJWTToken = async () => {
    return axiosInstance.post("/auth/logout");
}
export const getLikedArtifacts = async (email: string) => {
    const response = await axiosInstance.get(`/liked-artifacts/${email}`);
    return response.data;
}