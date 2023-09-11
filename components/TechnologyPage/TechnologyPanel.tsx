import { Group, Stack, Text } from '@mantine/core';
import StarMeter from './StarMeter';

interface TechnologyPanelProps {
  label: string;
  data: Record<string, number>;
}

export default function TechnologyPanel({ data, label }: TechnologyPanelProps) {
  return (
    <Stack sx={(theme) => ({ width: '20%', height: 400 })}>
      <Text size={28}>{label}</Text>
      {Object.keys(data).map((e) => (
        <Group
          key={e}
          align="center"
          style={{ justifyContent: 'space-between' }}
        >
          <Text size={20}>{`${e}:`}</Text>
          <StarMeter num={data[e]} />
        </Group>
      ))}
    </Stack>
  );
}
