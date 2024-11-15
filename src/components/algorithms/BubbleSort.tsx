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

function BubbleSort() {
    const [sourceCode, setSourceCode] = useState<SourceCodeMap>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await RequestService.fetchAlgorithmSourceCode('getAlgorithm/BubbleSort');
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
                    <Text fontWeight="bold" fontSize={{sm: "2em", md: "2.5em"}}>Bubble Sort</Text>
                </Flex>
                <Text>Bubble Sort, sometimes referred to as Sinking Sort, is an in-place comparision sorting algorithm.</Text>
                <Text>The algorithm sorts the input list by repeatedly passing through the input list by each item and swapping the item with the next item if unsorted from each other. For a Bubble Sort that reads from left to right, each pass guarantees one item is sorted and reduce the need to compare from the right most of the input list by one item. These passes are repeated until no swaps have been performed during a single pass where the input list should now become sorted.</Text>
                <Text>One of the first sorting alogrithms that many developers would learn, Bubble Sort is a great educational tool for any aspiring developers for it has quite a history of variants and optimizations. It provides great insight on how old and new concepts could be expanded or improved upon. I strongly advise against using Bubble Sort in industry source code and any other applications but I recommend all developers to read up on its history to appreciate its development.</Text>
                <Text>Bubble Sort excels in sorting mostly sorted input lists. It would only take one pass to determine an already sorted input list is sorted while other sorting algorithms would perform their entire sorting process unknowingly. Unfortunately, even with all optimizations applied to Bubble Sort, it is inefficient for sorting large datasets and even then there are other algorithms that also excel in sorting a mostly sorted input list but are better in overall performance. In average cases, Bubble Sort is arguably the worst of the legitimate simple sorting aglorithms because of the number of swaps it makes per pass and its dependency on item positions.</Text>
                <Text fontWeight="bold" fontSize="lg">Variants</Text>
                <List.Root ml="1em">
                    <List.Item fontWeight="bold" fontSize="md">Cocktail Shaker Sort</List.Item>
                    <List.Item fontWeight="bold" fontSize="md">Odd-Even Sort</List.Item>
                </List.Root>
                <ComplexityTable title="Time Complexity" bestCase="n" averageCase="n^(2)" worstCase="n^(2)" description="Where n is the number of items in input list."/>
                <ComplexityTable title="Space Complexity" bestCase="1" averageCase="1" worstCase="1"/>
                <PseudoCode pseudoCode={error ? error : sourceCode ? sourceCode.pseudo : "Loading..."}/>
                <Text fontWeight="bold" fontSize="lg">Optimizations</Text>
                <Text>For the source code of the Bubble Sort Algorithm below, I will deviate from the above pseudo code by changing the variable flag to check if a swap was made to the index of the last swap made. This will prevent unnecessary traversal of already sorted items and allow skips be made. To write Bubble Sort algorithm without the optimization, follow the above pseudo code in your preferred language.</Text>
                <SourceCode
                    java={error ? error : sourceCode ? sourceCode.java : "Loading..."}
                    python={error ? error : sourceCode ? sourceCode.python : "Loading..."}
                    php={error ? error : sourceCode ? sourceCode.php : "Loading..."}
                />
                <LogicDisplay type="BubbleSort"></LogicDisplay>
                <Text fontWeight="bold" fontSize="lg">References</Text>
                <List.Root ml="1em">
                    <List.Item><Link href="https://en.wikipedia.org/wiki/Bubble_sort" target="_blank">https://en.wikipedia.org/wiki/Bubble_sort<LuExternalLink/></Link></List.Item>
                </List.Root>
            </Stack>
        </Box>
    );
}

export default BubbleSort;