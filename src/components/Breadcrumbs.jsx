import { useState } from "react";
import {
    FaAlignJustify,
    FaBars,
    FaUpload,
    FaVectorSquare,
} from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";

import { Button } from "./ui/button";
import Search from "./ui/search";

const teams = [
    {
        id: 1,
        name: "Manchester United",
    },
    { id: 2, name: "Paris Saint-Germain" },
];

const VIEW = {
    LIST: "LIST",
    FORMATION: "FORMATION",
};
const Breadcrumbs = () => {
    const { id } = useParams(); // Get the team id from URL params
    const getTeamName = () => {
        return teams.find((e) => e.id === Number(id))?.name;
    };

    const [view, setView] = useState(VIEW.LIST);
    return (
        <nav className="px-4 py-2 flex justify-between w-full">
            <div className="flex items-center text-white">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-primary-orange" : "none"
                    }
                >
                    <span className="flex gap-2 font-semibold items-center text-xl">
                        <FaUpload className="w-6" />
                        Import
                    </span>
                </NavLink>
                {id && (
                    <>
                        <span className="mx-2 text-xl">{">"}</span>
                        <NavLink
                            to={`/team/${id}`}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-primary-orange flex gap-2 items-center font-semibold text-xl"
                                    : "none"
                            }
                        >
                            <FaBars />
                            {getTeamName()}
                        </NavLink>
                    </>
                )}
            </div>
            <div className="flex gap-2 text-headings-normal">
                <Search placeholder="Find Player" />
                {id ? (
                    <div className="border border-borders-default rounded-lg flex min-w-[372px] text-sm text-center items-center cursor-pointer text-headings-disabled">
                        <div
                            className={`w-full h-full flex gap-2 items-center justify-center rounded-s-lg border-r border-borders-default ${
                                view === VIEW.LIST &&
                                "bg-neutral-base text-headings-normal"
                            }`}
                            onClick={() => setView(VIEW.LIST)}
                        >
                            <FaAlignJustify />
                            Roster Details
                        </div>
                        <div
                            className={`w-full h-full flex gap-2 items-center justify-center rounded-e-lg  ${
                                view === VIEW.FORMATION &&
                                "bg-neutral-base text-headings-normal"
                            }`}
                            onClick={() => setView(VIEW.FORMATION)}
                        >
                            <FaVectorSquare />
                            Formation Overview
                        </div>
                    </div>
                ) : (
                    <Button>Import Team</Button>
                )}
            </div>
        </nav>
    );
};

export default Breadcrumbs;
