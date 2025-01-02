import {Card, CardContent, CardFooter} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {useNavigate} from "react-router"
import {slugify} from "@/lib/slugify.ts"
import {Edit, Trash2, MoreVertical} from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogCancel,
    AlertDialogAction,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {useState} from 'react'

interface ArtifactCardProps {
    id: string
    name: string
    imageUrl: string
    type: string
    createdAt: string
    showUpdateButton?: boolean
    onDelete?: () => void
    showDeleteButton?: boolean
}

export function ArtifactCard({
                                 name,
                                 imageUrl,
                                 type,
                                 createdAt,
                                 showUpdateButton = false,
                                 onDelete,
                                 showDeleteButton = false,
                             }: ArtifactCardProps) {
    const navigate = useNavigate()
    const [isAlertOpen, setIsAlertOpen] = useState(false)

    return (
        <Card
            className="w-full bg-white border rounded-md border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
                <div className="aspect-square mb-4 overflow-hidden rounded-md bg-white border border-gray-200">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-cover filter grayscale"
                    />
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
                        <p className="text-sm text-gray-600">Type: {type}</p>
                        <p className="text-sm text-gray-600">Created: {createdAt}</p>
                    </div>
                    {(showUpdateButton || showDeleteButton) && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreVertical className="h-4 w-4"/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {showUpdateButton && (
                                    <DropdownMenuItem onClick={() => navigate(`/my-artifacts/update/${slugify(name)}`)}>
                                        <Edit className="mr-2 h-4 w-4"/>
                                        <span>Update</span>
                                    </DropdownMenuItem>
                                )}
                                {showDeleteButton && onDelete && (
                                    <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                                        <AlertDialogTrigger asChild>
                                            <DropdownMenuItem onSelect={(event) => {
                                                event.preventDefault()
                                                setIsAlertOpen(true)
                                            }}>
                                                <Trash2 className="mr-2 h-4 w-4"/>
                                                <span>Delete</span>
                                            </DropdownMenuItem>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure to delete {name}?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This will permanently
                                                    delete {name} artifact from the database.
                                                    This action cannot be undone.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction
                                                    onClick={() => {
                                                        onDelete()
                                                        setIsAlertOpen(false)
                                                    }}>
                                                    Delete
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            </CardContent>
            <CardFooter className="bg-gray-200 border-t border-gray-300 p-4">
                <Button
                    variant="link"
                    onClick={() => navigate(`/artifacts/${slugify(name)}`, {state: {name}})}
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white"
                >
                    View Detail
                </Button>
            </CardFooter>
        </Card>
    )
}

