import React from 'react';

import { Grid, GridItem, Box } from '@chakra-ui/react';

import MathString from './MathString';

interface Props {
    title? : string,
    bestCase : string,
    averageCase : string,
    worstCase : string,
    description? : string
}

function ComplexityTable(props: Props) {
    const { title, bestCase, averageCase, worstCase, description } = props;

    let totalColumns = 2;
    if(description) {
        totalColumns += 1;
    }
    if(title) {
        totalColumns += 1;
    }
    let templateRowValue = ("repeat(" + totalColumns + ", 1fr)");

    return(
        <Grid templateRows={templateRowValue} templateColumns="repeat(3, 1fr)" mb="1em">
            {title ? (<GridItem colSpan={3} mb=".5em" fontWeight="bold" fontSize="lg"><Box textAlign="center">{title}</Box></GridItem>) : null}
            <GridItem fontWeight="bold"><Box shadow="md" textAlign="center">Best Case</Box></GridItem>
            <GridItem fontWeight="bold"><Box shadow="md" textAlign="center">Average Case</Box></GridItem>
            <GridItem fontWeight="bold"><Box shadow="md" textAlign="center">Worst Case</Box></GridItem>
            <GridItem><Box textAlign="center">O(<MathString htmlString={bestCase}></MathString>)</Box></GridItem>
            <GridItem><Box textAlign="center">O(<MathString htmlString={averageCase}></MathString>)</Box></GridItem>
            <GridItem><Box textAlign="center">O(<MathString htmlString={worstCase}></MathString>)</Box></GridItem>
            {description ? (<GridItem colSpan={3}><Box>**{description}</Box></GridItem>) : null}
        </Grid>
    );
}

export default ComplexityTable;