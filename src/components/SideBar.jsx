import { FaUpload } from "react-icons/fa";
const SideBar = () => {
    //active sidebar

    return (
        <nav className="bg-bg-pitch-black w-[60px] h-full pt-[18px] flex flex-col items-center">
            <img className="w-[30px] h-auto mb-10" src="/logo.png" alt="logo" />

            <div className="">
                {[
                    {
                        name: "import players",
                        icon: (
                            <FaUpload
                                className="w-[22px] h-full text-primary-orange"
                                aria-label="import-players-icon"
                            />
                        ),
                    },
                ].map((icon, index) => (
                    <div
                        key={index}
                        className="h-6 inline-flex items-center gap-1"
                    >
                        <div className="rounded-full bg-primary-orange h-1 w-1" />
                        {icon.icon}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default SideBar;
