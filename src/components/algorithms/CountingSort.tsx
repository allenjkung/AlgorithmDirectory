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

function CountingSort() {
    const [sourceCode, setSourceCode] = useState<SourceCodeMap>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await RequestService.fetchAlgorithmSourceCode('getAlgorithm/CountingSort');
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
    return (
        <Box mb="2em">
            <NavBar selected={-1}/>
            <Stack mx="10%" pt="5em">
                <Flex direction="column" alignItems="center" textAlign="center">
                    <Text fontWeight="bold" fontSize={{sm: "2em", md: "2.5em"}}>Counting Sort</Text>
                </Flex>
                <Text>Counting Sort is a non-comparison integer sorting algorithm.</Text>
                <Text>Counting Sort operates by creating two additional lists:</Text>
                <List.Root ml="1em">
                    <List.Item>Count List: represents the total count an item appears in the Input List.</List.Item>
                    <List.Item>Output list: the final sorted list which can either be returned or copied into the Input List.</List.Item>
                </List.Root>
                <Text>Once the Count List is created and filled in, it is modified by looping through each count and applying the previous total creating a sum that points to the highest position the distinct item should be assigned to in the Output List. The Output List is then populated by going through each item in Input List and assigning it to the corresponding position in Output List using Count List as the reference. For every item passed, Count List will decrease the count of position item by 1 to account for duplicate items in Input List.</Text>
                <Text>It is a concise, short and complex sorting algorithm developed in 1954 by Harold H. Seward. Its main application was the ability to sort large data sets of small integers in near O(n) time complexity (roughly O(4n + k)). It is O(n + k) in time complexity where k is the highest number in the given input list. Despite its speed, it is inflexible as it designed specifically for positive integers and floats but with some proper manipulation, other data types can be sorted too. There are a number of niche scenarios where the sorting algorithm would perform poorly to even some of the suboptimal sorting algorithms.</Text>
                <Text>Compare to all other algorithms out there, it is the most optimal in what is designed to sort; large data sets of small integers. A general rule of thumb is as long as the number of items in the input list is consistently greater than k, Counting Sort is a solid option. If this information is unknown or not true, a different sorting algorithm would be advised. Counting Sort can be used to optimally sort larger numbers when in combination with Radix Sort. Radix sort specializes in sorting large sparsed out numbers which compliments for Counting Sort's weakness while Radix Sort needs a Stable Sorting Algorithm to sort digits from 0-9 which Counting Sort excels at.</Text>
                <Text>I will confess, I did not know how Counting Sort worked when I was first introduced to it back in college until my late senior year. Counting Sort is likely the sorting algorithm that many developers memorize without knowing how it works. The code size is small and straight foward enough to be summarized as a bunch of back to back loops containing increment, decrement and assignments. I even remember a professor I took told the class that it just works and to believe in the math when in doubt.</Text>
                <Text mb="2em">Hopefully, my explaination above and how I chose to display the logic below will give you a better understanding in how Counting Sort works besides to trust the math. If you are still confused, I would suggest to memorize the code and return once you gain additional experience in programming. Worst case, remember its main advantage is to sort large data sets of small numbers and understand the basic trade offs of N constant sorting algorithms. Also note it works quite well in combination with Radix Sort as their advantages and disadvantages compliment each other well. That should allow you to pass up to standard software developer level technical questions. I am also not familiar with the history behind Counting Sort despite being familiar with the source code and its applications. My notes contain little info and I even searched it up recently and only found mentions of the paper Seward wrote which I no longer have access to and code tutorials.</Text>
                <ComplexityTable title="Time Complexity" bestCase="n + k" averageCase="n + k" worstCase="n + k" description="Where n is the number of items in input list and k is the range of the non-negative key values"/>
                <ComplexityTable title="Space Complexity" bestCase="n + k" averageCase="n + k" worstCase="n + k"/>
                <PseudoCode pseudoCode={error ? error : sourceCode ? sourceCode.pseudo : "Loading..."}/>
                <SourceCode
                    java={error ? error : sourceCode ? sourceCode.java : "Loading..."}
                    python={error ? error : sourceCode ? sourceCode.python : "Loading..."}
                    php={error ? error : sourceCode ? sourceCode.php : "Loading..."}
                />
                <LogicDisplay type="CountingSort"></LogicDisplay>
                <Text fontWeight="bold" fontSize="lg">References</Text>
                <List.Root ml="1em">
                    <List.Item><Link href="https://en.wikipedia.org/wiki/Counting_sort" target="_blank" display="inline-flex">https://en.wikipedia.org/wiki/Counting_sort<LuExternalLink/></Link></List.Item>
                </List.Root>
            </Stack>
        </Box>
    );
}

export default CountingSort;