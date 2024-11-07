import "./App.css";

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

import { Button } from "./components/ui/button";
import { FilePicker } from "./components/ui/filepicker";

function App() {
    return (
        <div className="w-full mx-auto flex flex-wrap justify-start items-center h-lvh bg-gradient-to-b  to-bg-gradient-dark from-neutral-dark font-poppins">
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
                <Search />
                <Dialog>
                    <DialogTrigger>Open</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}

export default App;
