import { cn } from "@/lib/utils";

const FilePicker = ({ contianerStyle, value, placeholder, disabled }) => {
    return (
        <div className={"group relative " + contianerStyle}>
            <input type="file" className="sr-only peer" id="file-1" />
            <label
                htmlFor="file-1"
                className={cn(
                    "flex w-full cursor-pointer overflow-hidden rounded-lg border border-borders-default",
                    disabled ? "cursor-not-allowed bg-neutral-base" : ""
                )}
            >
                <span
                    className={cn(
                        "flex-1 px-4 py-2.5",
                        value ? "text-headings-light" : "text-headings-muted"
                    )}
                >
                    {value
                        ? value
                        : placeholder
                        ? placeholder
                        : "Choose a file"}
                </span>
                <span className="inline-flex items-center justify-center px-4 py-2.5 border-l border-borders-default text-headings-normal rounded-s-lg">
                    Select File
                </span>
            </label>
        </div>
    );
};

FilePicker.displayName = "FilePicker";

export { FilePicker };
