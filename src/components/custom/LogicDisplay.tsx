import React, { useEffect, useState, useCallback, useRef } from 'react';

import { Stack, Box, Flex, Input, Code } from '@chakra-ui/react';
import { Button } from "../ui/button";

import RequestService from '../../services/RequestService';

interface Props {
    type : string
    typeHeader? : string
}

function LogicDisplay(props: Props) {
    const { type, typeHeader } = props;

    const [typeHeaderStr, setTypeHeaderStr] = useState<string>();
    const [outputStr, setOutput] = useState<string>();
    const [inputListStr, setInputListStr] = useState<string>("[8, 128, 64, 4, 32, 16]");
    const [error, setError] = useState<string | null>(null);
    const [useEffectFlag, setUseEffectFlag] = useState<boolean>(false);
    const latestinputListStrRef = useRef(inputListStr);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value: NewValue } = event.target;
        latestinputListStrRef.current = NewValue;
        setInputListStr(NewValue);
    }

    function formattedArr(arr: number[]) {
        const valuesLength = arr.length;
        let output = '';
        if(valuesLength > 0) {
            output = String(arr[0]);
            for(let i = 1; i < valuesLength; i += 1) {
                output += (', ' + arr[i]);
            } 
        }
        return output;
    }

    const runLogic = useCallback(async () => {
        let inputListArr: number[] = [];
        try {
            const refInputListStr = latestinputListStrRef.current;
            console.log(refInputListStr);
            if(refInputListStr.match(/^\[.*\]$/)) {
                const inputListFormattedStr = refInputListStr.replace(/^\[|\]$/g,'');
                if(inputListFormattedStr === '') {
                    alert('Invalid input. Please have at least one element for the algorithm to sort.');
                    throw new Error('No Values to Read');
                }
                const inputListFormattedArr = inputListFormattedStr.split(',');
                inputListArr = inputListFormattedArr.map((val) => {
                    if(isNaN(Number(val))) {
                        alert('Invalid input. Please format the input similar to the following: [8, 128, 64, 4, 32, 16]');
                        throw new Error('Invalid Format');
                    }
                    return Number(val);
                });
            }
            else {
                alert('Invalid input. Please put brackets around like the following: [8, 128, 64, 4, 32, 16]');
                throw new Error('Invalid Format');
            }
        }
        catch(err) {
            setOutput("Invalid Input...");
            return;
        }
        try {
            const postData = {inputList : inputListArr};
            const result = await RequestService.runAlgorithm(("runAlgorithm/" + type), postData);
            if(result.status === 200) {
                const outputArr = result.output
                const loops = outputArr.length;
                if(loops > 0) {
                    let loopsStr = ("Initial: [" + formattedArr(outputArr[0]) + "]\r\n");
                    if(type == "Heapsort") {
                        loopsStr += ("Heapify: [" + formattedArr(outputArr[1]) + "]\r\n");
                        for(let i = 2; i < loops; i += 1) {
                            loopsStr += ("loop: " + (i - 1) + ": [" + formattedArr(outputArr[i]) + "]\r\n");
                        }
                    }
                    else if(type == "CountingSort") {
                        loopsStr += ("Count List: [" + formattedArr(outputArr[1]) + "]\r\n");
                        loopsStr += ("Count List loop: 1: [" + formattedArr(outputArr[2]) + "]\r\n");
                        loopsStr += ("Output List: [" + formattedArr(outputArr[3]) + "]\r\n");
                    }
                    else {
                        for(let i = 1; i < loops; i += 1) {
                            loopsStr += ("loop: " + i + ": [" + formattedArr(outputArr[i]) + "]\r\n");
                        }
                    }
                    loopsStr += ("Final: [" + formattedArr(outputArr[(loops - 1)]) + "]\r\n");
                    setOutput(loopsStr);
                }
            }
            else {
                throw new Error('File not found');
            }
        }
        catch(err) {
            console.log(err);
            setError('Failed to run algorithm.');
        }
    }, [type]);
    
    useEffect(() => {
        if(!useEffectFlag) {
            latestinputListStrRef.current = inputListStr;
            runLogic();
            if(typeHeader) {
                const typeHeaderHTML = " (" + typeHeader + ")";
                setTypeHeaderStr(typeHeaderHTML);
            }
            setUseEffectFlag(true);
        }
    }, [runLogic, inputListStr, useEffectFlag]);
    return (
        <Stack mb="1em">
            <Box fontWeight="bold" fontSize="lg" textAlign="center">Run Test{typeHeaderStr}</Box>
            <Box mb=".5em">Enter numbers in the same format in the input below and click on run to see how the algorithm sorts the array per loop.</Box>
            <Flex><Input variant="outline" value={inputListStr} onChange={handleInputChange}/><Button variant="subtle" onClick={runLogic}>Run</Button></Flex>
            <Code padding="1em" fontSize="md" whiteSpace="pre-wrap" wordBreak="break-word" overflowWrap="anywhere" lineHeight={1.25} maxWidth="100%" overflowX="auto">{error ? error : outputStr ? outputStr : "Loading..."}</Code>
        </Stack>
    );
}

export default LogicDisplay;