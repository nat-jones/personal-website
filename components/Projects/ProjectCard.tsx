import { Button, Card, Group, Image, Stack, Text } from "@mantine/core";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
}

export default function ProjectCard({ description, image, link, technologies, title }: ProjectCardProps) {
    return (
        <Card style={{ backgroundColor: 'rgba(255, 249, 219, .4)' }}>
            <Card.Section>
                <Image src={image} height={300}></Image>
            </Card.Section>
            <Stack justify='space-between' style={{ height: 140 }}>
                <Text lineClamp={1} size={28}>
                    {title}
                </Text>
                <Text lineClamp={2}>
                    {description}
                </Text>
                <Text lineClamp={1} fs='italic'>{`${technologies.join(', ')}`}</Text>
            </Stack>
            <Button variant="outline" color="dark" fullWidth>
                <Text>View</Text>
            </Button>
        </Card>
    )
}