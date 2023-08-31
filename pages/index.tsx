import { BackgroundImage } from '@mantine/core';
import Menu from '../components/Menu';
import { useState } from 'react';
import PageSelector from '../components/PageSelector';

export interface PageInfoType {
  page: 'about' | 'contact' | 'homepage' | 'projects' | 'technologies',
  isExiting: boolean
}

export default function HomePage() {

  const [pageInfo, setPageInfo] = useState<PageInfoType>({ page: 'homepage', isExiting: false })
  return (
    <BackgroundImage src='./surfing.jpeg'>
      <Menu page={pageInfo.page} setPageInfo={setPageInfo}>
        <PageSelector pageInfo={pageInfo} setPageInfo={setPageInfo} />
      </Menu>
    </BackgroundImage >
  );
}
