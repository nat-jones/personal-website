import { BackgroundImage, Center, Group, Image, Stack, Text } from "@mantine/core";
import { Mail, BrandGithub, BrandLinkedin, BrandInstagram } from 'tabler-icons-react';
import PageHeader from "./util/PageHeader";

const CARD_ASPECT_RATIO = 1.75;
const CARD_HEIGHT = 340
const CARD_TEXT_COLOR = "#A9884F";

export default function ContactPage() {
    return (
        <Stack align='center' justify='space-between' style={{ flex: 1, height: '100%', paddingBottom: '40px' }}>
            <PageHeader title='CONTACT' />
            <div style={{ height: CARD_HEIGHT, width: CARD_HEIGHT * CARD_ASPECT_RATIO }}>
                <Image src="./businessCardFront.png" />
            </div>
            <div style={{ height: CARD_HEIGHT, width: CARD_HEIGHT * CARD_ASPECT_RATIO }}>
                <BackgroundImage src="./businessCardBack.png">
                    <Center style={{ height: CARD_HEIGHT, width: CARD_HEIGHT * CARD_ASPECT_RATIO, padding: '60px', }}>
                        <Stack align='left' justify='space-around'>
                            <Group position="center">
                                <BrandGithub size={24} strokeWidth={2} color={CARD_TEXT_COLOR} />
                                <a href="https://github.com/nat-jones" style={{ color: CARD_TEXT_COLOR, textDecoration: 'none' }}>nat-jones</a>
                            </Group>
                            <Group position="center">
                                <BrandGithub size={24} strokeWidth={2} color={CARD_TEXT_COLOR} />
                                <a href="https://github.com/natjoe4" style={{ color: CARD_TEXT_COLOR, textDecoration: 'none' }}>natjoe4</a>
                            </Group>
                            <Group position="center">
                                <BrandLinkedin size={24} strokeWidth={2} color={CARD_TEXT_COLOR} />
                                <a href="https://www.linkedin.com/in/nathaniel-jones-00a92b163/" style={{ color: CARD_TEXT_COLOR, textDecoration: 'none' }}>Nathaniel Jones</a>
                            </Group>
                            <Group position="center">
                                <BrandInstagram size={24} strokeWidth={2} color={CARD_TEXT_COLOR} />
                                <a href="https://www.instagram.com/nathanieljones_/" style={{ color: CARD_TEXT_COLOR, textDecoration: 'none' }}>nathanieljones_</a>
                            </Group>
                            <Group position="center">
                                <Mail size={24}
                                    strokeWidth={2}
                                    color={CARD_TEXT_COLOR} />
                                <a
                                    style={{ color: CARD_TEXT_COLOR, textDecoration: 'none' }}
                                    href='#'
                                    onClick={(e) => {
                                        window.location.href = "mailto:nathaniel.hanauerjones@gmail.com";
                                        e.preventDefault();
                                    }}
                                >
                                    nathaniel.hanauerjones@gmail.com
                                </a>
                            </Group>
                        </Stack>
                    </Center>
                </BackgroundImage>
            </div >

        </Stack >
    )
}