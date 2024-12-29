import React from 'react';

import { Stack, Box, Flex, Table, Text, List, Link } from '@chakra-ui/react';
import { LuExternalLink } from "react-icons/lu";

import NavBar from './custom/NavBar';
import NavCard from './custom/NavCard';

import { algorithms, algorithmsJSON, dataStructures, dataStructureJSON} from '../config';

function Home() {
    const algorithmCount = algorithms.length;
    const recentDataStructures = dataStructures.slice(-3);
    const randomAlgorithms = [];
    const randomAlgorithmIndex = [];
    while(randomAlgorithmIndex.length < 3) {
        const randomIndex = Math.floor(Math.random() * algorithmCount);
        if(randomAlgorithmIndex.indexOf(randomIndex) === -1) {
            randomAlgorithmIndex.push(randomIndex);
            randomAlgorithms.push(algorithms[randomIndex]);
        }
    }
    return (
        <Box>
            <NavBar selected={0}/>
            <Stack mx="10%">
                <Flex direction="column" alignItems="center" textAlign="center" h="100vh" pt={{base:"10em", "2xl":"25em"}}>
                    <Text fontWeight="bold" fontSize={{sm: "1.5em", md: "2em"}}>Welcome to the Algorithm Directory</Text>
                    <Text>A website containing a list of algorithms, data structures and other similar tech concepts.</Text>
                </Flex>
                <Box pt="10em">
                    <Text fontWeight="bold" fontSize={{sm: "1.5em", md: "2em"}}>About</Text>
                    <Text mb="2em">
                        <Text mb="1em">Algorithm Directory serves mainly as a resource for me to review and organize algorithms, data structures and other tech concepts that I learned throughout my career as a programmer. I have numerous handwritten notes on such topics and online files and directories located in several flashdrives and laptops. I wanted to transfer them all over to a single virtual location as it makes searching, archiving and editing easier.</Text>
                        <Text>It originally was a directory in my laptop that I locally bootup and would slowly add on to. I decided to host it on the internet instead to potentially help others who are learning such topics. If I am able to help in some way, great. Otherwise, I apologize and tried my best.</Text>
                    </Text>
                </Box>
                <Table.Root unstyled={true} h="100vh">
                    <Table.Row borderBottom="0">
                        <Table.ColumnHeader w="50%" fontWeight="bold" fontSize={{sm: "1.5em", md: "2em"}} textAlign="center">Random Algorithms</Table.ColumnHeader>
                        <Table.ColumnHeader w="50%" fontWeight="bold" fontSize={{sm: "1.5em", md: "2em"}} textAlign="center">Recently Added</Table.ColumnHeader>
                    </Table.Row>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell px="1em" py=".5em"><NavCard linkName={randomAlgorithms[0]} linkUrl={"./" + algorithmsJSON[randomAlgorithms[0]].link}/></Table.Cell>
                            <Table.Cell px="1em" py=".5em"><NavCard linkName={recentDataStructures[2]} linkUrl={"./" + dataStructureJSON[recentDataStructures[2]].link}/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell px="1em" py=".5em"><NavCard linkName={randomAlgorithms[1]} linkUrl={"./" + algorithmsJSON[randomAlgorithms[1]].link}/></Table.Cell>
                            <Table.Cell px="1em" py=".5em"><NavCard linkName={recentDataStructures[1]} linkUrl={"./" + dataStructureJSON[recentDataStructures[1]].link}/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell px="1em" py=".5em"><NavCard linkName={randomAlgorithms[2]} linkUrl={"./" + algorithmsJSON[randomAlgorithms[2]].link}/></Table.Cell>
                            <Table.Cell px="1em" py=".5em"><NavCard linkName={recentDataStructures[0]} linkUrl={"./" + dataStructureJSON[recentDataStructures[0]].link}/></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
                <Box mb="1em">
                    <Text fontWeight="bold" fontSize={{sm: "1.5em", md: "2em"}}>Website Info:</Text>
                    <Text mb="1em">This section serves to provide relevant information on the website tech stack.</Text>
                    <Text>Below is what each part of the website was built with:</Text>
                    <List.Root ml="1em" mb="1em">
                        <List.Item>Client (Frontend): TypeScript (Node.js, NPM), Styling (CSS, Chakra UI)</List.Item>
                        <List.Item>Server (Backend): Java (Spring Boot, Maven)</List.Item>
                    </List.Root>
                    <Text>Below are the links to access the Client and Server source code:</Text>
                    <List.Root ml="1em" mb="3em">
                        <List.Item><Link href="https://github.com/allenjkung/AlgorithmDirectory" target="_blank" display="inline-flex">Client (Frontend)<LuExternalLink/></Link></List.Item>
                        <List.Item><Link href="https://github.com/allenjkung/AlgorithmDirectoryServer" target="_blank" display="inline-flex">Server (Backend)<LuExternalLink/></Link></List.Item>
                    </List.Root>
                </Box>
            </Stack>
        </Box>
    );
}

export default Home;