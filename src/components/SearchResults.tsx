import {Link} from "react-router";
import {slugify} from "@/lib/slugify.ts";

export interface SearchResult {
    _id: string;
    name: string;
    imageUrl: string;
    type: string;
    presentLocation: string;
}

interface SearchResultsProps {
    results: SearchResult[];
    query: string;
    isLoading: boolean;
}

export function SearchResults({results, query, isLoading = true}: SearchResultsProps) {
    if (isLoading) {
        return (
            <ul className="py-2">
                {[...Array(1)].map((_, index) => (
                    <li
                        key={index}
                        className="px-4 py-3 flex items-center space-x-4"
                    >
                        <div className="w-16 h-16 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div className="space-y-2 flex-1">
                            <div className="h-4 bg-gray-200 rounded w-2/4 animate-pulse"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/5 animate-pulse"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }

    if (results.length === 0 && query.length >= 2) {
        return (
            <ul className="py-2">
                <li className="px-4 py-3 flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-500">No Artifact found for &quot;{query}&quot;</p>
                        <p className="text-sm text-gray-400 mt-1">Try adjusting your search terms</p>
                    </div>
                </li>
            </ul>
        )
    }

    return (
        <ul className="py-2">
            {results.map((result) => (
                <Link to={`/artifacts/${slugify(result.name)}`}
                    key={result._id}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150 flex items-center space-x-4"
                >
                    <img
                        src={result.imageUrl}
                        alt={result.name}
                        className="w-16 h-16 object-cover rounded-lg"
                        loading="lazy"
                    />
                    <div>
                        <h3 className="text-sm font-bold text-gray-900">{result.name}</h3>
                        <h3 className="text-sm font-medium text-gray-900">{result.type}</h3>
                        <h3 className="text-sm font-medium text-gray-900">{result.presentLocation}</h3>
                    </div>
                </Link>
            ))}
        </ul>
    );
}