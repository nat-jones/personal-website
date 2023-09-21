import { Button, Card, Image, Space, Stack, Text } from '@mantine/core';
import { ProjectInfo } from '../../public/data/projectInfo';

export default function ProjectCard({
  description,
  image,
  link,
  technologies,
  title,
}: ProjectInfo) {
  return (
    <Card style={{ backgroundColor: 'rgba(255, 249, 219, .4)' }}>
      <Card.Section>
        <Image src={image} height={300} />
      </Card.Section>
      <Stack justify="space-between" style={{ height: 140, paddingBottom: 12 }}>
        <Text lineClamp={1} size={20}>
          {title}
        </Text>
        <Text fz={14} lineClamp={2}>
          {description}
        </Text>
        <Text fz={14} lineClamp={1} fs="italic">{`${technologies.join(
          ', '
        )}`}</Text>
      </Stack>
      <a href={link} target="_blank" rel="noreferrer">
        <Button variant="outline" color="dark" fullWidth>
          <Text>View</Text>
        </Button>
      </a>
    </Card>
  );
}
