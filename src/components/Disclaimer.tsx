import React from 'react';

import { Box, Text } from '@chakra-ui/react';

import NavBar from './custom/NavBar';

function Disclaimer() {
    return (
        <Box>
            <NavBar selected={2}/>
            <Box pt="8em" mx="10%">
                <Text fontWeight="bold" fontSize={{sm: "1.5em", md: "2em"}}>Disclaimer</Text>
                <Text mb="2em">
                    <Text fontWeight="bold">I do not and will not claim to own any of the algorithms, data structures and other tech concepts mentioned throughout the website.</Text>
                    <Text>The only exception to this is if I did in fact actually invent and develop a new algorithm, data structure or tech concept which in that case, I will mentioned.</Text>
                </Text>
                <Text mb="2em">
                    <Text fontWeight="bold">The code and content from any of the algorithms, data structures and other tech concepts mentioned throughout Algorithm Directory are from physical and virtual notes I written while studying them.</Text>
                    <Text>What I write should not be considered law or absolute. I will make mistakes and will often correct code ranging from syntax errors while copying handwritten code over to an entire algorithm having a fatal flaw that requires overhaul. I will post a Wikipedia link or another relevant website to ensure you have another source to cross reference with and refer to for additional information.</Text>
                </Text>
                <Text mb="2em">
                    <Text fontWeight="bold">Code and Cotent Origins and Integrity</Text>
                    <Text>The notes I written and saved ranges from handouts and notes I took back in college to forums and videos on the internet I looked at today. For many of them, I no longer remember where they originated with the exception that I mentioned it in my notes. Unless I know for certain, I will not make citations for the widely known algorithms, data structures and other tech concepts to prevent citation errors and misrepresentations. For the more niche and future ones, I will try my best to ensure that they have proper citations.</Text>
                </Text>
                <Text mb="2em">
                    <Text fontWeight="bold">Plagarism</Text>
                    <Text>I like to reference a professor I took in college about plagarizing and copying from sources in the Computer Science industry: "You are free to use and refer to any online code so long as you are able explain it line by line" (p.s. going off from memory so not an exact quote). The point is you are free to use any of the code in Algorithm Directory so long as you understand what it does and do not claim it as yours. Legal matters with plagarizing is far more complex so I will only talk about it for my website. Should you decide to put any code, definitions or other text from this website in a research paper or other published works, please do references and citations accordingly.</Text>
                </Text>
                <Text mb="2em">
                    <Text fontWeight="bold">If there is an algorithm or data structure not listed, it is likely I have not gotten to transferring it over from my notes or I am not aware of its existance.</Text>
                    <Text>Either way, this website should not be your only source of info on such topics.</Text>
                </Text>
                <Text mb="2em">
                    <Text fontWeight="bold">I have no roadmap or future plans except to add more stuff when time permits.</Text>
                    <Text>Algorithm Directory serves as a resource for me to review and organize algorithms, data structures and other tech concepts that I have learned throughout my career as a programmer. This website may even go down or become inactive but I will try to keep it up to the best of my ability. Do note that work, personal life and other factors can affect anything I wrote in this section and the above disclaimers.</Text>
                </Text>
            </Box>
        </Box>
    );
}

export default Disclaimer;