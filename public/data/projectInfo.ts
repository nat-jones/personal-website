export interface ProjectInfo {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

export const PROJECT_INFO: ProjectInfo[] = [
  {
    title: 'Personal Website',
    description: 'This website!',
    image: './images/websiteProject.png',
    technologies: ['Typescript', 'React', 'NextJS', 'Mantine', 'Framer-Motion'],
    link: 'https://github.com/nat-jones/personal-website'
  },
  {
    title: 'MITRE eCQM Projects',
    description:
      'A collection of open-source repositories I contributed to during my employment at The MITRE Corporation.',
    image: './images/fqmTestify.png',
    technologies: [
      'Typescript',
      'Javascript',
      'Ruby',
      'React',
      'Mantine',
      'NextJS',
      'MongoDB'
    ],
    link: 'https://github.com/projecttacoma'
  },
  {
    title: 'Pocket Pet',
    description:
      'My UMass Honors College thesis project. A virtual pet app that raises money for shelter animals through passive ad revenue.',
    image: './images/pocketPet.png',
    technologies: ['Javascript', 'ReactNative', 'Firebase', 'Expo'],
    link: ''
  }
];
