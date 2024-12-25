import {z} from "zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router";
import {loginSchema} from "@/lib/schema.ts";
import toast from "react-hot-toast";
import AuthLayout from "@/layout/AuthLayout.tsx";

type FormData = z.infer<typeof loginSchema>;

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (formData: FormData) => {
        setIsLoading(true);
        console.log(formData);
        toast.success('Login successful');
        setIsLoading(false);
    };

    return (
        <AuthLayout title={"Welcome back to"}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                    <Input id="email" type="email" {...register('email')} className="mt-1 bg-white"/>
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                    <Input id="password" type="password" {...register('password')} className="mt-1 bg-white"/>
                    {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>}
                </div>
                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Log in'}
                </Button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-amber-600 hover:text-amber-500">
                    Register
                </Link>
            </p>
        </AuthLayout>
    );
}