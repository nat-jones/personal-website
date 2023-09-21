import { BackgroundImage, Center, Group, Image, Stack } from '@mantine/core';
import {
  Mail,
  BrandGithub,
  BrandLinkedin,
  BrandInstagram,
} from 'tabler-icons-react';
import PageHeader from './util/PageHeader';

const CARD_ASPECT_RATIO = 1.75;
const CARD_HEIGHT = 300;
const CARD_TEXT_COLOR = '#A9884F';

export default function ContactPage() {
  return (
    <Stack
      align="center"
      justify="space-between"
      style={{ flex: 1, height: '100%', paddingBottom: '40px' }}
    >
      <PageHeader title="CONTACT" />
      <div
        style={{ height: CARD_HEIGHT, width: CARD_HEIGHT * CARD_ASPECT_RATIO }}
      >
        <Image src="./images/businessCardFront.png" />
      </div>
      <div
        style={{ height: CARD_HEIGHT, width: CARD_HEIGHT * CARD_ASPECT_RATIO }}
      >
        <BackgroundImage src="./images/businessCardBack.png">
          <Center
            style={{
              height: CARD_HEIGHT,
              width: CARD_HEIGHT * CARD_ASPECT_RATIO,
              padding: '60px',
            }}
          >
            <Stack align="left" justify="space-around">
              <Group position="center">
                <BrandGithub
                  size={24}
                  strokeWidth={2}
                  color={CARD_TEXT_COLOR}
                />
                <a
                  href="https://github.com/nat-jones"
                  style={{
                    color: CARD_TEXT_COLOR,
                    textDecoration: 'none',
                    fontSize: 14,
                  }}
                >
                  nat-jones
                </a>
              </Group>
              <Group position="center">
                <BrandGithub
                  size={20}
                  strokeWidth={2}
                  color={CARD_TEXT_COLOR}
                />
                <a
                  href="https://github.com/natjoe4"
                  style={{
                    color: CARD_TEXT_COLOR,
                    textDecoration: 'none',
                    fontSize: 14,
                  }}
                >
                  natjoe4
                </a>
              </Group>
              <Group position="center">
                <BrandLinkedin
                  size={20}
                  strokeWidth={2}
                  color={CARD_TEXT_COLOR}
                />
                <a
                  href="https://www.linkedin.com/in/nathaniel-jones-00a92b163/"
                  style={{
                    color: CARD_TEXT_COLOR,
                    textDecoration: 'none',
                    fontSize: 14,
                  }}
                >
                  Nathaniel Jones
                </a>
              </Group>
              <Group position="center">
                <BrandInstagram
                  size={20}
                  strokeWidth={2}
                  color={CARD_TEXT_COLOR}
                />
                <a
                  href="https://www.instagram.com/nathanieljones_/"
                  style={{
                    color: CARD_TEXT_COLOR,
                    textDecoration: 'none',
                    fontSize: 14,
                  }}
                >
                  nathanieljones_
                </a>
              </Group>
              <Group position="center">
                <Mail size={20} strokeWidth={2} color={CARD_TEXT_COLOR} />
                <a
                  style={{
                    color: CARD_TEXT_COLOR,
                    textDecoration: 'none',
                    fontSize: 14,
                  }}
                  href="#"
                  onClick={(e) => {
                    window.location.href =
                      'mailto:nathaniel.hanauerjones@gmail.com';
                    e.preventDefault();
                  }}
                >
                  nathaniel.hanauerjones@gmail.com
                </a>
              </Group>
            </Stack>
          </Center>
        </BackgroundImage>
      </div>
    </Stack>
  );
}
