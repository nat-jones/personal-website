import { Grid, Stack } from '@mantine/core';
import PageHeader from '../util/PageHeader';
import ProjectCard from './ProjectCard';
import { PROJECT_INFO } from '../../public/data/projectInfo';

export default function ProjectsPage() {
  return (
    <Stack
      align="stretch"
      justify="center"
      style={{ width: '100%', height: '100%' }}
    >
      <PageHeader title="PROJECTS" />
      <div style={{ overflow: 'scroll', width: '100%', padding: 40 }}>
        <Grid gutter={40} style={{ width: '100%', margin: 0 }}>
          {PROJECT_INFO.map((pi) => (
            <Grid.Col span={6} key={pi.title}>
              <ProjectCard {...pi} />
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </Stack>
  );
}
