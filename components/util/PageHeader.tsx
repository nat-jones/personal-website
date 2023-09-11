import { Center, Text } from '@mantine/core';

export default function PageHeader({ title }: { title: string }) {
  return (
    <Center style={{ width: '100%', height: 100 }}>
      <Text align="center" size={60}>
        {title}
      </Text>
    </Center>
  );
}
