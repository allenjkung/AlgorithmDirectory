import React from 'react';

import { ClipboardIconButton, ClipboardRoot } from "../ui/clipboard";
import { Tabs, Code } from "@chakra-ui/react";

interface Props {
    java : string;
    python : string;
    php : string;
}

function SourceCode(props: Props) {
    const { java, python, php } = props;
    return (
        <Tabs.Root defaultValue="java" mb="5em" height="75vh">
            <Tabs.List>
                <Tabs.Trigger value="java">Java</Tabs.Trigger>
                <Tabs.Trigger value="python">Python</Tabs.Trigger>
                <Tabs.Trigger value="php">PHP</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="java">
                <Code position="relative" padding="1em" fontSize="md" whiteSpace="pre-wrap" lineHeight={1.25} width="100%">
                    <ClipboardRoot value={java} zIndex="100" position="absolute" top="0" right="0">
                        <ClipboardIconButton m="3"/>
                    </ClipboardRoot>
                    {java}
                </Code>
            </Tabs.Content>
            <Tabs.Content value="python">
                <Code position="relative" padding="1em" fontSize="md" whiteSpace="pre-wrap" lineHeight={1.25} width="100%">
                    <ClipboardRoot value={python} zIndex="100" position="absolute" top="0" right="0">
                        <ClipboardIconButton m="3"/>
                    </ClipboardRoot>
                    {python}
                </Code>
            </Tabs.Content>
            <Tabs.Content value="php">
                <Code position="relative" padding="1em" fontSize="md" whiteSpace="pre-wrap" lineHeight={1.25} width="100%">
                    <ClipboardRoot value={php} zIndex="100" position="absolute" top="0" right="0">
                        <ClipboardIconButton m="3"/>
                    </ClipboardRoot>
                    {php}
                </Code>
            </Tabs.Content>
        </Tabs.Root>
    );
}

export default SourceCode;