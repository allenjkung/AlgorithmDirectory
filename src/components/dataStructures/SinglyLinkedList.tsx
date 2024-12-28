import React, { useEffect, useState } from 'react';

import { Stack, Box, Text, Flex, Link, List } from '@chakra-ui/react';
import { LuExternalLink } from "react-icons/lu";

import RequestService from '../../services/RequestService';
import SourceCodeMap from "../../types/SourceCodeMap";

import NavBar from '../custom/NavBar';
import PseudoCode from '../custom/PseudoCode';
import SourceCode from '../custom/SourceCode';

function SinglyLinkedList() {
    const [sourceCode, setSourceCode] = useState<SourceCodeMap>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await RequestService.fetchDataStructureSourceCode('getDataStructure/SinglyLinkedList');
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
    return <Box mb="2em">
        <NavBar selected={-1}/>
        <Stack mx="10%" pt="5em">
            <Flex direction="column" alignItems="center" textAlign="center">
                <Text fontWeight="bold" fontSize={{sm: "2em", md: "2.5em"}}>Singly Linked List</Text>
            </Flex>
            <Text>Singly Linked List, often referred to as just Linked List, is a collection of data structures chain together in a singular direction creating a sequence of data structures.</Text>
            <Text>Like many other data structures, Linked List is customizable leading to endless modifications, optimizations and variants. Although the data structure Linked List consist of can vary in both type and variety, the most common form of Linked List is a collection of the Node data structure. For what the data structure should consist of, it can have a wide variety of properties and features. At the bare minimum, the data structures Linked List uses must have the following:</Text>
            <List.Root ml="1em">
                <List.Item>A value.</List.Item>
                <List.Item>A reference to point to the next data structure.</List.Item>
            </List.Root>
            <Text>A reference to the next data structure is what allows a Linked List to be able to become a sequence of data structures.</Text>
            <Text>Below are terminology to better understand Linked Lists:</Text>
            <List.Root ml="1em">
                <List.Item>Head (Head Node): start of the Linked List. It should not be referenced to by any data structure in Linked List.</List.Item>
                <List.Item>Tail (Tail Node): end of the Linked List. It should have nothing to reference to.</List.Item>
                <List.Item>Size: number of unique Data Structures in Linked List.</List.Item>
            </List.Root>
            <Text>With the above properties and terminology, a Linked List that consist of only a collection of Node data structures has five recommended methods and two optional methods:</Text>
            <List.Root ml="1em">
                <List.Item>Insert (recommended): used to set and add a value at the start of Linked List (Push), at the end of Linked List (Enqueue), or at a specific position (Add).</List.Item>
                <List.Item>Retrieve (recommended): used to get and remove a value at the start of Linked List (Pop), at the end of Linked List (Dequeue), or at a specific position (Remove).</List.Item>
                <List.Item>Setter (recommended): used to redefine the value a Node holds, typically at a position in the Linked List.</List.Item>
                <List.Item>Getter (recommended): used to retrieve the value a Node holds, typically at a position in the Linked List.</List.Item>
                <List.Item>Search (recommended): used to determine if a value exist in the Linked List. Can return either a boolean, position found at or the Node itself. It is typically based off the first match found in the scenario of duplicates.</List.Item>
                <List.Item>Size (optional): used to get the number of Nodes in a Linked List.</List.Item>
                <List.Item>Printer (optional): used to output the Linked List as a readable string.</List.Item>
            </List.Root>
            <Text>Linked List is most often compared with an Array. Note that with proper manipulation, both can fit to have the same functionality as the other data structure. Array is more practical to use as it is now a prebuilt library in practically every programming language. There are two distinct advantages in using Linked List:</Text>
            <List.Root ml="1em">
                <List.Item>Constant Time insertions and deletions in certain positions (Ex: Add a Node at Head).</List.Item>
                <List.Item>Scalability when adding Nodes. Arrays need to redeclare and copy memory should the number of items grow too large.</List.Item>
            </List.Root>
            <Text>It is important to note that these advantages only apply to traditional arrays as they simply do not have the ability to do the above (Ex: Java). Many array libraries have applied methods to perform the same functionality (Ex: PHP) while the others have an alternative library (Ex: ArrayList for Java). For performance, each language will vary but most have array optimized to reduce the difference significantly.</Text>
            <Text>Therefore, Linked List should be used as a learning to tool as there are many variants of it. The knowledge of how it can be manipulated is a major soft skill in approaching problems and challenges even outside the computer science industry.</Text>
            <Text fontWeight="bold" fontSize="lg">Variants</Text>
            <List.Root ml="1em">
                <List.Item fontWeight="bold" fontSize="md">Doubly Linked List</List.Item>
                <List.Item fontWeight="bold" fontSize="md">Circular Linked List</List.Item>
            </List.Root>
            <PseudoCode pseudoCode={error ? error : sourceCode ? sourceCode.pseudo : "Loading..."}/>
            <SourceCode
                java={error ? error : sourceCode ? sourceCode.java : "Loading..."}
                python={error ? error : sourceCode ? sourceCode.python : "Loading..."}
                php={error ? error : sourceCode ? sourceCode.php : "Loading..."}
            />
            <Text fontWeight="bold" fontSize="lg">References</Text>
            <List.Root ml="1em">
                <List.Item><Link href="https://en.wikipedia.org/wiki/Linked_list" target="_blank" display="inline-flex">https://en.wikipedia.org/wiki/Linked_list<LuExternalLink/></Link></List.Item>
            </List.Root>
        </Stack>
    </Box>
}

export default SinglyLinkedList;