import React from 'react';

interface Props {
    htmlString : string,
}

function MathString(props: Props) {
    const { htmlString } = props;

    const superScriptRegex = /\^\((.*?)\)/g;
    const htmlStringSegments = htmlString.split(superScriptRegex);

    const htmlOutput = (
        htmlStringSegments.map((segment, index) => {
            if(index % 2 === 1) {
                return <sup>{segment}</sup>;
            }
            return segment;
        })
    );

    return (
        <span>{htmlOutput}</span>
    );
}

export default MathString;