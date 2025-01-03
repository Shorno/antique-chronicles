import  {ChangeEvent, useState,FocusEvent} from 'react';
import {Search, X} from 'lucide-react';
import {useQuery} from '@tanstack/react-query';
import {SearchResults} from './SearchResults';
import {searchArtifactsByName} from "@/lib/api.ts";

export function SearchBar() {
    const [artifactName, setArtifactName] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const {data: results = [], isLoading} = useQuery({
        queryKey: ['search', artifactName],
        queryFn: () => searchArtifactsByName(artifactName),
        enabled: artifactName.length >= 2,
    });

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setArtifactName(value);
        setIsOpen(true);
    };

    const clearSearch = () => {
        setArtifactName('');
        setIsOpen(false);
    };

    const handleBlur = (e: FocusEvent) => {
        const isClickInsideSearch = (e.relatedTarget)?.closest('.search-container');
        if (!isClickInsideSearch) {
            setIsOpen(false);
        }
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto search-container" onBlur={handleBlur}>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400"/>
                </div>
                <input
                    type="text"
                    value={artifactName}
                    onChange={handleSearch}
                    onFocus={() => setIsOpen(true)}
                    placeholder="Search artifcats by name..."
                    className="block w-full rounded-md pl-10 pr-12 py-3 border border-gray-200 bg-white focus:ring-2 focus:ring-gray-600 focus:border-transparent outline-none transition-all duration-200 shadow-sm"
                />
                {artifactName && (
                    <button
                        onClick={clearSearch}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        tabIndex={0}
                    >
                        <X className="h-5 w-5 text-gray-400 hover:text-gray-600"/>
                    </button>
                )}
            </div>

            {isOpen && artifactName.length >= 2 && (
                <div
                    className="absolute mt-2 w-full bg-white rounded-md shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50"
                    tabIndex={0}
                >
                    <SearchResults
                        results={results}
                        query={artifactName}
                        isLoading={isLoading}
                    />
                </div>
            )}
        </div>
    );
}