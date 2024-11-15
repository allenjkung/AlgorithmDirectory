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

function InsertionSort() {
    const [sourceCode, setSourceCode] = useState<SourceCodeMap>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await RequestService.fetchAlgorithmSourceCode('getAlgorithm/InsertionSort');
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
                    <Text fontWeight="bold" fontSize={{sm: "2em", md: "2.5em"}}>Insertion Sort</Text>
                </Flex>
                <Text>Insertion Sort, is an in-place comparision sorting algorithm.</Text>
                <Text>The algorithm has two parts:</Text>
                <List.Root ml="1em">
                    <List.Item>Sorted sublist of items</List.Item>
                    <List.Item>Unsorted item: current item to place in the sorted sublist.</List.Item>
                </List.Root>
                <Text>For an Insertion Sort that reads from left to right, the sorted sublist of items would be on the left side of the intial index of the unsorted item. Iterating through the input list, each unsorted item is then compared with each item in the sorted sublist by reading it from right to left. If the targeted sorted item and unsorted item are unsorted from each other, move the targeted sorted item right by one index. Keep repeating this until either the targeted sorted item and unsorted item are sorted from each other or there are no more sorted items to check. The unsorted item would then be placed on the right of the sorted item by one index or at the start of the sorted sublist. Keep repeating this until there are no more unsorted items.</Text>
                <Text>One of my two favorite algorithms, I will try my best to be neutral but will likely be biased. Insertion Sort is quite intuitive to interpret as the idea is to sort the items as they come in like drawing and sorting cards from a deck one by one. Although not recommended for larger data sets, insertion sort is used in the Computer Science industry for fixed and smaller input list (i.e. 1-100) where inefficiency in performance can be sacrificed for minimal space complexity. It is also used in hybrid sorting algorithms where multiple sorting algorithms are coordinated to apply their strengths while complimenting their weaknesses. An example is using Merge Sort for input lists larger than 50 items and then switch to Insertion Sort once Merge Sort has broken down the input lists into chunks less than 50 items.</Text>
                <Text>Insertion Sort excels in sorting mostly sorted input lists. It would only take one pass to determine an already sorted input list is sorted while other sorting algorithms would perform their entire sorting process unknowingly. In average cases, Insertion Sort will be required to make a nested loop making it poor for sorting large data sets when compared to more performance optimal sorting algorithms. Compared to other similar performing sorting algorithms, it is on average cases better while maintaining the same minmal space complexity.</Text>
                <ComplexityTable title="Time Complexity" bestCase="n" averageCase="n^(2)" worstCase="n^(2)" description="Where n is the number of items in input list."/>
                <ComplexityTable title="Space Complexity" bestCase="1" averageCase="1" worstCase="1"/>
                <PseudoCode pseudoCode={error ? error : sourceCode ? sourceCode.pseudo : "Loading..."}/>
                <SourceCode
                    java={error ? error : sourceCode ? sourceCode.java : "Loading..."}
                    python={error ? error : sourceCode ? sourceCode.python : "Loading..."}
                    php={error ? error : sourceCode ? sourceCode.php : "Loading..."}
                />
                <LogicDisplay type="InsertionSort"></LogicDisplay>
                <Text fontWeight="bold" fontSize="lg">References</Text>
                <List.Root ml="1em">
                    <List.Item><Link href="https://en.wikipedia.org/wiki/Insertion_sort" target="_blank">https://en.wikipedia.org/wiki/Insertion_sort<LuExternalLink/></Link></List.Item>
                </List.Root>
            </Stack>
        </Box>
    );
}

export default InsertionSort;