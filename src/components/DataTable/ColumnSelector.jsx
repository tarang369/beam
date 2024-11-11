import { Button, Checkbox, Modal, Stack } from "@mantine/core";
import { useState } from "react";

export function ColumnSelector({
    opened,
    columns,
    visibleColumns,
    onClose,
    onConfirm,
}) {
    const [selectedColumns, setSelectedColumns] = useState(visibleColumns);

    const handleToggleColumn = (column) => {
        setSelectedColumns((prev) =>
            prev.find((col) => col.key === column.key)
                ? prev.filter((col) => col.key !== column.key)
                : [...prev, column]
        );
    };

    return (
        <Modal opened={opened} onClose={onClose} title="Column Settings">
            <Stack>
                {columns.map((column) => (
                    <Checkbox
                        key={column.key}
                        label={column.label}
                        checked={selectedColumns.some(
                            (col) => col.key === column.key
                        )}
                        onChange={() => handleToggleColumn(column)}
                    />
                ))}
                <Button
                    onClick={() => {
                        onConfirm(selectedColumns);
                        onClose();
                    }}
                >
                    Apply
                </Button>
            </Stack>
        </Modal>
    );
}
