import React from 'react';

import { Box, LinkBox, LinkOverlay } from '@chakra-ui/react';

interface Props {
    linkName: string,
    linkUrl: string,
    selected: number
}

function NavLink(props: Props) {
    const { linkName, linkUrl, selected } = props;
    return (
        <LinkBox>
            <Box _hover={{ color:"gray.500" }} px="2" pt="3" pb="1">
                <LinkOverlay href={linkUrl} fontSize="lg" fontWeight={selected ? "bold" : "none"}>{linkName}</LinkOverlay>
                {selected ? <Box borderTop="solid" borderColor="black" borderTopWidth="3px"/> : ""}
            </Box>
        </LinkBox>
    );
}

export default NavLink;