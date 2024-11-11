import { Group, Text, TextInput } from "@mantine/core";
import { Search } from "lucide-react";

export function TableHeader({ title, onSearch }) {
    return (
        <Group justify="space-between" mb="md">
            <Text size="lg" fw={500}>
                {title}
            </Text>
            <TextInput
                placeholder="Search..."
                leftSection={<Search size={16} />}
                onChange={(e) => onSearch(e.currentTarget.value)}
            />
        </Group>
    );
}
