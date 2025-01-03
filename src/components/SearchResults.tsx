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
}

export function SearchResults({results, query}: SearchResultsProps) {

    if (results.length === 0 && query.length >= 2) {
        return (
            <div className="px-4 py-6 text-center text-gray-500">
                No results found for "{query}"
            </div>
        );
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