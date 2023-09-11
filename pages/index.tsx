import { BackgroundImage } from '@mantine/core';
import Menu from '../components/Menu';
import { useState } from 'react';
import PageSelector from '../components/PageSelector';

export type PageInfoType =
  | 'about'
  | 'contact'
  | 'homepage'
  | 'projects'
  | 'technologies';

export default function HomePage() {
  const [pageInfo, setPageInfo] = useState<PageInfoType>('homepage');
  return (
    <BackgroundImage src="./images/surfing.jpeg">
      <Menu page={pageInfo} setPageInfo={setPageInfo}>
        <PageSelector pageInfo={pageInfo} />
      </Menu>
    </BackgroundImage>
  );
}
