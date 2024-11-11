import React, { useEffect, useState } from 'react';

import { Stack, Box, Text, Flex, List, Link } from '@chakra-ui/react';
import { LuExternalLink } from "react-icons/lu";

import RequestService from '../../services/RequestService';
import SourceCodeMap from "../../types/SourceCodeMap";

import NavBar from '../custom/NavBar';
import ComplexityTable from '../custom/ComplexityTable';
import PseudoCode from '../custom/PseudoCode';
import SourceCode from '../custom/SourceCode';
import LogicDisplay from '../custom/LogicDisplay';

function SelectionSort() {
    const [sourceCode, setSourceCode] = useState<SourceCodeMap>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await RequestService.fetchAlgorithmSourceCode('getAlgorithm/SelectionSort');
                if(result.status === 200) {
                    setSourceCode(result.sourceCode);
                }
                else {
                    throw new Error('File not found');
                }
            }
            catch(err) {
                setError('Failed to fetch pseudo code.');
            }
        };
        getData();
    }, []);

    return(
        <Box mb="2em">
            <NavBar selected={-1}/>
            <Stack mx="10%" pt="5em">
                <Flex direction="column" alignItems="center" textAlign="center">
                    <Text fontWeight="bold" fontSize={{sm: "2em", md: "2.5em"}}>Selection Sort</Text>
                </Flex>
                <Text>Selection Sort is an in-place comparision sorting algorithm.</Text>
                <Text>The algorithm divides its input list into three parts:</Text>
                <List.Root ml="1em">
                    <List.Item>Sorted sublist of items</List.Item>
                    <List.Item>Unsorted sublist of items</List.Item>
                    <List.Item>Boundary: position in the input list to fill in with a sorted item.</List.Item>
                </List.Root>
                <Text>For a Selection Sort that reads from left to right, the sorted sublist of items would be the left side of the boundary while the unsorted sublist of items would be the right side of the boundary. The algorithm would read through the unsorted sublist and select the next sorted item. Each time a sorted item is placed into the boundary, the boundary would move right by an index of one increasing the sorted sublist by one item while the unsorted sublist decreases by one. This process would repeat itself until the unsorted sublist no longer has any available items to sort.</Text>
                <Text mb="2em">One of the first sorting algoirithms many developers would learn. Selection Sort is arguably the most intuitive to understand and to use in real life applications. Many people often perform Selection Sort when sorting without realizing it. The advantage to using Selection Sort is in its simplicity in development and application and minimal use of memory space. The downside to Selection Sort is in its performance as it is not advised to use it for sorting large datasets. Forced to a nested loop through an input list, it generally performs worst to similar performing algorithms let alone against more complex and performance optimal algorithms.</Text>
                <ComplexityTable title="Time Complexity" bestCase="n^(2)" averageCase="n^(2)" worstCase="n^(2)" description="Where n is the number of items in input list."/>
                <ComplexityTable title="Space Complexity" bestCase="1" averageCase="1" worstCase="1"/>
                <PseudoCode pseudoCode={error ? error : sourceCode ? sourceCode.pseudo : "Loading..."}/>
                <SourceCode
                    java={error ? error : sourceCode ? sourceCode.java : "Loading..."}
                    python={error ? error : sourceCode ? sourceCode.python : "Loading..."}
                    php={error ? error : sourceCode ? sourceCode.php : "Loading..."}
                />
                <LogicDisplay type="SelectionSort"></LogicDisplay>
                <Text fontWeight="bold" fontSize="lg">References</Text>
                <List.Root ml="1em">
                    <List.Item><Link href="https://en.wikipedia.org/wiki/Selection_sort" target="_blank">https://en.wikipedia.org/wiki/Selection_sort<LuExternalLink/></Link></List.Item>
                </List.Root>
            </Stack>
        </Box>
    );
}

export default SelectionSort;