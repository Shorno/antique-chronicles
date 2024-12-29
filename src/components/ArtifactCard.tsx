import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {useNavigate} from "react-router";

interface ArtifactCardProps {
    id: string;
    name: string;
    imageUrl: string;
    type: string;
    createdAt: string;
}

export function ArtifactCard({ id, name, imageUrl, type, createdAt }: ArtifactCardProps) {
    const navigate = useNavigate();

    return (
        <Card className="w-full bg-white border rounded-md border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
                <div className="aspect-square mb-4 overflow-hidden rounded-md bg-white border border-gray-200">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-cover filter grayscale"
                    />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
                <p className="text-sm text-gray-600">Type: {type}</p>
                <p className="text-sm text-gray-600">Created: {createdAt}</p>
            </CardContent>
            <CardFooter className="bg-gray-200 border-t border-gray-300 p-4">
                <Button
                    onClick={() => navigate(`/artifact/${id}`)}
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white"
                >
                    View Detail
                </Button>
            </CardFooter>
        </Card>
    );
}

