import { Grid, Stack } from "@mantine/core";
import PageHeader from "../util/PageHeader";
import ProjectCard from "./ProjectCard";

const PROJECT_INFO = [
    {
        title: 'Personal Website',
        description: 'This website!',
        image: './websiteProject.png',
        technologies: ['Typescript', 'React', 'NextJS', 'Mantine', 'Framer-Motion'],
        link: 'https://github.com/nat-jones/personal-website'
    },
    {
        title: 'MITRE eCQM Projects',
        description: 'A collection of open-source repositories I contributed to during my employment at The MITRE Corporation.',
        image: './fqmTestify.png',
        technologies: ['Typescript', 'Javascript', 'Ruby', 'React', 'Mantine', 'NextJS', 'MongoDB'],
        link: 'https://github.com/projecttacoma'

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
        <Stack align='stretch' justify='center' style={{ width: '100%', height: '100%' }}>
            <PageHeader title="PROJECTS" />
            <div style={{ overflow: 'scroll', width: '100%', padding: 40 }} >
                <Grid gutter={40} style={{ width: '100%', margin: 0 }}>
                    {PROJECT_INFO.map((pi) => (<Grid.Col span={6}><ProjectCard key={pi.title} {...pi} /></Grid.Col>))}
                </Grid>
            </div>
        </Stack>
    );
}