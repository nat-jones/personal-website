import { Grid, Stack } from "@mantine/core";
import PageHeader from "../util/PageHeader";
import ProjectCard from "./ProjectCard";

const PROJECT_INFO = [
    {
        title: 'Personal Website',
        description: 'This website!',
        image: './websiteProject.png',
        technologies: ['Typescript', 'React', 'NextJS', 'Mantine', 'Framer-Motion'],
        link: ''
    },
    {
        title: 'Pocket Pet',
        description: 'My UMass Honors College thesis project. A virtual pet app that raises money for shelter animals through passive ad revenue.',
        image: './pocketPet.png',
        technologies: ['Javascript', 'ReactNative', 'Firebase', 'Expo'],
        link: ''
    }
];

export default function ProjectsPage({ }) {
    return (
        <Stack style={{ width: '100%', height: '100%' }}>
            <PageHeader title="PROJECTS" />
            <Grid gutter={100} style={{ padding: 100 }}>
                <Grid.Col span={6}>
                    {PROJECT_INFO.map((e, i) => i % 2 === 0 && <ProjectCard {...PROJECT_INFO[i]} />)}
                </Grid.Col>
                <Grid.Col span={6}>
                    {PROJECT_INFO.map((e, i) => i % 2 !== 0 && <ProjectCard {...PROJECT_INFO[i]} />)}
                </Grid.Col>
            </Grid>
        </Stack>
    );
}