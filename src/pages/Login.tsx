import {z} from "zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link, useLocation, useNavigate} from "react-router";
import {loginSchema} from "@/lib/schema.ts";
import toast from "react-hot-toast";
import AuthLayout from "@/layout/AuthLayout.tsx";
import useAuthStore from "@/store/authStore.ts";
import GoogleIcon from "@/components/ui/GoogleIcon.tsx";
import useDynamicTitle, {SITE_TITLE} from "@/lib/dynamicTitle.tsx";
import {verify} from "@/lib/api.ts";

type FormData = z.infer<typeof loginSchema>;

export default function Login() {
    useDynamicTitle(`Login - ${SITE_TITLE}`)

    const {login, signInWithGoogle} = useAuthStore();
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(loginSchema)
    });
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            toast.success('Sign in successful');
            navigate(from, {replace: true});
        } catch (error: any) {
            toast.error(`Sign in failed ${error.message}`);
        }
    }


    const onSubmit = async (formData: FormData) => {
        const {email, password} = formData;
        try {
            setIsLoading(true);
            await login(email, password);
            toast.success('Login successful');
            await verify(email);

            navigate(from, {replace: true});
        } catch (error: any) {
            switch (error.code) {
                case 'auth/invalid-credential':
                    toast.error('Invalid Credentials. Please try again');
                    break;
                default:
                    toast.error('Failed to login: ' + error.message);
            }
        } finally {
            setIsLoading(false);
        }
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
            <Button onClick={handleGoogleSignIn} type="submit" className="w-full bg-gray-800 hover:bg-amber-700 my-4">
                Sign in with Google <GoogleIcon/>
            </Button>
        </AuthLayout>
    );
}