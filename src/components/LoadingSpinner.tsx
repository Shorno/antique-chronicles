export default function LoadingSpinner({isFullSection = true}: { isFullSection?: boolean }) {
    return (
        <div
            className={`flex items-center justify-center ${isFullSection ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""}  `}>
            <div
                className="w-20 h-20 border-4 border-primaryBlack border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}
