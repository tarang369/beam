import {
    ActionIcon,
    Box,
    Group,
    LoadingOverlay,
    Table,
    Text,
} from "@mantine/core";
import { useState } from "react";
import { FaColumns } from "react-icons/fa";

import { ColumnSelector } from "./ColumnSelector";
import { TableColumnHeader } from "./TableColumnHeader";
import { TableHeader } from "./TableHeader";
import { TablePagination } from "./TablePagination";

export default function DataTable({
    data,
    columns,
    title,
    isLoading = false,
    error,
    onColumnOrderChange,
    onColumnHide,
}) {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState("50");
    const [visibleColumns, setVisibleColumns] = useState(columns);
    const [columnSelectorOpened, setColumnSelectorOpened] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleMoveColumn = (columnKey, position) => {
        const newColumns = [...visibleColumns];
        const columnIndex = newColumns.findIndex(
            (col) => col.key === columnKey
        );
        const column = newColumns[columnIndex];
        newColumns.splice(columnIndex, 1);

        if (position === "start") {
            newColumns.unshift(column);
        } else {
            newColumns.push(column);
        }

        setVisibleColumns(newColumns);
        onColumnOrderChange?.(newColumns);
    };

    const handleHideColumn = (columnKey) => {
        const newColumns = visibleColumns.filter(
            (col) => col.key !== columnKey
        );
        setVisibleColumns(newColumns);
        onColumnHide?.(columnKey);
    };

    if (error) {
        return (
            <Box ta="center" py="xl">
                <Text c="red">{error}</Text>
            </Box>
        );
    }

    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    if (!filteredData.length && !isLoading) {
        return (
            <Box ta="center" py="xl">
                <Text>No data available</Text>
            </Box>
        );
    }

    const startIndex = (page - 1) * parseInt(pageSize);
    const endIndex = startIndex + parseInt(pageSize);
    const paginatedData = filteredData.slice(startIndex, endIndex);

    return (
        <div className="relative p-4">
            <LoadingOverlay visible={isLoading} />

            <TableHeader title={title} onSearch={setSearchQuery} />

            <Group justify="space-between" mb="md">
                <TablePagination
                    page={page}
                    pageSize={pageSize}
                    totalItems={filteredData.length}
                    onPageChange={setPage}
                    onPageSizeChange={(value) => setPageSize(value || "50")}
                />
                <ActionIcon
                    variant="subtle"
                    onClick={() => setColumnSelectorOpened(true)}
                >
                    <FaColumns size={20} />
                </ActionIcon>
            </Group>

            <Box className="rounded-lg overflow-hidden">
                <Table
                    styles={{
                        table: {
                            borderSpacing: "0 8px",
                            borderCollapse: "separate",
                        },
                        tr: {
                            backgroundColor: "#2d2d2d",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "#333333",
                            },
                        },
                        td: {
                            border: "none",
                            padding: "12px 16px",
                            "&:first-of-type": {
                                borderTopLeftRadius: "8px",
                                borderBottomLeftRadius: "8px",
                            },
                            "&:last-of-type": {
                                borderTopRightRadius: "8px",
                                borderBottomRightRadius: "8px",
                            },
                        },
                        th: {
                            color: "white",
                            padding: "12px 16px",
                        },
                    }}
                >
                    <Table.Thead>
                        <Table.Tr className="!bg-transparent">
                            {visibleColumns.map((column) => (
                                <Table.Th key={column.key}>
                                    <TableColumnHeader
                                        column={column}
                                        onMoveColumn={handleMoveColumn}
                                        onHideColumn={handleHideColumn}
                                    />
                                </Table.Th>
                            ))}
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {paginatedData.map((row, index) => (
                            <Table.Tr key={index}>
                                {visibleColumns.map((column) => (
                                    <Table.Td
                                        key={column.key}
                                        className="first:!rounded-s-lg last:rounded-e-lg"
                                    >
                                        {row[column.key]}
                                    </Table.Td>
                                ))}
                            </Table.Tr>
                        ))}
                    </Table.Tbody>
                </Table>
            </Box>

            <ColumnSelector
                opened={columnSelectorOpened}
                columns={columns}
                visibleColumns={visibleColumns}
                onClose={() => setColumnSelectorOpened(false)}
                onConfirm={setVisibleColumns}
            />
        </div>
    );
}
