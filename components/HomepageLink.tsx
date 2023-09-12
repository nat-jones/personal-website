import Link from 'next/link';
import { Text } from '@mantine/core';
import { useState } from 'react';

interface HomepageLinkProps {
  href: string;
  text: string;
  selected?: boolean;
  setPage?: (value?: React.SetStateAction<string>) => void;
}

export default function HomepageLink({
  href,
  text,
  setPage,
  selected,
}: HomepageLinkProps) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <Link
      style={{
        textDecoration: 'none',
        opacity: selected || isHover ? 1 : 0.5,
        width: '100%',
      }}
      href={href}
      passHref
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Text
        ta="center"
        color="black"
        fz="lg"
        onClick={() => setPage && setPage()}
      >
        {text}
      </Text>
    </Link>
  );
}
