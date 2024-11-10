import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const TeamList = () => {
    const profiles = [1, 2, 3, 4];
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const handleDelete = () => {
        console.log("delete");
    };
    return (
        <>
            <div className="text-headings-light">
                <h1>TeamList</h1>
                <div>
                    {profiles.map((profile) => (
                        <div key={profile} className="flex gap-2">
                            <Link to={`/team/${profile}`}>
                                Profile {profile}
                            </Link>
                            <button onClick={() => setShowDeleteDialog(true)}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <AlertDialog open={showDeleteDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader className="flex flex-row justify-between items-end">
                        <AlertDialogTitle className="text-headings-light">
                            Are you sure?
                        </AlertDialogTitle>
                        <IoIosClose
                            className="h-6 w-6 fill-white cursor-pointer"
                            onClick={() => setShowDeleteDialog(false)}
                        />
                    </AlertDialogHeader>
                    <AlertDialogDescription className={"py-2"}>
                        This action cannot be undone.
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                        <AlertDialogCancel
                            onClick={() => setShowDeleteDialog(false)}
                        >
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => {
                                handleDelete();
                                setShowDeleteDialog(false);
                            }}
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default TeamList;
