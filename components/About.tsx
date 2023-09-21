import { Image, Space, Stack, Text } from '@mantine/core';
import PageHeader from './util/PageHeader';

export default function AboutPage() {
  return (
    <Stack style={{ width: '100%', height: '100%' }}>
      <Stack style={{ width: '100%', height: '95%' }}>
        <PageHeader title="ABOUT" />
        <Stack align="center" spacing={0}>
          <Image
            src="./images/professionalPicture.jpeg"
            width={240}
            height={240}
            radius={120}
            styles={{
              root: { marginBottom: -120 },
              image: { border: '4px solid rgba(10, 10, 10, .6)' },
            }}
          />
          <Stack
            style={{
              width: '80%',
              backgroundColor: 'rgba(255, 249, 219, .4)',
              border: '4px solid rgba(10, 10, 10, .6)',
            }}
          >
            <div style={{ color: 'black', padding: '120px 20px 20px' }}>
              <Text fz="sm">
                My name is Nathaniel Jones and I am an industry-experienced,
                full-stack software developer with a passion for creating React
                applications. I’ve spent the last three years working primarily
                with Typescript, Javascript, React, and the NextJS frameworks,
                as an associate software engineer at The MITRE Corporation.
              </Text>
              <Space h="lg" />
              <Text fz="sm">
                My projects at MITRE were funded by the Center for Medicare and
                Medicaid Services (CMS) and included the creation of full-stack
                web applications and prototype servers to help define, test, and
                implement FHIR, a new medical data and quality reporting
                standard.
              </Text>
              <Space h="lg" />
              <Text fz="sm">
                I attended New York University for two years before transferring
                to the University of Massachusetts Honors College, where I
                majored in computer science and graduated with a 3.96 GPA. For
                my thesis project, I created a virtual pet IOS app, with
                ReactNative, that uses passive ad revenue to raise money for
                local dog shelters.
              </Text>
              <Space h="lg" />
              <Text fz="sm">
                Recently, I left MITRE to volunteer with exotic and endangered
                animals, and explore freelance software development. I&apos;ve
                been most interested in contributing to projects that are
                working to fight climate change and promote animal wellfare.
              </Text>
            </div>
          </Stack>
        </Stack>
      </Stack>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: 12,
          height: '5%',
        }}
      >
        <Text fz={14} color="white" style={{ opacity: 0.6 }}>
          Photo by Rachel Moeller
        </Text>
      </div>
    </Stack>
  );
}
