import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
    "inline-flex rounded-lg font-medium justify-center gap-2 whitespace-nowrap leading-[21px] text-sm",
    {
        variants: {
            variant: {
                primary:
                    "bg-primary-orange text-headings-light hover:bg-primary-dark-orange disabled:bg-neutral-base disabled:text-headings-muted",
                secondary:
                    "border border-borders-default text-headings-normal hover:text-headings-light disabled:text-headings-muted",
                danger: "bg-primary-red text-headings-light",
            },
            size: {
                default: "h-11 px-5 pt-3 pb-[11px]",
                icon: "h-11 px-4 pt-3 pb-[11px]",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
