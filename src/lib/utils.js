import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const deepEqual = (obj1, obj2) => {
    return (
        JSON.stringify(obj1, (_, value) =>
            typeof value === "number" ? value.toString() : value
        ) ===
        JSON.stringify(obj2, (_, value) =>
            typeof value === "number" ? value.toString() : value
        )
    );
};
