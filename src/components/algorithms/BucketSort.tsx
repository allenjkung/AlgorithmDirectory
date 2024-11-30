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

function BucketSort() {
    const [sourceCode, setSourceCode] = useState<SourceCodeMap>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await RequestService.fetchAlgorithmSourceCode('getAlgorithm/BucketSort');
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
                    <Text fontWeight="bold" fontSize={{sm: "2em", md: "2.5em"}}>Bucket Sort</Text>
                </Flex>
                <Text>Bucket Sort, also know as Bin Sort, can either be a comparision or non-comparison based sorting algorithm.</Text>
                <Text>Bucket Sort works by distributing items of an Input List into Buckets. How many and factors to determine the Buckets can vary greatly. The process for Bucket Sort is as follow:</Text>
                <List.Root ml="1em">
                    <List.Item>Set up an array of initially empty Buckets.</List.Item>
                    <List.Item>Loop through each Item in Input List and place them into the most suited Bucket.</List.Item>
                    <List.Item>Sort each Bucket using either a different sorting algorithm or itself.</List.Item>
                    <List.Item>Loop through each Bucket in order and insert its Items back into Input List.</List.Item>
                </List.Root>
                <Text>Normally, I would provide info on the history of Bucket Sort but that is quite difficult due to the generalized nature of it being shared across a multitude of different sorting algorithms. If I had to pick when it was created and by who, it would be Harold H. Seward in 1954 as a variant of Radix Sort as mentioned by Donald Ervin Knuth <sup>[1]</sup>. Bucket Sort is extremely customizable and flexible making any sorting algorithm that utilizes a distrbutation logic technically a variant of Bucket Sort. Some may even stretch this concept to divide and conquer algorithms like Quicksort and Merge Sort. Regardless, The concept of distributing items into buckets is an idea all developers will come across whether they are aware or not.</Text>
                <Text>Compare to other algorithms, Bucket Sort alone is highly unadvised as there are alternative N constant algorithms that on average are more optimal while using up similar or less memory. Bucket Sort also suffers from a O(n<sup>2</sup>) worst case time complexity if items are densely populated and buckets are chosen incorrectly. Compared to the other sorting algorithms, it is no different than the other N constant algorithms in strengths and weaknesses in that it is on average more optimal in performance but in return use more memory space and can only be applied in specific scenarios.</Text>
                <Text>The scenario where Bucket Sort is most favorable is when the items in the Input List are large and sparsely populated. Otherwise, Bucket Sort is most commonly used today in combination with other algorithms. Its ability to potentially reduce the size required to sort greatly benefits algorithms that are not as optimal as the N constant sorting algorithms.</Text>
                <Text fontWeight="bold" fontSize="lg">Optimizations</Text>
                <Text>There are a lot of research and experimentations made to bring out the main advantage of Bucket Sort which is the most optimal distribution of items in an Input List. They all lead to the end goal of 1 item per bucket or 1 value type per bucket as both guaranteed no sorting is required. Of course this is the ideal outcome so it is not always possible unless forced such as Pigeonhole Sort and Bead Sort. The compromise is Bucket Sort creating more managable Buckets for another algorithm to sort. Bucket Sort most often used in combination with the libraries default sorting method.</Text>
                <Text>Another interesting topic to explore is to use Insertion Sort as its best case is O(n). Bucket Sort would greatly reduce Insertion Sort's worse case O(n<sup>2</sup>) as any item that would have been far away from is sorted position would be brought signifigantly closer. Bucket Sort and parallel methods was another explored topic as the Buckets would be complete separate from each other making asynchronous sorting more practical. Of course this would greatly increase the run density increasing CPU and memory usage.</Text>
                <Text>For the source code and logic below, I will be using Bucket Sort in combination with two other algorithms: Pigeonhole sort for ranges smaller than the bucket count and the library default for sorting the buckets otherwise. This will greatly modify the Time and Space complexity depending on the default library so below is the most optimal outcome. It will also assume and only sort positive integers. To use Bucket Sort with another algorithm, simply replace the sorting algorithms used with your method of choice.</Text>
                <Text fontWeight="bold" fontSize="lg">Variants</Text>
                <List.Root ml="1em">
                    <List.Item fontWeight="bold" fontSize="md">Radix Sort</List.Item>
                    <List.Item fontWeight="bold" fontSize="md">Counting Sort</List.Item>
                    <List.Item fontWeight="bold" fontSize="md">Pigeonhole Sort</List.Item>
                    <List.Item fontWeight="bold" fontSize="md">Bead Sort</List.Item>
                    <List.Item fontWeight="bold" fontSize="md">Burstsort</List.Item>
                </List.Root>
                <ComplexityTable title="Time Complexity" bestCase="n + b" averageCase="n + b" worstCase="n^(2)" description="Where n is the number of items in input list and b is the number of buckets used"/>
                <ComplexityTable title="Space Complexity" bestCase="n + b" averageCase="n + b" worstCase="n + b" description="Note that time and space complexity can greatly vary depending on the algorithm used to sort the buckets created."/>
                <PseudoCode pseudoCode={error ? error : sourceCode ? sourceCode.pseudo : "Loading..."}/>
                <SourceCode
                    java={error ? error : sourceCode ? sourceCode.java : "Loading..."}
                    python={error ? error : sourceCode ? sourceCode.python : "Loading..."}
                    php={error ? error : sourceCode ? sourceCode.php : "Loading..."}
                />
                <LogicDisplay type="BucketSort"></LogicDisplay>
                <Text fontWeight="bold" fontSize="lg">References</Text>
                <List.Root ml="1em">
                    <List.Item>[1] Donald Ervin Knuth, The art of computer programming. 3 Sorting and searching. Addison-Wesley, 2014.</List.Item>
                    <List.Item><Link href="https://en.wikipedia.org/wiki/Bucket_sort" target="_blank" display="inline-flex">https://en.wikipedia.org/wiki/Bucket_sort<LuExternalLink/></Link></List.Item>
                </List.Root>
            </Stack>
        </Box>
    );
}

export default BucketSort;