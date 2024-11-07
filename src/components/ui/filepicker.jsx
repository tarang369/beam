import { cn } from "@/lib/utils";

const FilePicker = ({
    contianerStyle,
    value,
    placeholder,
    disabled,
    accept,
    label,
    onChange,
    id,
    error,
    description,
}) => {
    return (
        <div className={"group relative " + contianerStyle}>
            <p className="text-sm text-headings-light mb-2">{label}</p>
            <input
                type="file"
                className="sr-only peer"
                id={id}
                onChange={onChange}
                accept={accept}
            />
            <label
                htmlFor={id}
                className={cn(
                    "flex cursor-pointer overflow-hidden rounded-lg border border-borders-default w-[300px]",
                    disabled ? "cursor-not-allowed bg-neutral-base" : "",
                    error ? "border-primary-red" : "border-borders-default"
                )}
            >
                <span className="flex-1 px-4 py-2.5 overflow-hidden text-headings-normal">
                    {value
                        ? value
                        : placeholder
                        ? placeholder
                        : "No file selected"}
                </span>
                <span
                    className={cn(
                        "inline-flex items-center justify-center px-4 py-2.5 border-l text-headings-normal rounded-s-lg ",
                        error ? "border-primary-red" : "border-borders-default"
                    )}
                >
                    Select File
                </span>
            </label>
            <div className="text-sm mt-4">
                {error && (
                    <>
                        <span className="text-red-500 mb-2">Error</span>
                    </>
                )}
                {error ? (
                    <p className="text-headings-normal">{error}</p>
                ) : (
                    <p className="text-headings-muted">{description}</p>
                )}
            </div>
        </div>
    );
};

FilePicker.displayName = "FilePicker";

export { FilePicker };
