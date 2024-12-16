import React, { useEffect, useState } from 'react';

import { Stack, Box, Text, Flex, Link, List } from '@chakra-ui/react';
import { LuExternalLink } from "react-icons/lu";

import RequestService from '../../services/RequestService';
import SourceCodeMap from "../../types/SourceCodeMap";

import NavBar from '../custom/NavBar';
import PseudoCode from '../custom/PseudoCode';
import SourceCode from '../custom/SourceCode';

function Node() {
    const [sourceCode, setSourceCode] = useState<SourceCodeMap>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await RequestService.fetchDataStructureSourceCode('getDataStructure/Node');
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
                <Text fontWeight="bold" fontSize={{sm: "2em", md: "2.5em"}}>Node</Text>
            </Flex>
            <Text>Node is a basic unit of data structure, holding one or more properties consisting of values, conditions, pointers, or references.</Text>
            <Text>Nodes are often not used alone but rather to be arranged into more complex data structures like Node List and Binary Search Tree. There are multiple methods to represent a Node but the most common one is a Class which is what this page and all other data structure pages will be using.</Text>
            <Text>Assuming a Node data structure containing only one value, Nodes use methods(functions) to allow more functionality, customization and flexibility. Of course, methods are optional but it would become a static Node with a fixed default value. There are two recommended methods and two optional methods:</Text>
            <List.Root ml="1em">
                <List.Item>Setter (recommended): used to redefine the value Node holds.</List.Item>
                <List.Item>Getter (recommended): used to retrieve the value Node holds.</List.Item>
                <List.Item>Constructor (optional): allows the initialization of a value along with the Node.</List.Item>
                <List.Item>Printer (optional): used to output the Node as a readable string.</List.Item>
            </List.Root>
            <Text mb="2em">Node is naturally discovered by many individuals with their own set of terminology and development. Due to this, Node terminology such as Parent and Child or Root and Leaf will be discussed and defined in the respected data structure when required. Otherwise, it would be an excessive amount of information covered here that many data structures would have to refer to should a reader require additional information.</Text>
            <PseudoCode pseudoCode={error ? error : sourceCode ? sourceCode.pseudo : "Loading..."}/>
            <SourceCode
                java={error ? error : sourceCode ? sourceCode.java : "Loading..."}
                python={error ? error : sourceCode ? sourceCode.python : "Loading..."}
                php={error ? error : sourceCode ? sourceCode.php : "Loading..."}
            />
            <Text fontWeight="bold" fontSize="lg">References</Text>
            <List.Root ml="1em">
                <List.Item><Link href="https://en.wikipedia.org/wiki/Node_(computer_science)" target="_blank" display="inline-flex">https://en.wikipedia.org/wiki/Node_(computer_science)<LuExternalLink/></Link></List.Item>
            </List.Root>
        </Stack>
    </Box>
}

export default Node;