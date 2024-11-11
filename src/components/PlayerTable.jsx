import "@mantine/core/styles.css";
import "@mantine/dates/styles.css"; //if using mantine date picker features
import "mantine-react-table/styles.css"; //make sure MRT styles were imported in your app root (once)

import { MantineProvider } from "@mantine/core";
import { MantineReactTable } from "mantine-react-table";
import { useMemo } from "react";

const data = [
    {
        id: 1,
        firstName: "Hugh",
        lastName: "Mungus",
        gender: "Male",
        age: 42,
    },
    {
        id: 2,
        firstName: "Leroy",
        lastName: "Jenkins",
        gender: "Male",
        age: 51,
    },
    {
        id: 3,
        firstName: "Candice",
        lastName: "Nutella",
        gender: "Female",
        age: 27,
    },
    {
        id: 4,
        firstName: "Micah",
        lastName: "Johnson",
        gender: "Other",
        age: 32,
    },
];

const Example = () => {
    const columns = useMemo(
        () => [
            {
                accessorKey: "id",
                header: "ID",
            },
            {
                accessorKey: "firstName",
                header: "First Name",
            },
            {
                accessorKey: "lastName",
                header: "Last Name",
            },
            {
                accessorKey: "gender",
                header: "Gender",
                filterFn: "equals",
                mantineFilterSelectProps: {
                    data: ["Male", "Female", "Other"],
                },
                filterVariant: "select",
            },
            {
                accessorKey: "age",
                header: "Age",
                filterVariant: "range",
            },
        ],
        []
    );

    return (
        <MantineProvider
            theme={{
                primaryColor: "dark",
                white: "dark",
                black: "white",
            }}
        >
            <MantineReactTable
                columns={columns}
                data={data}
                columnFilterDisplayMode="popover"
            />
        </MantineProvider>
    );
};

export default Example;
