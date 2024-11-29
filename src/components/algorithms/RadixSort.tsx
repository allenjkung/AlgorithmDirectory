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

function RadixSort() {
    const [sourceCode, setSourceCode] = useState<SourceCodeMap>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await RequestService.fetchAlgorithmSourceCode('getAlgorithm/RadixSort');
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
                    <Text fontWeight="bold" fontSize={{sm: "2em", md: "2.5em"}}>Radix Sort</Text>
                </Flex>
                <Text>Radix Sort is a non-comparison sorting algorithm.</Text>
                <Text>Radix Sort operates by distrbuting items in an input list into seprate buckets based on the radix value. The radix value varies depending on the data type. For example, an integer would be the digit (0-9) while a string would be the letter (a-z).</Text>
                <Text>When there is an item that have more than one radix value (ex. 19 where 1 and 9 are radix values), Radix Sort would repeat itself for each radix value. Radix sort would preserve the ordering of the prior sorting it has done to account for items that may have the same radix value. For example, input lists [18,17] and [17,18] would first handle the radix value at the second digit 1, both input lists should not change. When handling the radix value at the first digit 8 and 7, the first input list becomes [17,18] while the second input list remains the same.</Text>
                <Text>The next part of Radix Sort is how to sort the radix value list. Radix Sort does not sort the radix value list but rather another algorithm does. Not all algorithms can be used though as it must be a Stable Sort Algorithm. A Stable Sort Algorithm is an algorithm that preserves the order of the input list when there are duplicate items in the input list. Radix Sort depends on the integrity of where items are place as it is not comparing the entire item but partial. The most common algorithm to use is Counting Sort due to its optimal performance on large data sets of small numbers.</Text>
                <Text>Radix Sort is arguably the first sorting algorithm. Though some may argue that either Merge Sort or Bubble Sort are older in terms of use in computer machines. I would argue it is the oldest in terms of concept because Radix Sort were used in sorting punch cards for tabulating machinery as early as 1923 so its development is likely older<sup>[1]</sup>. The first memory efficient application on a computer machine is in 1954 by Harold H. Steward who introduced the use of Radix Sort along with Counting Sort to sort the individual list of radix values<sup>[2]</sup>. Radix Sort was once dismissed due to memory limitations but the combination of improved technology and algorithm technique made Radix Sort practical. The algorithm technique was to first loop through the input list and create required buckets and other info beforehand instead of during the sort, drastically reducing the memory required.</Text>
                <Text>Radix Sort is used today primarily for sorting positive integers and binary. When combined with Counting Sort, it is the most optimal algorithm for such applications. Like most N constant algorithms, Radix Sort is not a flexible algorithm as it can only sort items lexicographically. For smaller input lists, it can be considered overkill and even slower due its complexity when compared with simpler and suboptimal algorithms. It may also take up additional memory space depending on the algorithm used to sort the radix value list.</Text>
                <Text fontWeight="bold" fontSize="md">MSD vs. LSD</Text>
                <Text>There are two ways to retrieve the Radix Value List:</Text>
                <List.Root ml="1em">
                    <List.Item>Most Significant Digit (MSD)</List.Item>
                    <List.Item>Least Significant Digit (LSD)</List.Item>
                </List.Root>
                <Text>Both methods are important and have optimal use cases when compared to each other. LSD sorts from short keys to large keys, making it preferable for handling integers and numbers from least to greatest. MSD on the other hand, is the opposite and more suited to handling strings. It is also more preferable for fixed length integers and numbers if wanting to sort from greatest to least. MSD can also be manipulated to treat numbers as a string to sort in a specific way. They have other differences but are mostly in how the source code is written such as LSD is more comfortably written iteratively while MSD as recursively. Do note that both can be written as iteratively or recursively.</Text>
                <Text mb="2em">For the source code and logic below, I will be using a LSD Radix Sort that will use Counting Sort as the choice of algorithm to sort the radix value list. It will also assume and only sort positive integers.</Text>
                <ComplexityTable title="Time Complexity" bestCase="nw" averageCase="nw" worstCase="nw" description="Where n is the number of items in input list and w is the length of the longest item in input list"/>
                <ComplexityTable title="Space Complexity" bestCase="n + w" averageCase="n + w" worstCase="n + w" description="Note that time and space complexity can greatly vary depending on the algorithm used to sort the buckets created by Radix Sort."/>
                <PseudoCode pseudoCode={error ? error : sourceCode ? sourceCode.pseudo : "Loading..."}/>
                <SourceCode
                    java={error ? error : sourceCode ? sourceCode.java : "Loading..."}
                    python={error ? error : sourceCode ? sourceCode.python : "Loading..."}
                    php={error ? error : sourceCode ? sourceCode.php : "Loading..."}
                />
                <LogicDisplay type="RadixSort"></LogicDisplay>
                <Text fontWeight="bold" fontSize="lg">References</Text>
                <List.Root ml="1em">
                    <List.Item><Link href="https://par.cse.nsysu.edu.tw/~algo/paper/paper06/C15.pdf" target="_blank" display="inline-flex">[1] C.-J. Huang#, C.-T. Guan, and Y.-T. Chuang, “Enhanced Generic Key-Address Mapping Sort Algorithm.”, https://par.cse.nsysu.edu.tw/~algo/paper/paper06/C15.pdf Accessed: Nov. 29, 2024. [Online]<LuExternalLink/></Link></List.Item>
                    <List.Item>[2] Donald Ervin Knuth, The art of computer programming. 3 Sorting and searching. Addison-Wesley, 2014.</List.Item>
                    <List.Item><Link href="https://en.wikipedia.org/wiki/Radix_sort" target="_blank" display="inline-flex">https://en.wikipedia.org/wiki/Radix_sort<LuExternalLink/></Link></List.Item>
                </List.Root>
            </Stack>
        </Box>
    );
}

export default RadixSort;