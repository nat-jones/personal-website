import { Center, MantineTransition, Transition } from '@mantine/core';
import { useState } from 'react';
import { AllPagesType, ContentPagesType } from '../types';
import AboutPage from './About';
import ContactPage from './Contact';
import TechnologiesPage from './TechnologyPage/Technologies';
import ProjectsPage from './Projects/ProjectsPage';

const PAGES: Record<ContentPagesType, JSX.Element> = {
  about: <AboutPage />,
  contact: <ContactPage />,
  technologies: <TechnologiesPage />,
  projects: <ProjectsPage />,
};

interface PageSelectorProps {
  pageInfo: AllPagesType;
}

const slideLeft: MantineTransition = {
  in: { transform: 'translateX(0)' },
  out: { transform: 'translateX(100vw)' },
  transitionProperty: 'transform',
};

export default function PageSelector({ pageInfo }: PageSelectorProps) {
  const [isExiting, setIsExiting] = useState(false);

  return (
    <Center
      style={{
        width: 'calc(100vw - 204px)',
        height: '100vh',
        padding: '40px',
        position: 'absolute',
        left: 204,
      }}
    >
      {(Object.keys(PAGES) as Array<ContentPagesType>).map((e) => (
        <Transition
          mounted={pageInfo === e && !isExiting}
          onExited={() => setIsExiting(false)}
          transition={slideLeft}
          duration={1000}
          timingFunction="ease"
          key={e}
        >
          {(styles) => (
            <div
              style={{
                ...styles,
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            >
              {PAGES[e]}
            </div>
          )}
        </Transition>
      ))}
    </Center>
  );
}
