import { BackgroundImage } from '@mantine/core';
import { useState } from 'react';
import Menu from '../components/Menu';
import PageSelector from '../components/PageSelector';
import { AllPagesType } from '../types';
import Head from 'next/head';

export default function HomePage() {
  const [pageInfo, setPageInfo] = useState<AllPagesType>('homepage');
  return (
    <BackgroundImage src="./images/surfing.jpeg">
      <Menu page={pageInfo} setPageInfo={setPageInfo}>
        <PageSelector pageInfo={pageInfo} />
      </Menu>
    </BackgroundImage>
  );
}
