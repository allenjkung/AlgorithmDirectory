import React from 'react';

import { Stack, Box, Flex, Table, Text } from '@chakra-ui/react';

import NavBar from './custom/NavBar';
import NavCard from './custom/NavCard';

import { algorithms, algorithmsJSON } from '../config';

function SortAlgorithms() {
    const renderSortAlgorithms = () => {
        return algorithms.map(sortAlgorithm => {
            return <NavCard linkName={sortAlgorithm} linkUrl={"./" + algorithmsJSON[sortAlgorithm].link}/>;
        });
    }
    return (
        <Box>
            <NavBar selected={1}/>
            <Stack mx="10%">
                <Flex direction="column" alignItems="center" textAlign="center" pt={{base:"5em", "2xl":"15em"}} mb="2em">
                    <Text fontWeight="bold" fontSize={{sm: "1.5em", md: "2em"}}>Sorting Algorithms</Text>
                    <Text>A Sorting Algorithm is a computer science algorithm that sorts a given list into a specific order.</Text>
                </Flex>
                <Text>Sorting a list into a specific order has several benefits. An example is having immediate access the greatest and least item in the list. A sorted list can also enable and optimize other data structures and algorithms such as binary search.</Text>
                <Text mb="2em">Below is a list of sorting algorithms the Algorithm Directory currently has on file:</Text>
                {renderSortAlgorithms()}
            </Stack>
        </Box>
    );
}

export default SortAlgorithms;