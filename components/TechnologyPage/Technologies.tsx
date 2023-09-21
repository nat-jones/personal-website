import { Group, Stack, Text } from '@mantine/core';
import TechnologyPanel from './TechnologyPanel';
import StarMeter from './StarMeter';
import PageHeader from '../util/PageHeader';

const LANGUAGE_DATA = {
  TypeScript: 4,
  JavaScript: 4,
  Python: 3,
  'HTML/CSS': 3,
  Ruby: 2,
  Java: 2,
  C: 1,
};

const FRAMEWORK_DATA = {
  NodeJS: 4,
  React: 4,
  Mantine: 3,
  NextJS: 3,
  ReactNative: 2,
  MaterialUI: 2,
  Expo: 2,
  'Framer-Motion': 2,
};

const DATABASE_DATA = {
  MongoDB: 3,
  'Google Firebase': 2,
  SQLite: 1,
};

const MISC_DATA = {
  Git: 4,
  Docker: 1,
};

export default function TechnologiesPage() {
  return (
    <Stack style={{ height: '100%', width: '100%' }}>
      <PageHeader title="TECHNOLOGIES" />
      <div
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Group
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <TechnologyPanel data={LANGUAGE_DATA} label="Languages" />
          <TechnologyPanel data={DATABASE_DATA} label="Databases" />
          <TechnologyPanel data={FRAMEWORK_DATA} label="Frameworks" />
          <TechnologyPanel data={MISC_DATA} label="Misc" />
        </Group>
        <Stack
          style={{
            borderTop: '4px solid rgba(10, 10, 10, .6)',
            backgroundColor: 'rgba(255, 249, 219, .4)',
            color: 'black',
            padding: 20,
          }}
        >
          <Group>
            <Group>
              <StarMeter num={4} />
              <Text size={14}> = </Text>
            </Group>
            <Text size={14}>
              Multiple years of industry experience. Comfortable completing any
              task and teaching others.
            </Text>
          </Group>
          <Group>
            <Group>
              <StarMeter num={3} />
              <Text size={14}> = </Text>
            </Group>
            <Text size={14}>
              About 1 year of industry experience. Comfortable completing any
              task.
            </Text>
          </Group>
          <Group>
            <Group>
              <StarMeter num={2} />
              <Text size={16}> = </Text>
            </Group>
            <Text size={14}>
              Some industry experience. Comfortable completing most tasks while
              referencing documentation.
            </Text>
          </Group>
          <Group>
            <Group>
              <StarMeter num={1} />
              <Text size={14}> = </Text>
            </Group>
            <Text size={14}>
              Limited experience in either industry or personal project. Can
              complete tasks while heavily referencing documentation.
            </Text>
          </Group>
        </Stack>
      </div>
    </Stack>
  );
}
