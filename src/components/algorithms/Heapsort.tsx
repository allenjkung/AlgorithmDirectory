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

function Heapsort() {
    const [sourceCode, setSourceCode] = useState<MultiSourceCodeMap>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await RequestService.fetchAlgorithmSourceCode('getAlgorithm/Heapsort');
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
                    <Text fontWeight="bold" fontSize={{sm: "2em", md: "2.5em"}}>Heapsort</Text>
                </Flex>
                <Text>Heapsort is an in-place comparision sorting algorithm.</Text>
                <Text>There are two different types of Heapsort that will be discussed:</Text>
                <List.Root ml="1em">
                    <List.Item>Iterative Heapsort</List.Item>
                    <List.Item>Recursive Heapsort</List.Item>
                </List.Root>
                <Text>In terms of logic, they are the same. The key difference is the tradeoff between additional memory space used for recursion and concise lines of code written. For a Heapsort algorithm that sorts in place from least to greatest, the logic can be split into two parts:</Text>
                <List.Root ml="1em">
                    <List.Item>Heapify the input list into a Heap.</List.Item>
                    <List.Item>Convert the Heap into a sorted list.</List.Item>
                </List.Root>
                <Text>This page will only go into the necessary information on the Heap data structure to provide a better understanding of Heapsort. A Heap is a data structure that can be stored and represented as a list. A Heap allows certain assumptions to be made:</Text>
                <List.Root ml="1em">
                    <List.Item>The list is a Complete Binary Tree where all levels are completely filed except for optionally the lowest level which must be filled from left to right.</List.Item>
                    <List.Item>The item at position 0 is the most sorted (ex. For integer Max Heap, the highest number).</List.Item>
                    <List.Item>A position in the Heap can determine the following:</List.Item>
                    <List.Root ml="2em">
                        <List.Item>Parent; formula: floor((position − 1) / 2). The item without a Parent(position 0 in list) is referred to as Root.</List.Item>
                        <List.Item>Left Child; formula: (2 * position) + 1.</List.Item>
                        <List.Item>Right Child; formula: (2 * position) + 2.</List.Item>
                    </List.Root>
                    <List.Item>The parent and its preceding parent of a position are more sorted (ex. For integer Max Heap, greater than item at position).</List.Item>
                    <List.Item>All children and its preceding children of a position are less sorted (ex. For integer Max Heap, less than or equal to item at position).</List.Item>
                </List.Root>
                <Text>Given the following info, A list can then be converted into a heap using one of the two methods below on each item in the list:</Text>
                <List.Root ml="2em">
                    <List.Item>Heapify Up(Sift Up). Move an item up the list until it is no longer more sorted than its parent.</List.Item>
                    <List.Item>Heapify Down(Sift Down). Move an item down the list until it is no longer less sorted than its children.</List.Item>
                </List.Root>
                <Text>The Heapsort below will be using Sift Down for the conversion as it can be optimized to only Sift Down on half of the items. This is because a Complete Binary Tree guarantees that half of the positions in the list will not have a left or right child to compare with.</Text>
                <Text>Once a Heap is created, the next step is to then convert the Heap into a sorted list by repeatedly popping the Heap until there are no more items to pop. This is done by swapping the Root of the Heap with its last position decreasing the Heap by 1 item and increasing the sorted list by 1 item. Then Sift Down the swapped item at Root to put the next most sorted item at Root to pop out.</Text>
                <Text>Invented by J. W. J. Williams in 1963-1964, Heapsort is derived alongside the development of the Heap data structure<sup>[1]</sup>. In 1964, Robert W. Floyd published a more optimal version of the algorithm by making it sort in place. Being the first efficient sorting algorithm to utilize a data structure, it sprung up countless research and optimizations to the algorithm while encouraging many to experiment with data structures to produce variants and even entirely different sorting and search algorithms.</Text>
                <Text>Bottom-up Heapsort is the current optimized version of Heapsort. It is unconfirmed who first developed Bottom-up Heapsort. There are arguments claiming Floyd had the initial idea but the general consensus agrees that McDiarmid and Reed in 1989 are the first to publish a working algorithm that can outperform Quicksort on average cases for large data sets<sup>[2]</sup>. Note that a number of optimizations has been made to it since. Its main advantages is to modify the Sift Down function to cut the performance to create the Heap by half but in return increases the number of swaps and checks needed</Text>
                <Text>It is often compared to the other common divide and conquer O(nlog(n)) algorithms. All of them are around the same performance but Heap is generally slightly slower because of the extra O(n) loop needed to Heapify the input list. This makes Heapsort main strength its O(1) space complexity. It can be used to replace the O(n<sup>2</sup>) algorithms as it performs better while being in-place except against Insertion Sort for extremely small or niche data sets (less than ~50 items or in order array). This becomes more complicated when taking into account variants of the other sorting aglorithms. In the end, a specialized N constant sorting algorithm will out peform them in speed making their main strengths universal implementation and acceptable memory space required while maintaining efficient performance.</Text>
                <Text>Sometimes called Selection Sort with a data structure or consistent Insertion Sort. Heap Sort is one of my two favorite sorting algorithms. I will try my best to be neutral but will likely be biased. Heapsort is a complex algorithm that opened a number of unexplored areas to research into during the time. There are three, technically two for in-place, Heapsorts. The first is the original by Williams which uses the Heap data structure by inserting in each item of an input list and then popping it back into it. Floyd's Heapsort takes Williams except has the input list double as a heap making it in place. Last is Bottom-up Heapsort that modern Heapsort uses.</Text>
                <Text mb="2em">What makes Heapsort unique is that all three types are not obsolete. In terms of performance, Bottom-up Heapsort is the most optimal. For learning purposes, Floyd's is better as the methodology for Sift Up and Soft Down functions are unchanged from traditional Heapsort data structure. Lastly for Williams, if you are lazy and have a library with a built in Heap and can sacrifice O(n) space, it is the easiest algorithm to implment by simply inserting the items into the Heap and then popping it back out.</Text>
                <Text fontWeight="bold" fontSize="lg">Variants</Text>
                <List.Root ml="1em">
                    <List.Item fontWeight="bold" fontSize="md">Treesort</List.Item>
                    <List.Item fontWeight="bold" fontSize="md">Smoothsort</List.Item>
                </List.Root>
                <ComplexityTable title="Time Complexity" bestCase="nlog(n)" averageCase="nlog(n)" worstCase="nlog(n)" description="Where n is the number of items in input list."/>
                <ComplexityTable title="Space Complexity" bestCase="1" averageCase="1" worstCase="1" description="Note that the recursive method does use additional space for the recursive stack."/>
                <Text fontWeight="bold" fontSize="lg">Iterative Heapsort</Text>
                <PseudoCode pseudoCode={error ? error : sourceCode ? sourceCode.pseudoIterative : "Loading..."}/>
                <SourceCode
                    java={error ? error : sourceCode ? sourceCode.javaIterative : "Loading..."}
                    python={error ? error : sourceCode ? sourceCode.pythonIterative : "Loading..."}
                    php={error ? error : sourceCode ? sourceCode.phpIterative : "Loading..."}
                />
                <Text fontWeight="bold" fontSize="lg">Recursive Heapsort</Text>
                <PseudoCode pseudoCode={error ? error : sourceCode ? sourceCode.pseudoRecursive : "Loading..."}/>
                <SourceCode
                    java={error ? error : sourceCode ? sourceCode.javaRecursive : "Loading..."}
                    python={error ? error : sourceCode ? sourceCode.pythonRecursive : "Loading..."}
                    php={error ? error : sourceCode ? sourceCode.phpRecursive : "Loading..."}
                />
                <LogicDisplay type="Heapsort" typeHeader="Iterative Heapsort"></LogicDisplay>
                <Text fontWeight="bold" fontSize="lg">References</Text>
                <List.Root ml="1em">
                    <List.Item><Link href="https://dl.acm.org/doi/10.1145/512274.512284" target="_blank" display="inline-flex">[1] G. E. Forsythe, “Algorithms,” Communications of the ACM, vol. 7, no. 6, Jun. 1964, https://dl.acm.org/doi/10.1145/512274.512284. Accessed Nov. 27, 2024. [Online]<LuExternalLink/></Link></List.Item>
                    <List.Item><Link href="https://www.sciencedirect.com/science/article/pii/089054019290005Z" target="_blank" display="inline-flex">[2] I. Wegener, “The worst case complexity of McDiarmid and Reed’s variant of BOTTOM-UP HEAPSORT is less than n log n + 1.1n,” Information and Computation, vol. 97, no. 1, pp. 86–96, Mar. 1992, https://www.sciencedirect.com/science/article/pii/089054019290005Z. Accessed Nov. 27, 2024. [Online]<LuExternalLink/></Link></List.Item>
                    <List.Item><Link href="https://en.wikipedia.org/wiki/Heapsort" target="_blank" display="inline-flex">https://en.wikipedia.org/wiki/Heapsort<LuExternalLink/></Link></List.Item>
                </List.Root>
            </Stack>
        </Box>
    );
}

export default Heapsort;