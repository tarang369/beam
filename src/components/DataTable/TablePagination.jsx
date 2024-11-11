import { Group, Pagination, Select, Text } from "@mantine/core";

export function TablePagination({
    page,
    pageSize,
    totalItems,
    onPageChange,
    onPageSizeChange,
}) {
    const startIndex = (page - 1) * parseInt(pageSize);
    const endIndex = Math.min(startIndex + parseInt(pageSize), totalItems);

    return (
        <Group>
            <Text size="sm" c="dimmed">
                Show
            </Text>
            <Select
                w={80}
                value={pageSize}
                onChange={onPageSizeChange}
                data={[
                    { value: "20", label: "20" },
                    { value: "50", label: "50" },
                    { value: "100", label: "100" },
                ]}
            />
            <Text size="sm" c="dimmed">
                {startIndex + 1}-{endIndex} of {totalItems} items
            </Text>
            <Pagination
                value={page}
                onChange={onPageChange}
                total={Math.ceil(totalItems / parseInt(pageSize))}
                size="sm"
            />
        </Group>
    );
}
