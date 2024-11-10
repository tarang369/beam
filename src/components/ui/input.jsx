import { cn } from "@/lib/utils";
import * as React from "react";

const Input = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <input
            className={cn(
                "flex h-11 w-full text-headings-light rounded-lg border border-borders-default bg-transparent px-3 py-2 text-sm disabled:bg-neutral-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder-headings-muted disabled:placeholder-headings-disabled outline-none",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";

export { Input };
