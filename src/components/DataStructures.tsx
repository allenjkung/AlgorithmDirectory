import React from 'react';

import { Stack, Box, Flex, Text } from '@chakra-ui/react';

import NavBar from './custom/NavBar';
import NavCard from './custom/NavCard';

import { dataStructures, dataStructureJSON } from '../config';

function DataStructures() {
    const renderDataStructures = () => {
        return dataStructures.map(dataStructure => {
            return <NavCard linkName={dataStructure} linkUrl={"./" + dataStructureJSON[dataStructure].link}/>;
        });
    }
    return (
        <Box>
            <NavBar selected={3}/>
            <Stack mx="10%">
                <Flex direction="column" alignItems="center" textAlign="center" pt={{base:"5em", "2xl":"15em"}} mb="2em">
                    <Text fontWeight="bold" fontSize={{sm: "1.5em", md: "2em"}}>Data Structure</Text>
                    <Text>A Data Structure is a computer science format that defines how data are stored, organized, and manipulated.</Text>
                </Flex>
                <Text>Putting or converting data in a specific data structure has several benefits. An example is having immediate access the greatest or least item. An data structure can also provide optimization in retrieving and reading data.</Text>
                <Text mb="2em">Below is a list of data structures the Algorithm Directory currently has on file:</Text>
                {renderDataStructures()}
            </Stack>
        </Box>
    );
}

export default DataStructures;