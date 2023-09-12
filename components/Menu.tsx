import { Center, Stack } from '@mantine/core';
import { motion } from 'framer-motion';
import HomepageLink from './HomepageLink';
import { AllPagesType } from '../types';

interface MenuProps {
  page: string;
  setPageInfo: (value: React.SetStateAction<AllPagesType>) => void;
  children?: JSX.Element | JSX.Element[];
}

const textVariants = {
  homepage: { x: 0, transition: { duration: 1 } },
  other: { x: 'calc(-50vw + 100px)', transition: { duration: 1 } },
};

const navBar = {
  homepage: {
    opacity: 0,
    y: 'calc(50vh - 170px)',
    x: 0,
    clipPath: 'polygon(0 0, 0 340px, 204px 340px, 204px 0)',
    transition: { duration: 1 },
  },
  other: {
    opacity: 0.4,
    y: 0,
    x: 'calc(-50vw + 100px)',
    clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)',
    transition: { duration: 1 },
  },
};

/**
 * A menu with animated motion serving as the NavBar for the website
 */
export default function Menu({ children, page, setPageInfo }: MenuProps) {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Center style={{ width: '100vw', height: '100vh', position: 'absolute' }}>
        <motion.div
          animate={page === 'homepage' ? page : 'other'}
          variants={navBar}
          style={{
            height: '100vh',
            width: 208,
            position: 'absolute',
            zIndex: 0,
            backgroundColor: '#FFF9DB',
            borderRight: '4px solid black',
          }}
          initial={false}
        />
        <motion.div
          animate={page === 'homepage' ? page : 'other'}
          variants={textVariants}
          style={{ justifyContent: 'center', zIndex: 2 }}
        >
          <Stack style={{ width: 200, height: 340 }} align="center">
            <HomepageLink
              href=""
              text="Home"
              setPage={() => setPageInfo('homepage')}
              selected={page === 'homepage'}
            />
            <HomepageLink
              href=""
              text="About"
              setPage={() => setPageInfo('about')}
              selected={page === 'about'}
            />
            <HomepageLink
              href=""
              text="Technologies"
              setPage={() => setPageInfo('technologies')}
              selected={page === 'technologies'}
            />
            <HomepageLink
              href=""
              text="Projects"
              setPage={() => setPageInfo('projects')}
              selected={page === 'projects'}
            />
            <HomepageLink
              href=""
              text="Contact"
              setPage={() => setPageInfo('contact')}
              selected={page === 'contact'}
            />
          </Stack>
        </motion.div>
      </Center>
      {children}
    </div>
  );
}
