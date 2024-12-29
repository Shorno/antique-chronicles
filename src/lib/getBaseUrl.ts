export function getBaseApiUrl() {
    if (import.meta.env.MODE === 'development') {
        return import.meta.env.VITE_DEV_API_ENDPOINT;
    } else if (import.meta.env.MODE === 'production') {
        return import.meta.env.VITE_PRODUCTION_API_ENDPOINT;
    }
    return '';
}