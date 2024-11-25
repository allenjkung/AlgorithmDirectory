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

function Quicksort() {
    const [sourceCode, setSourceCode] = useState<MultiSourceCodeMap>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await RequestService.fetchAlgorithmSourceCode('getAlgorithm/Quicksort');
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
    return (
        <Box mb="2em">
            <NavBar selected={-1}/>
            <Stack mx="10%" pt="5em">
                <Flex direction="column" alignItems="center" textAlign="center">
                    <Text fontWeight="bold" fontSize={{sm: "2em", md: "2.5em"}}>Quicksort</Text>
                </Flex>
                <Text>Quicksort is a comparision sorting algorithm.</Text>
                <Text>There are two different types of Quicksort that will be discussed:</Text>
                <List.Root ml="1em">
                    <List.Item>Iterative Quicksort</List.Item>
                    <List.Item>Recursive Quicksort</List.Item>
                </List.Root>
                <Text>In terms of logic, they are the same. The key difference is the tradeoff between additional memory space used for recursion and concise lines of code written. For a Quicksort algorithm that sorts in place from least to greatest, it splits the input list into three parts:</Text>
                <List.Root ml="1em">
                    <List.Item>Pivot: item chosen for Sublist 1 and Sublist 2 to be sorted around.</List.Item>
                    <List.Item>Sublist 1: items that are less than the pivot.</List.Item>
                    <List.Item>Sublist 2: items that are greater than the pivot. It should be directly after Sublist 1 in the input list</List.Item>
                </List.Root>
                <Text>Once all items in the input list are sorted based off the chosen Pivot, the Pivot is then placed between Sublist 1 and Sublist 2 by either swapping it with the last item in Sublist 1 or with the first item in Sublist 2. Then iteratively or recursively repeat the same process above with Sublist 1 and the same with Sublist 2</Text>
                <Text>Arguably the most widespread and commonly used algorithm in modern industry as it is easy to implement with efficient performance and reasonable memory space used.First developed by Tony Hoare in 1959, there has been quite a history of research, experimentations and contributations from others. Such contributors are Robert Sedgewick in 1975 publishing various pivot selection and partitioning schemas and theories<sup>[1]</sup>. In 1993, Jon Bentley and Doug Mcllroy made various optimizations now used in modern programming libraries. Bentley also popularized Lomuto Partition Scheme, created by Nico Lomuto, through his book Programming Pearls<sup>[2]</sup>. Lomuto Parition Scheme is commonly used as a teaching tool and even in current industry for its easy to understand implementation of the parition logic in QuickSort. Do note that it is inefficient in performance compared to Hoare Partition Scheme expect for a few niche scenarios.</Text>
                <Text>It is often compared to the other common divide and conquer O(nlog(n)) algorithms. All of them are around the same performance but Quicksort is generally slightly better because of either less memory space usage or swaps required when compared to another algorithm. This becomes more complicated when taking into account variants of the other sorting aglorithms. In the end, a specialized N constant sorting algorithm will out peform them in speed making their main strengths universal implementation and acceptable memory space required while maintaining efficient performance.</Text>
                <Text fontWeight="bold" fontSize="lg">Pivots</Text>
                <Text>There are various minor variations made to Quicksort to make it faster for certain scenarios or for research purposes. One such is the method to select a pivot. This is quite heavily debated today despite the age of the algorithm. I would say all methods of selecting a pivot are valid so long as it takes minimum constant time and space complexity to determine because there will always exist a worst case input list for it.</Text>
                <Text>In order of preference, a randomized pivot is best to reduce the likelihood of a worst case scenario but not all languages have optimal random number generators so first check before using it. Next would be an algorithmic approach such as the "Median of 3" algorithm. There exist hybrids between a random and algorithmic pivots such as selecting three random items instead of the first, middle and last items for "Median of 3" algorithm but I would suggest using only a randomized pivot in that case. Lastly is a constant pivot. A constant pivot are not terrible as to they are easiest to implement with minimum cost. Just be aware that they are also easiest to determine the worst case input list and therefore abusable for those with malicious intent. Should you want to use a constant pivot, I recommend selecting the middle item as it is not as predictable as using the first or last item.</Text>
                <Text fontWeight="bold" fontSize="lg">Partition</Text>
                <Text>Quicksort also has variations in how the Partition Scheme is performed. There are two known Partition Schemes; Hoare Partition Scheme and Lomuto Parition Scheme.</Text>
                <Text fontWeight="bold" fontSize="md">Hoare Partition Scheme</Text>
                <Text>Hoare Partition Scheme is the original Partition Scheme for Quicksort. It has stood against the test of time and is my preferred choice of Partition Scheme to use. I will be using Hoare Partition Scheme for the Psuedo Code, Source Code, and Run Logic below. How Hoare Partition Scheme works is by have having two indexes: start of input list and end of input list. One item in the input list is then selected as the pivot. The two indexes move towards each other until an inversion, both indexes are unsorted from the pivot, is found. When an inversion is found, the two values are swapped and the process repeats.</Text>
                <Text fontWeight="bold" fontSize="md">Lomuto Parition Scheme</Text>
                <Text mb="2em">Lomuto Parition Scheme is likely the first Partition Scheme that any developer today sees when learning Quicksort. It is not an inefficient Partition Scheme but it is generally less optimal when compared with Hoare Partition Scheme. Its main strength is intuitive development and implementation, making it a great learning tool to initially understand and teach Quicksort. How Lomuto Parition Scheme works is by having two indexes, lets say i and j: both at the start of the input list. The pivot is selected and placed at the end of the input list. Go through the input list using j as the position. When item at position j is unsorted from pivot, swap item at position i with item at position j and increment i by 1. Once finished, swap the pivot, item at end of the input list, with item at position i + 1. This partition scheme will not be used in any of the source code or examples below.</Text>
                <ComplexityTable title="Time Complexity" bestCase="nlog(n)" averageCase="nlog(n)" worstCase="n^(2)" description="Where n is the number of items in input list."/>
                <ComplexityTable title="Space Complexity" bestCase="log(n)" averageCase="log(n)" worstCase="n"/>
                <Text fontWeight="bold" fontSize="lg">Iterative Quicksort</Text>
                <PseudoCode pseudoCode={error ? error : sourceCode ? sourceCode.pseudoIterative : "Loading..."}/>
                <SourceCode
                    java={error ? error : sourceCode ? sourceCode.javaIterative : "Loading..."}
                    python={error ? error : sourceCode ? sourceCode.pythonIterative : "Loading..."}
                    php={error ? error : sourceCode ? sourceCode.phpIterative : "Loading..."}
                />
                <Text fontWeight="bold" fontSize="lg">Recursive Quicksort</Text>
                <PseudoCode pseudoCode={error ? error : sourceCode ? sourceCode.pseudoRecursive : "Loading..."}/>
                <SourceCode
                    java={error ? error : sourceCode ? sourceCode.javaRecursive : "Loading..."}
                    python={error ? error : sourceCode ? sourceCode.pythonRecursive : "Loading..."}
                    php={error ? error : sourceCode ? sourceCode.phpRecursive : "Loading..."}
                />
                <LogicDisplay type="Quicksort" typeHeader="Iterative Quicksort"></LogicDisplay>
                <Text fontWeight="bold" fontSize="lg">References</Text>
                <List.Root ml="1em">
                    <List.Item><Link href="https://sedgewick.io/wp-content/themes/sedgewick/papers/1975Quicksort.pdf" target="_blank">[1]“Outstanding Dissertations in the COMPUTER SCIENCES A Continuing Garland Research Series.” Accessed: Nov. 23, 2024. [Online].<LuExternalLink/></Link></List.Item>
                    <List.Item>[2] J. Bentley, Programming Pearls, Second Edition. Addison-Wesley Professional, 1999.</List.Item>
                    <List.Item><Link href="https://en.wikipedia.org/wiki/Quicksort" target="_blank">https://en.wikipedia.org/wiki/Quicksort<LuExternalLink/></Link></List.Item>
                </List.Root>
            </Stack>
        </Box>
    );
}

export default Quicksort;