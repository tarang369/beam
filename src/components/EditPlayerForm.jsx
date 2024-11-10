import { deepEqual } from "@/lib/utils";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

const EditPlayerForm = ({
    data = {
        name: "",
        jersey: 11,
        height: "",
        weight: "",
        nationality: "",
        position: "",
        starter: false,
    },
}) => {
    const [formValues, setFormValues] = useState(data);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const handleEditPlayer = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        const isPlayerDataChanged = !deepEqual(formValues, data);

        setIsButtonEnabled(isPlayerDataChanged);
    }, [data, formValues]);
    return (
        <div className="flex justify-between flex-col h-full">
            <div className="flex flex-col gap-2">
                <div className="flex gap-4 w-full">
                    <label className="text-headings-light text-sm w-3/5">
                        Player Name
                        <Input
                            className="mt-2"
                            name="name"
                            type="text"
                            value={formValues.name}
                            onChange={(e) => handleEditPlayer(e)}
                        />
                    </label>
                    <label className="text-headings-light text-sm w-2/5">
                        Jersey
                        <Input
                            className="mt-2"
                            name="jersey"
                            type="text"
                            maxLength={2}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            value={formValues.jersey}
                            onChange={(e) => handleEditPlayer(e)}
                        />
                    </label>
                </div>
                <div className="flex gap-4 w-full">
                    <label className="text-headings-light text-sm w-full">
                        Height
                        <Input
                            className="mt-2"
                            name="height"
                            type="text"
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            value={formValues.height}
                            onChange={(e) => handleEditPlayer(e)}
                        />
                    </label>
                    <label className="text-headings-light text-sm w-full">
                        Weight
                        <Input
                            className="mt-2"
                            name="weight"
                            type="text"
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            value={formValues.weight}
                            onChange={(e) => handleEditPlayer(e)}
                        />
                    </label>
                </div>
                <div>
                    <label className="text-headings-light text-sm">
                        Nationality
                    </label>
                    <Select
                        value={formValues.nationality}
                        onValueChange={(e) =>
                            handleEditPlayer({
                                target: {
                                    name: "nationality",
                                    value: e,
                                },
                            })
                        }
                    >
                        <SelectTrigger className="w-full mt-2">
                            <SelectValue placeholder="Select a Nationality" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="usa">USA</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="mexico">Mexico</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className="text-headings-light text-sm">
                        Position
                        <Select
                            value={formValues.position}
                            onValueChange={(e) =>
                                handleEditPlayer({
                                    target: {
                                        name: "position",
                                        value: e,
                                    },
                                })
                            }
                        >
                            <SelectTrigger className="w-full mt-2">
                                <SelectValue placeholder="Select a Position" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="forward">Forward</SelectItem>
                                <SelectItem value="midfielder">
                                    Midfielder
                                </SelectItem>
                                <SelectItem value="defender">
                                    Defender
                                </SelectItem>
                                <SelectItem value="goalkeeper">
                                    Goalkeeper
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </label>
                </div>
                <RadioGroup
                    value={formValues.starter}
                    onValueChange={(e) =>
                        handleEditPlayer({
                            target: {
                                name: "starter",
                                value: e,
                            },
                        })
                    }
                >
                    <label className="text-headings-light text-sm">
                        Starter
                        <div className="flex items-center space-x-2 mt-2">
                            <RadioGroupItem value={false} id="no" />
                            <label htmlFor="no">No</label>
                            <RadioGroupItem value={true} id="yes" />
                            <label htmlFor="yes">Yes</label>
                        </div>
                    </label>
                </RadioGroup>
            </div>
            <div className="self-end flex gap-2">
                <Button className="w-fit" disabled={!isButtonEnabled}>
                    Edit Player
                </Button>
            </div>
        </div>
    );
};

export default EditPlayerForm;
