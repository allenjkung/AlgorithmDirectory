import React from 'react';

import { Box, LinkBox, LinkOverlay } from '@chakra-ui/react';

interface Props {
    linkName: string,
    linkUrl: string
}

function NavLink(props: Props) {
    const { linkName, linkUrl } = props;
    return (
        <LinkBox>
            <Box _hover={{ color:"gray.500" }} px="2" pt="3" pb="1">
                <LinkOverlay href={linkUrl} fontSize="lg">{linkName}</LinkOverlay>
            </Box>
        </LinkBox>
    );
}

export default NavLink;