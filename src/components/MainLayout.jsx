import { DIALOG_TYPE } from "@/lib/constants";
import { useState } from "react";
import { FaPencilAlt, FaUpload } from "react-icons/fa";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

import EditPlayerForm from "./EditPlayerForm";
import SideBar from "./SideBar";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { FilePicker } from "./ui/filepicker";

function MainLayout() {
    const location = useLocation();
    let { teamId } = useParams();

    const [file, setFile] = useState(null);
    const [showDialog, setShowDialog] = useState(false);
    const [dialogType, setDialogType] = useState(null);
    const [fileError, setFileError] = useState("");
    const fileReader = new FileReader();

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (file) {
            fileReader.onload = function (event) {
                const csvOutput = event.target.result;
            };

            fileReader.readAsText(file);
        }
    };

    const handleDialog = (type) => {
        setDialogType(type);
        setShowDialog(true);
    };
    const closeDialog = () => {
        setShowDialog(false);
        setDialogType(null);
    };

    const dialogContent = () => {
        switch (dialogType) {
            case DIALOG_TYPE.IMPORT_PLAYERS:
                return (
                    <DialogContent className="max-w-[800px] h-[600px] flex flex-col">
                        <DialogHeader>
                            <DialogTitle className="mb-2.5 font-poppins tracking-wide">
                                Importer
                            </DialogTitle>
                            <div className="border border-borders-default" />
                        </DialogHeader>
                        <div className="flex justify-between flex-col h-full">
                            <FilePicker
                                accept={".csv"}
                                label={"Roster File"}
                                value={file?.name}
                                onChange={handleOnChange}
                                id={"csvFileInput"}
                                error={fileError}
                                description={"File must be in .csv format"}
                            />
                            <div className="h-full mt-8">
                                <p className="text-headings-light text-sm">
                                    File Summary
                                </p>
                                <div className="text-sm flex mt-6 text-headings-normal">
                                    <div className="w-full">Total Players</div>
                                    <div className="w-full">Goalkeepers</div>
                                    <div className="w-full">Defenders</div>
                                    <div className="w-full">Midfielders</div>
                                    <div className="w-full">Forwards</div>
                                </div>
                                <div className="text-sm flex mt-2 text-headings-light">
                                    <div className="w-full">32</div>
                                    <div className="w-full">4</div>
                                    <div className="w-full">11</div>
                                    <div className="w-full">13</div>
                                    <div className="w-full">4</div>
                                </div>
                            </div>
                            <Button
                                disabled={!file?.name}
                                className="w-fit self-end"
                            >
                                Import
                            </Button>
                        </div>
                    </DialogContent>
                );
            case DIALOG_TYPE.EDIT_PLAYER:
                return (
                    <DialogContent className="max-w-[480px] h-fit flex flex-col">
                        <DialogHeader>
                            <DialogTitle className="font-poppins antialiased leading-[27px] text-headings-light text-lg tracking-wide ">
                                Edit Player
                            </DialogTitle>
                        </DialogHeader>
                        <EditPlayerForm />
                    </DialogContent>
                );
        }
    };

    function TeamsList() {
        return (
            <div className="p-4 text-headings-light">
                Your existing teams table here
            </div>
        );
    }

    function TeamContent() {
        return (
            <div className="text-headings-light">
                Your existing team management UI
            </div>
        );
    }

    console.log(teamId);
    return (
        <div className="w-full mx-auto flex flex-wrap justify-start items-start h-lvh bg-gradient-to-b to-bg-gradient-dark from-neutral-dark">
            <SideBar
                onClickImport={() => handleDialog(DIALOG_TYPE.IMPORT_PLAYERS)}
            />
            <div className="flex-1">
                {/* Breadcrumb always visible */}
                <div className="flex items-center px-4 py-3 text-white">
                    <div className="text-primary-orange font-medium flex">
                        <FaUpload
                            className="h-5 w-5 mr-3 cursor-pointer"
                            onClick={() =>
                                handleDialog(DIALOG_TYPE.IMPORT_PLAYERS)
                            }
                        />
                        Import List
                    </div>

                    {teamId && (
                        <>
                            <span className="mx-2 text-primary-orange">{`>`}</span>
                            <span className="text-primary-orange font-medium">
                                {teamId === "psg"
                                    ? "Paris Saint-Germain F.C."
                                    : teamId}
                            </span>
                            <button className="ml-2 text-primary-orange">
                                <FaPencilAlt className="h-4 w-4" />
                            </button>
                        </>
                    )}
                </div>

                {/* Routes content */}
                <Routes>
                    <Route path="/" element={<TeamsList />} />
                    <Route path="/teams/:teamId/*" element={<TeamContent />} />
                </Routes>

                {/* Dialog */}
                <Dialog open={showDialog} onOpenChange={closeDialog}>
                    {dialogContent()}
                </Dialog>
            </div>
        </div>
    );
}

export default MainLayout;
