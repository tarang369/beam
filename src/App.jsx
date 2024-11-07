import SideBar from "@/components/SideBar";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Search from "@/components/ui/search";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

import { Button } from "./components/ui/button";
import { FilePicker } from "./components/ui/filepicker";

function App() {
    const [file, setFile] = useState();
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
    return (
        <div className="w-full mx-auto flex flex-wrap justify-start items-center h-lvh bg-gradient-to-b  to-bg-gradient-dark from-neutral-dark">
            <SideBar />
            <div className="">
                {/* <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r1" />
                        <label htmlFor="r1">Default</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <label htmlFor="r2">Comfortable</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="compact" id="r3" />
                        <label htmlFor="r3">Compact</label>
                    </div>
                </RadioGroup>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select> */}
                {/* <FilePicker />
                <Button size="icon">+</Button>
                <Button>Continue</Button>
                <Button disabled>Continue</Button> */}
                {/* <Search /> */}
                <Dialog>
                    <DialogTrigger>Open</DialogTrigger>
                    <DialogContent className="max-w-[800px] h-[600px] flex flex-col">
                        <DialogHeader>
                            <DialogTitle className="mb-2.5 font-poppins">
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
                                disabled={!!file?.name}
                                className="w-fit self-end"
                            >
                                Import
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}

export default App;
