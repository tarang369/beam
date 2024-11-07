"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = () => {
        // Perform search action here
        console.log("Searching for:", searchTerm);
        setHasSearched(true);
    };

    const handleClear = () => {
        setSearchTerm("");
        setHasSearched(false);
    };

    return (
        <div className="relative w-full max-w-sm">
            <FaSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-headings-muted" />
            <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={
                    "pl-10 pr-10 " +
                    (hasSearched
                        ? " text-headings-light"
                        : "text-headings-muted")
                }
            />
            {searchTerm && (
                <Button
                    variant="secondary"
                    size={hasSearched ? "icon" : "default"}
                    className="absolute right-0 top-1/2 -translate-y-1/2 border-none"
                    onClick={hasSearched ? handleClear : handleSearch}
                >
                    {hasSearched ? (
                        <IoIosClose className="text-headings-muted h-5 w-5" />
                    ) : (
                        <span className="text-primary-orange">Search</span>
                    )}
                </Button>
            )}
        </div>
    );
}
