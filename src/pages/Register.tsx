import {z} from "zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router";
import {registrationSchema} from "@/lib/schema.ts";
import toast from "react-hot-toast";
import RegBG from "@/assets/Ancient-artifacts.jpg";

type FormData = z.infer<typeof registrationSchema>


export default function Register() {
    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(registrationSchema)
    })


    const onSubmit = async (formData: FormData) => {
        setIsLoading(true)
        console.log(formData)
        toast.success('Registration successful')
        setIsLoading(false)
    }
    return (
        <>
            <div
                className="min-h-screen bg-cover bg-fixed  flex items-center justify-center p-4 relative"
                style={{backgroundImage: `url(${RegBG})`}}>
                <div className="absolute inset-0 bg-primaryBlack/35"></div>

                <div className="max-w-lg w-full  shadow-xl overflow-hidden z-20 rounded-none bg-primaryBlack">
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-center text-white mb-20">Register for Artifact
                            Collection</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label htmlFor="name"
                                       className="block text-sm font-medium text-white">Name</label>
                                <Input id="name" {...register('name')} className="mt-1 bg-white"/>
                                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="email"
                                       className="block text-sm font-medium text-white">Email</label>
                                <Input id="email" type="email" {...register('email')} className="mt-1 bg-white"/>
                                {errors.email &&
                                    <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="photoURL" className="block text-sm font-medium text-white">Photo
                                    URL</label>
                                <Input id="photoURL" {...register('photoURL')} className="mt-1 bg-white"/>
                                {errors.photoURL &&
                                    <p className="mt-1 text-xs text-red-600">{errors.photoURL.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block text-sm font-medium text-white">Password</label>
                                <Input id="password" type="password" {...register('password')} className="mt-1 bg-white"/>
                                {errors.password &&
                                    <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>}
                            </div>
                            <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700"
                                    disabled={isLoading}>
                                {isLoading ? 'Registering...' : 'Register'}
                            </Button>
                        </form>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-amber-600 hover:text-amber-500">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}