import "@mantine/core/styles.css";

import DataTable from "@/components/DataTable/DataTable";
// import Example from "@/components/PlayerTable";
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
import { MantineProvider } from "@mantine/core";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

// import { Link } from "react-router-dom";

// Sample data for demonstration
const sampleData = Array.from({ length: 100 }, (_, index) => ({
    playerName: `Player ${index + 1}`,
    jerseyNumber: Math.floor(Math.random() * 99) + 1,
    starter: Math.random() > 0.5 ? "Yes" : "No",
    position: ["Forward", "Midfielder", "Defender", "Goalkeeper"][
        Math.floor(Math.random() * 4)
    ],
    height: (1.7 + Math.random() * 0.3).toFixed(2) + " m",
    weight: (65 + Math.random() * 25).toFixed(0) + " kg",
    nationality: ["French", "Brazilian", "Spanish", "Argentine"][
        Math.floor(Math.random() * 4)
    ],
    appearances: Math.floor(Math.random() * 50),
    minutesPlayed: Math.floor(Math.random() * 3000),
}));

const columns = [
    { key: "playerName", label: "Player Name" },
    { key: "jerseyNumber", label: "Jersey Number" },
    { key: "starter", label: "Starter" },
    { key: "position", label: "Position" },
    { key: "height", label: "Height" },
    { key: "weight", label: "Weight" },
    { key: "nationality", label: "Nationality" },
    { key: "appearances", label: "Appearances" },
    { key: "minutesPlayed", label: "Minutes Played" },
];
const TeamList = () => {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const handleDelete = () => {
        console.log("delete");
    };
    return (
        <>
            <div className="text-headings-light">
                <MantineProvider>
                    <div className="min-h-screen">
                        <DataTable
                            title="Roster Details"
                            data={sampleData}
                            columns={columns}
                            onColumnHide={(columnKey) =>
                                console.log("Column hidden:", columnKey)
                            }
                        />
                    </div>
                </MantineProvider>
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
