import { Outlet } from "react-router-dom";

import Breadcrumbs from "./components/Breadcrumbs";
import SideBar from "./components/SideBar";

// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/*" element={<MainLayout />} />
//             </Routes>
//         </BrowserRouter>
//     );
//     // return (
//     //     <BrowserRouter>
//     //         <div className="w-full mx-auto flex flex-wrap justify-start items-center h-lvh bg-gradient-to-b  to-bg-gradient-dark from-neutral-dark">
//     //             <SideBar
//     //                 onClickImport={() => {
//     //                     handleDialog(DIALOG_TYPE.IMPORT_PLAYERS);
//     //                 }}
//     //             />
//     //             <div>
//     //                 {/* <div className="flex items-center justify-between px-4 py-2  text-white">
//     //                     <div className="flex items-center gap-4">
//     //                         <Button
//     //                             variant="ghost"
//     //                             className="text-white hover:text-white/90"
//     //                         >
//     //                             <FaDownload
//     //                                 className="h-4 w-4 mr-2"
//     //                                 onClick={() => {
//     //                                     handleDialog(
//     //                                         DIALOG_TYPE.IMPORT_PLAYERS
//     //                                     );
//     //                                 }}
//     //                             />
//     //                             Import List
//     //                         </Button>
//     //                         <div className="flex items-center gap-2">
//     //                             <span className="text-primary-orange font-medium">
//     //                                 Paris Saint-Germain F.C.
//     //                             </span>
//     //                             <Button
//     //                                 variant="ghost"
//     //                                 size="icon"
//     //                                 className="h-8 w-8"
//     //                             >
//     //                                 <FaPencilRuler className="h-4 w-4 text-primary-orange" />
//     //                             </Button>
//     //                         </div>
//     //                     </div>
//     //                     <div className="flex items-center gap-4">
//     //                         <div className="relative w-80">
//     //                             <Input
//     //                                 type="search"
//     //                                 placeholder="Find Player"
//     //                                 className="bg-zinc-900 border-none text-white placeholder:text-gray-400"
//     //                             />
//     //                         </div>
//     //                         <div className="flex items-center gap-2">
//     //                             <Button
//     //                                 variant="ghost"
//     //                                 className="text-white hover:text-white/90"
//     //                             >
//     //                                 <FaList className="h-4 w-4 mr-2" />
//     //                                 Roster Details
//     //                             </Button>
//     //                             <Button
//     //                                 variant="ghost"
//     //                                 className="text-white hover:text-white/90"
//     //                             >
//     //                                 <IconLayoutGrid className="h-4 w-4 mr-2" />
//     //                                 Formation Overview
//     //                             </Button>
//     //                         </div>
//     //                     </div>
//     //                 </div> */}

//     //                 <Routes>
//     //                     <Route path="/" element={<TeamsList />} />
//     //                     <Route
//     //                         path="/teams/:teamId/*"
//     //                         element={<TeamLayout />}
//     //                     />
//     //                 </Routes>
//     //                 {/* <Search /> */}
//     //                 <Dialog open={showDialog} onOpenChange={closeDialog}>
//     //                     {dialogContent()}
//     //                 </Dialog>
//     //             </div>
//     //         </div>
//     //     </BrowserRouter>
//     // );
// }

// export default App;

const AppLayout = () => {
    return (
        <div className="w-full mx-auto flex h-lvh bg-gradient-to-b  to-bg-gradient-dark from-neutral-dark">
            <SideBar />
            <div className="px-10 pt-10 w-full">
                <Breadcrumbs />
                <Outlet /> {/* This will render the child route components */}
            </div>
        </div>
    );
};
export default AppLayout;
