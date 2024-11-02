import React from 'react';

import { Button } from "./ui/button";
import { HStack } from "@chakra-ui/react";

function Home() {
    return (
        <HStack>
            <Button>Click me</Button>
            <Button>Click me</Button>
        </HStack>
    );
}

export default Home;