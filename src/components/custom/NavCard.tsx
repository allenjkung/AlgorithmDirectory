import React from 'react';

import { Flex, LinkBox, LinkOverlay } from '@chakra-ui/react';

interface Props {
    linkName: string,
    linkUrl: string,
}

function NavCard(props: Props) {
    const { linkName, linkUrl } = props;
    return (
        <LinkBox _hover={{ bgColor:"lightgray", opacity:".850" }} width="100%" height="100%">
            <Flex height="100%" width="100%" alignItems="center" justifyContent="center">
                <LinkOverlay href={linkUrl} fontSize="lg">{linkName}</LinkOverlay>
            </Flex>
        </LinkBox>
    );
}

export default NavCard;