import { PageInfoType } from "../pages"
import AboutPage from "./About"
import ContactPage from "./Contact"
import TechnologiesPage from "./TechnologyPage/Technologies"
import { Center, MantineTransition, Transition } from "@mantine/core"
import { useEffect, useState } from "react"
import ProjectsPage from "./Projects/ProjectsPage"

interface PageSelectorProps {
    pageInfo: PageInfoType;
    setPageInfo: (value: React.SetStateAction<PageInfoType>) => void
}

const slideLeft: MantineTransition = {
    in: { transform: 'translateX(0)' },
    out: { transform: 'translateX(100vw)' },
    transitionProperty: 'transform'
};

export default function PageSelector({ pageInfo, setPageInfo }: PageSelectorProps) {
    const [isExiting, setIsExiting] = useState(false);

    return (
        <Center style={{ width: 'calc(100vw - 204px)', height: '100vh', padding: '40px', position: 'absolute', left: 204 }}>
            <Transition mounted={pageInfo.page === 'contact' && !isExiting} onExited={() => setIsExiting(false)} transition={slideLeft} duration={1000} timingFunction="ease">
                {(styles) => (
                    <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>
                        <ContactPage />
                    </div>
                )}
            </Transition>
            <Transition mounted={pageInfo.page === 'technologies' && !isExiting} onExited={() => () => setIsExiting(false)} transition={slideLeft} duration={1000} timingFunction="ease">
                {(styles) => (
                    <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>
                        <TechnologiesPage />
                    </div>
                )}
            </Transition>
            <Transition mounted={pageInfo.page === 'about' && !isExiting} onExited={() => () => setIsExiting(false)} transition={slideLeft} duration={1000} timingFunction="ease">
                {(styles) => (
                    <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>
                        <AboutPage />
                    </div>
                )}
            </Transition>
            <Transition mounted={pageInfo.page === 'projects' && !isExiting} onExited={() => () => setIsExiting(false)} transition={slideLeft} duration={1000} timingFunction="ease">
                {(styles) => (
                    <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>
                        <ProjectsPage />
                    </div>
                )}
            </Transition>
        </Center >
    )
}