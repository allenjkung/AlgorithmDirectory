import React, { useEffect, useState } from 'react';

import { Stack, Box, Text, Flex, List, Link } from '@chakra-ui/react';
import { LuExternalLink } from "react-icons/lu";

import RequestService from '../../services/RequestService';
import MultiSourceCodeMap from "../../types/MultiSourceCodeMap";

import NavBar from '../custom/NavBar';
import ComplexityTable from '../custom/ComplexityTable';
import PseudoCode from '../custom/PseudoCode';
import SourceCode from '../custom/SourceCode';
import LogicDisplay from '../custom/LogicDisplay';


function MergeSort() {
    const [sourceCode, setSourceCode] = useState<MultiSourceCodeMap>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await RequestService.fetchAlgorithmSourceCode('getAlgorithm/MergeSort');
                if(result.status === 200) {
                    setSourceCode(result.multiSourceCode);
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
                    <Text fontWeight="bold" fontSize={{sm: "2em", md: "2.5em"}}>Merge Sort</Text>
                </Flex>
                <Text>Merge Sort is a comparision sorting algorithm.</Text>
                <Text>There are two different types of Merge Sort that will be discussed:</Text>
                <List.Root ml="1em">
                    <List.Item>Iterative Merge Sort (Bottom Up Merge Sort)</List.Item>
                    <List.Item>Recursive Merge Sort (Top Down Merge Sort)</List.Item>
                </List.Root>
                <Text>Iterative Merge Sort consists of two main parts:</Text>
                <List.Root ml="1em">
                    <List.Item>Create sorted sublist of size 1 out of the input list as it can be assumed that sublist is sorted.</List.Item>
                    <List.Item>Repeatedly merge sorted sublists to create new larger sorted sublists until there is only one sorted sublist left.</List.Item>
                </List.Root>
                <Text>Recursive Merge Sort consists of two main parts:</Text>
                <List.Root ml="1em">
                    <List.Item>Divide the input list down into unsorted sublists until there is only one item in the unsorted sublist left creating a sorted sublist.</List.Item>
                    <List.Item>Repeatedly merge sorted sublists to create new larger sorted sublists until there is only one sorted sublist left.</List.Item>
                </List.Root>
                <Text>First invented and developed by John von Neumann in 1945, Merge Sort is a sorting algorithm that utilizes a divide and conquer strategy to sort an input list. It is well known for being one of the first efficient sorting algorithm developed. The first detailed implementation and analysis of Merge Sort was in 1948 and is called today as Iterative Merge Sort or Bottom-Up Merge Sort. Recursive Merge Sort was also known but was not considered as a practical solution at the time because of memory limitations in past computers. For simplicity, Iterative Merge Sort will be referred to as Merge Sort while the other types and variants will be the full name.</Text>
                <Text>Having an average time complexity of O(nlog(n)), it performs better than any of the simpler sorting algorithms. Its downside is its space complexity of O(n) while Recursive Merge Sort is O(nlog(n)). Any decent simple sorting algorithms would have constant O(1) space complexity.</Text>
                <Text>It is often compared to the other common divide and conquer O(nlog(n)) algorithms. All of them are around the same performance where the current scenario could make one slightly faster than another. This becomes more complicated when taking into account variants like In-Place Merge Sort increasing the number of swaps and comparisons needed for O(1) space complexity. In the end, a specialized N constant sorting algorithm will out peform them in speed making their main strengths universal implementation and acceptable used space required while maintaining efficient performance.</Text>
                <Text mb="2em">For Merge Sort in particular, it has optimal variants such as hybrid sorting algorithm Timsort and situational ones like parallel sorting algorithm Parallel Merge Sort. Even without such optimizations and variants, Merge Sort is still a good algorithm that is easy to implement and understand. Just be wary for larger data sets (over 100k) causing an Out of Memory Error if using Recursive Merge Sort.</Text>
                <Text fontWeight="bold" fontSize="lg">Variants</Text>
                <List.Root ml="1em">
                    <List.Item fontWeight="bold" fontSize="md">In-Place Merge Sort</List.Item>
                    <List.Item fontWeight="bold" fontSize="md">Timsort</List.Item>
                    <List.Item fontWeight="bold" fontSize="md">Parallel Merge Sort</List.Item>
                </List.Root>
                <ComplexityTable title="Time Complexity" bestCase="nlog(n)" averageCase="nlog(n)" worstCase="nlog(n)" description="Where n is the number of items in input list."/>
                <ComplexityTable title="Space Complexity" bestCase="n" averageCase="n" worstCase="n" description="Note that Recursive Merge Sort is technically O(n + log(n)) where log(n) is from the recursion stack but simplifies to O(n)."/>
                <Text fontWeight="bold" fontSize="lg">Iterative Merge Sort (Bottom-Up Merge Sort)</Text>
                <PseudoCode pseudoCode={error ? error : sourceCode ? sourceCode.pseudoIterative : "Loading..."}/>
                <SourceCode
                    java={error ? error : sourceCode ? sourceCode.javaIterative : "Loading..."}
                    python={error ? error : sourceCode ? sourceCode.pythonIterative : "Loading..."}
                    php={error ? error : sourceCode ? sourceCode.phpIterative : "Loading..."}
                />
                <Text fontWeight="bold" fontSize="lg">Recursive Merge Sort (Top-Down Merge Sort)</Text>
                <PseudoCode pseudoCode={error ? error : sourceCode ? sourceCode.pseudoRecursive : "Loading..."}/>
                <SourceCode
                    java={error ? error : sourceCode ? sourceCode.javaRecursive : "Loading..."}
                    python={error ? error : sourceCode ? sourceCode.pythonRecursive : "Loading..."}
                    php={error ? error : sourceCode ? sourceCode.phpRecursive : "Loading..."}
                />
                <LogicDisplay type="MergeSort" typeHeader="Iterative Merge Sort"></LogicDisplay>
                <Text fontWeight="bold" fontSize="lg">References</Text>
                <List.Root ml="1em">
                    <List.Item><Link href="https://en.wikipedia.org/wiki/Merge_sort" target="_blank">https://en.wikipedia.org/wiki/Merge_sort<LuExternalLink/></Link></List.Item>
                </List.Root>
            </Stack>
        </Box>
    );
}

export default MergeSort;