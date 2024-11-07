import "@mantine/core/styles.css";
import "@mantine/dates/styles.css"; //if using mantine date picker features
import "mantine-react-table/styles.css"; //make sure MRT styles were imported in your app root (once)

import { Divider, Flex, Stack, Table, Title } from "@mantine/core";
import {
    MRT_GlobalFilterTextInput,
    MRT_TableBodyCellValue,
    MRT_TablePagination,
    MRT_ToolbarAlertBanner,
    flexRender,
    useMantineReactTable,
} from "mantine-react-table";

const data = [
    {
        name: {
            firstName: "Christopher",
            lastName: "Lee",
        },
        address: "555 Cedar Street",
        city: "Seattle",
        state: "Washington",
    },
    {
        name: {
            firstName: "Rachel",
            lastName: "Anderson",
        },
        address: "987 Walnut Court",
        city: "New York",
        state: "New York",
    },
    {
        name: {
            firstName: "David",
            lastName: "Garcia",
        },
        address: "654 Maple Avenue",
        city: "Los Angeles",
        state: "California",
    },
    {
        name: {
            firstName: "Zachary",
            lastName: "Davis",
        },
        address: "261 Battle Ford",
        city: "Columbus",
        state: "Ohio",
    },
    {
        name: {
            firstName: "Robert",
            lastName: "Smith",
        },
        address: "566 Brakus Inlet",
        city: "Westerville",
        state: "West Virginia",
    },
    {
        name: {
            firstName: "Kevin",
            lastName: "Yan",
        },
        address: "7777 Kuhic Knoll",
        city: "South Linda",
        state: "West Virginia",
    },
    {
        name: {
            firstName: "John",
            lastName: "Upton",
        },
        address: "722 Emie Stream",
        city: "Huntington",
        state: "Washington",
    },
    {
        name: {
            firstName: "Nathan",
            lastName: "Harris",
        },
        address: "1 Kuhic Knoll",
        city: "Ohiowa",
        state: "Nebraska",
    },
    {
        name: {
            firstName: "Emily",
            lastName: "Smith",
        },
        address: "123 Main Street",
        city: "Springfield",
        state: "Illinois",
    },
    {
        name: {
            firstName: "Jessica",
            lastName: "Johnson",
        },
        address: "456 Elm Avenue",
        city: "Portland",
        state: "Oregon",
    },
    {
        name: {
            firstName: "Michael",
            lastName: "Davis",
        },
        address: "789 Oak Lane",
        city: "Austin",
        state: "Texas",
    },
    {
        name: {
            firstName: "Sarah",
            lastName: "Wilson",
        },
        address: "321 Pine Road",
        city: "Denver",
        state: "Colorado",
    },
];

const columns = [
    {
        accessorKey: "name.firstName",
        header: "First Name",
    },
    {
        accessorKey: "name.lastName",
        header: "Last Name",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "city",
        header: "City",
    },
    {
        accessorKey: "state",
        header: "State",
    },
];

const Example = () => {
    const table = useMantineReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        //MRT display columns can still work, optionally override cell renders with `displayColumnDefOptions`
        enableRowSelection: true,
        initialState: {
            pagination: { pageSize: 5, pageIndex: 0 },
            showGlobalFilter: true,
        },
        //customize the MRT components
        mantinePaginationProps: {
            rowsPerPageOptions: ["5", "10", "15"],
        },
        paginationDisplayMode: "pages",
    });

    return (
        <Stack>
            <Title order={4}>Import List</Title>
            <MRT_GlobalFilterTextInput table={table} />
            <Divider />
            <Title order={4}>My Custom Headless Table</Title>
            <Flex justify="space-between" align="center">
                {/**
                 * Use MRT components along side your own markup.
                 * They just need the `table` instance passed as a prop to work!
                 */}
                <MRT_GlobalFilterTextInput table={table} />
                <MRT_TablePagination table={table} />
            </Flex>
            {/* Using Vanilla Mantine Table component here */}
            <Table
                captionSide="top"
                fz="md"
                highlightOnHover
                horizontalSpacing="xl"
                verticalSpacing="xs"
                m="0"
            >
                {/* Use your own markup or stock Mantine components, customize however you want using the power of TanStack Table */}
                <Table.Thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Table.Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <Table.Th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.Header ??
                                                  header.column.columnDef
                                                      .header,
                                              header.getContext()
                                          )}
                                </Table.Th>
                            ))}
                        </Table.Tr>
                    ))}
                </Table.Thead>
                <Table.Tbody>
                    {table.getRowModel().rows.map((row) => (
                        <Table.Tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <Table.Td key={cell.id}>
                                    <MRT_TableBodyCellValue
                                        cell={cell}
                                        table={table}
                                    />
                                </Table.Td>
                            ))}
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
            <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
        </Stack>
    );
};

export default Example;
