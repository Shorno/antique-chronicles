import {AlertTriangle} from "lucide-react";

export default function ServerErrorMessage() {
    return (

        <div
            className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center min-h-[300px] w-96  md:w-fit bg-gray-100 border border-gray-300 rounded-lg p-8 text-center">
            <div className="mb-6">
                <AlertTriangle className="w-16 h-16 text-gray-700"/>
            </div>
            <h2 className="md:text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong on our end. Please try
                again later.</h2>
        </div>

    )
}