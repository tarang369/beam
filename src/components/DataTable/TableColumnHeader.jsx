import { Group, Menu } from "@mantine/core";
import { ChevronDown, EyeOff, MoveLeft, MoveRight } from "lucide-react";
export function TableColumnHeader({ column, onMoveColumn, onHideColumn }) {
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Group gap="xs" style={{ cursor: "pointer" }}>
                    {column.label}
                    <ChevronDown size={14} />
                </Group>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item
                    leftSection={<MoveLeft size={14} />}
                    onClick={() => onMoveColumn(column.key, "start")}
                >
                    Sort Ascending
                </Menu.Item>
                <Menu.Item
                    leftSection={<MoveLeft size={14} />}
                    onClick={() => onMoveColumn(column.key, "start")}
                >
                    Sort Descending
                </Menu.Item>
                <Menu.Item
                    leftSection={<MoveLeft size={14} />}
                    onClick={() => onMoveColumn(column.key, "start")}
                >
                    Clear Sort
                </Menu.Item>
                <Menu.Item
                    leftSection={<MoveLeft size={14} />}
                    onClick={() => onMoveColumn(column.key, "start")}
                >
                    Move to start
                </Menu.Item>
                <Menu.Item
                    leftSection={<MoveRight size={14} />}
                    onClick={() => onMoveColumn(column.key, "end")}
                >
                    Move to end
                </Menu.Item>
                <Menu.Item
                    leftSection={<EyeOff size={14} />}
                    onClick={() => onHideColumn(column.key)}
                >
                    Hide column
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
