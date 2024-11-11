import React from 'react';

import { Stack, Box, Code } from '@chakra-ui/react';

interface Props {
    pseudoCode : string
}

function PseudoCode(props: Props) {
    const { pseudoCode } = props;

    return (
        <Stack mb="1em">
            <Box mb=".5em" fontWeight="bold" fontSize="lg" textAlign="center">Pseudo Code</Box>
            <Code padding="1em" fontSize="md" whiteSpace="pre-wrap" lineHeight={1.25}>{pseudoCode}</Code>
        </Stack>
    );
}

export default PseudoCode;