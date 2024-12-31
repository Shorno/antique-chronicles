import {z} from "zod";

export const registrationSchema = z.object({
    displayName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    photoURL: z.string().nonempty('Photo URL is required').url('Invalid URL'),
    password: z.string()
        .min(6, 'Password must be at least 6 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
})


export const loginSchema = z.object({
    email: z.string().nonempty('Email is required').email('Invalid email address'),
    password: z.string().nonempty('Password is required')
})

export const artifactSchema = z.object({
    name: z.string().min(1, "Artifact name is required"),
    imageUrl: z.string().url("Invalid image URL"),
    type: z.enum(["Sculptures", "Tools", "Weapons", "Documents", "Writings", "Other"]),
    historicalContext: z.string().min(1, "Historical context is required"),
    createdAt: z.string().min(1, "Creation date is required"),
    discoveredAt: z.string().min(1, "Discovery date is required"),
    discoveredBy: z.string().min(1, "Discoverer is required"),
    presentLocation: z.string().min(1, "Present location is required"),
    artifactAdder: z.string().min(1, "Artifact adder is required"),
    adderEmail: z.string().email("Invalid email address"),
    likeCount: z.number().default(0),
    likes: z.array(z.string()).default([]),
});

export const likeSchema = z.object({
    artifactName: z.string().min(1, "Artifact name is required"),
    userEmail: z.string().email("Invalid email address"),
});

export type Like = z.infer<typeof likeSchema>;